import { useEffect } from 'react';

export default function VoiceflowChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://voiceflow.com";
    
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6a3c37233ad95c98616a50c7' },
        url: 'https://voiceflow.com',
        voice: {
          url: "https://voiceflow.com"
        },
        // 👇 CONFIGURACIÓN DE AJUSTE RESPONSIVO PREMIUM 👇
        appearance: {
          mobile: {
            config: {
              // Obliga al chat a abrirse en pantalla completa en celulares para que sea ultra cómodo
              fullscreen: true 
            }
          }
        }
      });
    };

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.body.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}


