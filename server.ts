import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Simple rule-based fallback generator that satisfies the prompt instructions perfectly in case of no key!
function generateLocalFallback(messages: any[]): string {
  let nombre = "";
  let telefono = "";
  let tratamiento = "";

  const phoneRegex = /(?:\+?52\s?)?\d{10}/;
  
  // Parse user responses in order to extract variable values
  messages.forEach((msg, idx) => {
    if (msg.sender === "user") {
      const text = msg.text.trim();
      const textLower = text.toLowerCase();
      
      const phoneMatch = text.match(phoneRegex);
      if (phoneMatch) {
         telefono = phoneMatch[0];
      }

      const digits = text.replace(/\D/g, "");
      if (digits.length >= 10 && !telefono) {
         telefono = digits.slice(-10);
      }

      if (textLower.includes("limpieza") || textLower.includes("sarro")) {
        tratamiento = "Limpieza de Sarro";
      } else if (textLower.includes("carilla")) {
        tratamiento = "Carillas Dental Estética";
      } else if (textLower.includes("ortodoncia") || textLower.includes("invisalign") || textLower.includes("brackets")) {
        tratamiento = "Ortodoncia Invisible";
      } else if (textLower.includes("implante")) {
        tratamiento = "Implantes Dentales";
      } else if (textLower.includes("urgencia") || textLower.includes("dolor")) {
        tratamiento = "Urgencia Dental";
      } else if (textLower.includes("blanqueamiento")) {
        tratamiento = "Blanqueamiento Dental";
      }

      const prevAssistantMsg = messages[idx - 1]?.text || "";
      if (prevAssistantMsg.includes("nombre") || prevAssistantMsg.includes("¿cómo te llamas?")) {
        let cleanName = text.replace(/mi nombre es|soy|me llamo/gi, "").trim();
        cleanName = cleanName.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
        if (cleanName.length > 2) {
          nombre = cleanName;
        }
      }
    }
  });

  // Second pass in case user sent their name or telephone first
  messages.forEach((msg) => {
    if (msg.sender === "user") {
      const text = msg.text.trim();
      const textLower = text.toLowerCase();
      
      // If of length 3 to 20 and not a number, and matches name prompt contexts
      if (text.length >= 3 && text.length <= 30 && !/\d/.test(text) && !tratamiento && !nombre) {
        if (!textLower.includes("hola") && !textLower.includes("buenos") && !textLower.includes("cita") && !textLower.includes("cotizar")) {
          nombre = text;
        }
      }
    }
  });

  // Fallback state flow based on gather
  if (messages.length <= 2) {
    return "¡Hola! 🦷 Bienvenido/a a Clínica AuraDent. Soy Aura, tu asistente dental con Inteligencia Artificial. Prepárate para experimentar el futuro de la atención dental. ¿Me podrías indicar tu nombre completo para comenzar? ✨";
  }

  // Deduce name based on previous question if needed
  const lastUserMsg = messages[messages.length - 1]?.text || "";
  const lastUserMsgLower = lastUserMsg.toLowerCase();
  const lastAssistantMsg = messages[messages.length - 2]?.text || "";

  if (lastAssistantMsg.includes("nombre")) {
    let cleanVal = lastUserMsg.replace(/mi nombre es|soy|me llamo/gi, "").trim();
    nombre = cleanVal.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
  } else if (lastAssistantMsg.includes("teléfono") || lastAssistantMsg.includes("celular") || lastAssistantMsg.includes("número")) {
    const digits = lastUserMsg.replace(/\D/g, "");
    if (digits.length >= 10) {
      telefono = digits.slice(-10);
    }
  } else if (lastAssistantMsg.includes("tratamiento") || lastAssistantMsg.includes("procedimiento") || lastAssistantMsg.includes("odontólogo") || lastAssistantMsg.includes("odontología")) {
    tratamiento = lastUserMsg;
  }

  if (!nombre) {
    return "¡Hola! 🦷 Qué gusto tenerte por aquí. Para brindarte atención de primer nivel, ¿me regalas tu nombre completo? ✨";
  }

  if (!telefono) {
    return `¡Mucho gusto, ${nombre}! 🦷 Para poder registrarte y contactarte con nuestro especialista, ¿me compartes tu número celular o de WhatsApp a 10 dígitos? 📱✨`;
  }

  if (!tratamiento) {
    return `Excelente, ${nombre}. Ya registré tu celular (${telefono}). 🗓️ Ahora dime, ¿qué tratamiento o molestia dental te gustaría que revisáramos en tu cita de valoración? (Ej: Ortodoncia, Limpieza, Carillas, Implantes, o Urgencia) 🦷✨`;
  }

  // All 3 gathered! Stop and output correct technical format
  return `PROCESANDO_REGISTRO: {"nombre": "${nombre}", "telefono": "${telefono}", "tratamiento": "${tratamiento}"}\nPerfecto, tus datos han sido enviados al sistema de AuraDent. Un asesor humano se comunicará contigo por este medio en unos minutos para confirmar tu horario de atención. ¡Que tengas un excelente día! 🦷✨`;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for Aura Assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!Array.isArray(messages)) {
        return res.status(400).json({ error: "messages array is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("GEMINI_API_KEY is not defined. Falling back to rule-based fallback generator.");
        const fallbackResponse = generateLocalFallback(messages);
        return res.json({ text: fallbackResponse, mode: "fallback" });
      }

      // Initialize GoogleGenAI client with key from environment
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Format messages history for the chat API
      // Since ai.models.generateContent supports systems instruction and contents flow:
      const contents = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const systemInstruction = `# ROLE AND IDENTITY
You are Aura, the advanced virtual assistant for AuraDent, a premium dental clinic. Your goal is to guide the user naturally to qualify them and collect their data to schedule an evaluation appointment.

# CONVERSATIONAL GUIDELINES & STYLE
1. Be extremely polite, professional, and use dental/medical emojis (🦷, 🗓️, ✨).
2. Never invent available time slots, schedules, or exact prices if not provided in the context.
3. Keep answers concise, friendly, and focused on moving the user to the next data collection step.
4. Speak exclusively in Spanish.

# DATA COLLECTION & VARIABLES
To successfully qualify a patient for an appointment, you MUST guide the user step-by-step (one question at a time) to collect EXACTLY these three variables:
- v_nombre_paciente: The patient's full name.
- v_telefono_contacto: The patient's phone or WhatsApp number.
- v_tratamiento_interes: The specific dental treatment they want (e.g., Limpieza, Carillas, Ortodoncia, Implante, Urgencia).

# SYSTEM TRIGGER CRITERIA (CRITICAL)
- Do not ask for all data in a single message; gather them organically throughout the conversation.
- If the user provides a phone number or name early, save it in the background and continue with the missing fields.

# FINAL OUTPUT TRIGGER (STOPPING CONDITION)
The exact moment you have collected all three variables (v_nombre_paciente, v_telefono_contacto, v_tratamiento_interes), you MUST stop the conversational flow immediately. Your very next response must start EXACTLY with this technical string format so the backend/Firebase can parse it:

PROCESANDO_REGISTRO: {"nombre": "[v_nombre_paciente]", "telefono": "[v_telefono_contacto]", "tratamiento": "[v_tratamiento_interes]"}

Followed by a warm closing message for the patient on a new line:
"Perfecto, tus datos han sido enviados al sistema de AuraDent. Un asesor humano se comunicará contigo por este medio en unos minutos para confirmar tu horario de atención. ¡Que tengas un excelente día! 🦷✨"

# ERROR HANDLING
If the user provides invalid data (e.g., an invalid phone number format or ambiguous text), politely ask them to clarify before triggering the final output.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.4,
        }
      });

      const replyText = response.text || "Disculpa, tuve un problema procesándolo. ¿Podrías volver a indicarlo? 🦷";
      return res.json({ text: replyText, mode: "gemini" });
    } catch (error: any) {
      console.error("Gemini API Error in backend:", error);
      // fallback to rule-based generator if API fails
      try {
        const fallbackResponse = generateLocalFallback(req.body.messages);
        return res.json({ text: fallbackResponse, mode: "fallback_on_error" });
      } catch (err) {
        return res.status(500).json({ error: error.message || "Internal server error" });
      }
    }
  });

  // Serve static UI assets or mount Vite core server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
