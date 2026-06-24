# 🦷 AuraDent — Odontología de Élite & Diseño Dental Digital

> **AuraDent** es una landing page de estética dental premium desarrollada con una experiencia de usuario (UX) inspirada en los diseños más sofisticados de **Framer**. Este proyecto sirve como una demo interactiva de producción de alto rendimiento, optimizada para la conversión y preparada para integraciones externas de **Agentes de Inteligencia Artificial (IA)** (como agentes conversacionales de voz, asistentes de agendamiento por WhatsApp o clasificadores de leads).

---

## ✨ Características de Diseño (Aesthetics Audit)

*   **Tipografía de Autor**: Integración premium de *Plus Jakarta Sans* para interfaces fluidas y legibles, combinado con toques de *JetBrains Mono* para datos de rendimiento clínico y técnico.
*   **Bento Grid Avanzado**: Una cuadrícula asimétrica y minimalista para presentar las ventajas clínicas con jerarquía visual de alto impacto.
*   **Deslizador de Comparación Interactivo (Antes & Después)**: Slider interactivo nativo integrado de alto rendimiento que permite al paciente comparar los resultados clínicos con gestos o ratón.
*   **Acordeón de Preguntas Frecuentes (FAQ) en Doble Columna**: Estructura asimétrica optimizada para disminuir la carga cognitiva del usuario, diseñada bajo las directrices estéticas de Framer.
*   **Persistencia de Formularios**: Pre-registro interactivo optimizado que puede alimentar flujos de automatización externos (Webhooks, CRM, Agente de IA).

---

## 🤖 Casos Prácticos de Integración de Agentes de IA

Este desarrollo ha sido auditado y diseñado específicamente como el **Front-End Demostrativo** perfecto para conectar con agentes cognitivos externos:

1.  **Agente de Agendamiento por WhatsApp**: El formulario preliminar de contacto (`/src/components/LandingPage.tsx`) está estructurado para emitir cargas útiles JSON limpias que un webhook de Make o Zapier puede enviar a un asistente GPT de WhatsApp para que finalice la reserva mediante lenguaje natural.
2.  **Agente de Voz Clínico (Retención)**: El botón interactivo y los formularios de contacto están listos para asociarse con APIs de voz en tiempo real (como Bland.ai o Vapi) mediante disparadores que activan llamadas de seguimiento personalizadas a los prospectos que muestran interés.
3.  **Chatbot Cognitivo en Tiempo Real**: El espacio flotante en la interfaz está optimizado para superponer un agente de chat externo que conozca a fondo las Preguntas Frecuentes (FAQ) configuradas en la arquitectura.

---

## 🛠️ Tecnologías Utilizadas

*   **React 18** con **Vite** para una carga ultra-rápida.
*   **TypeScript** para garantizar la seguridad de tipos en todo el desarrollo.
*   **Tailwind CSS** para un diseño responsivo altamente personalizado sin CSS acoplado.
*   **Framer Motion (motion/react)** para micro-interacciones suaves, transiciones de tarjetas y el acordeón interactivo.
*   **Lucide React** para un set de iconografía consistente y estilizada.

---

## 🚀 Despliegue en un Click (GitHub & Vercel)

El repositorio está configurado de manera nativa para ser clonado e importado de inmediato a plataformas de hosting serverless como **Vercel** o **Netlify**:

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-del-repositorio>
    cd auradent-premium
    ```
2.  **Instalar dependencias**:
    ```bash
    npm install
    ```
3.  **Iniciar en desarrollo**:
    ```bash
    npm run dev
    ```
4.  **Compilar para producción**:
    ```bash
    npm run build
    ```

---

## 📐 Estructura del Proyecto

```text
├── src/
│   ├── components/
│   │   ├── LandingPage.tsx   # Contenedor principal (Secciones bento, FAQ, Slider Antes/Después)
│   │   ├── Navbar.tsx        # Navegación fluida inteligente
│   │   └── Footer.tsx        # Pié de página corporativo con enlaces SEO
│   ├── index.css             # Importación de Tailwind CSS v4 y variables de tema de autor
│   ├── main.tsx              # Punto de entrada de la aplicación React
│   └── types.ts              # Declaraciones y modelos TypeScript
├── index.html                # Configuración de SEO Profesional, Meta Tags, OpenGraph & Favicon SVG
├── package.json              # Configuración de scripts y dependencias
└── tsconfig.json             # Reglas del compilador de TypeScript
```

---

## 🎖️ Créditos & Autoría

*   **Dirección de Diseño & Concepto Clínico**: **Inspyrio** (Inspyrio Digital Solutions).
*   **Desarrollo**: Creado con precisión técnica utilizando patrones de interfaz modernos para optimizar la conversión de pacientes digitales de alta gama.

---

*Desarrollado bajo principios de diseño de alto impacto. AuraDent representa la excelencia clínica del mañana, hoy.*
