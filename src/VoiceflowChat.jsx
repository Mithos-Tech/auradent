import { useEffect } from 'react';

export default function VoiceflowChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6a3c37233ad95c98616a50c7' },
        url: 'https://general-runtime.voiceflow.com',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };

    // Buscamos el primer script de la página para inyectarlo al lado
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }

    // Limpieza al desmontar el componente por seguridad de React
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // No dibuja nada en HTML, solo inyecta el widget de fondo
}

