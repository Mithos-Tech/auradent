import { Lead, Metrics } from '../types';

export const INITIAL_METRICS: Metrics = {
  totalConversations: 148,
  qualifiedLeads: 92,
  scheduledAppointments: 64,
  conversionRate: 62.1, // 92/148 = 62.1%
};

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Carlos Mendoza',
    phone: '+52 55 4321 8765',
    status: 'Calificado',
    treatment: 'Implante Dental y Limpieza',
    date: 'Ayer, 16:30',
    time: '11:00 AM - 22/Jun',
    lastMessage: 'Confirmado por el asistente virtual AuraDent.',
    transcript: [
      { sender: 'user', text: 'Hola, buenas tardes. Me gustaría pedir informes sobre un implante dental.', timestamp: '16:20' },
      { sender: 'assistant', text: '¡Hola Carlos! Qué gusto saludarte. Soy Aura, la asistente virtual de la Clínica Dental AuraDent 🦷. Claro que sí, con mucho gusto puedo brindarte información y ayudarte a agendar una cita de evaluación.', timestamp: '16:21' },
      { sender: 'assistant', text: 'Para darte una asesoría personalizada, ¿has tenido algún implante previo o es tu primera vez buscando este tratamiento? También cuéntame si presentas alguna molestia.', timestamp: '16:21' },
      { sender: 'user', text: 'Es mi primera vez. No tengo dolor, pero me falta un diente atrás y me cuesta comer bien.', timestamp: '16:23' },
      { sender: 'assistant', text: 'Entiendo perfectamente, Carlos. Recuperar la pieza dental no solo te ayudará a comer con comodidad, sino que evita que los otros dientes se muevan. Es un procedimiento seguro y estéticamente idéntico.', timestamp: '16:24' },
      { sender: 'assistant', text: 'Nuestra especialista en Implantología tiene espacios disponibles la próxima semana. ¿Te interesaría agendar una videoconsulta informativa gratuita o prefieres cita presencial directamente?', timestamp: '16:24' },
      { sender: 'user', text: 'Prefiero cita presencial directa para que me revisen de una vez.', timestamp: '16:26' },
      { sender: 'assistant', text: '¡Excelente decisión! Tengo disponible el lunes 22 de junio a las 11:00 AM o el martes 23 de junio a las 4:00 PM. ¿Alguno de estos horarios te acomoda?', timestamp: '16:27' },
      { sender: 'user', text: 'El lunes a las 11:00 AM está perfecto.', timestamp: '16:28' },
      { sender: 'assistant', text: '¡Excelente! He agendado tu cita de valoración de Implante Dental para el lunes 22 de junio a las 11:00 AM con la Dra. Sofía Ramos. Te enviaremos un recordatorio de ubicación 24 horas antes. ¿Hay algo más en lo que pueda apoyarte?', timestamp: '16:29' },
      { sender: 'user', text: 'No, sería todo. Muchas gracias.', timestamp: '16:30' },
      { sender: 'assistant', text: '¡De nada, Carlos! Nos vemos pronto en AuraDent para devolverte tu mejor sonrisa. ¡Que tengas un excelente día! ✨🏥', timestamp: '16:30' },
    ]
  },
  {
    id: 'lead-2',
    name: 'Dra. Elena Santillán',
    phone: '+52 55 1234 5678',
    status: 'Calificado',
    treatment: 'Consulta de Endodoncia urgente',
    date: 'Hoy, 09:12',
    time: '15:30 - Hoy',
    lastMessage: 'Prioridad alta registrada por dolor severo.',
    transcript: [
      { sender: 'user', text: 'Hola, tengo una emergencia dental muy fuerte. Me duele muchísimo una muela de abajo y no me deja dormir.', timestamp: '09:02' },
      { sender: 'assistant', text: '¡Hola! Lamento mucho que estés pasando por ese dolor tan fuerte. Qué bueno que nos contactas, soy Aura de Clínica AuraDent. Vamos a atenderte de inmediato. 🚨', timestamp: '09:03' },
      { sender: 'assistant', text: 'Por los síntomas de dolor Severo continuo, podría requerir una atención de urgencia para aliviar el nervio (posible endodoncia). ¿Has tomado algún analgésico en las últimas horas?', timestamp: '09:03' },
      { sender: 'user', text: 'Tomé ibuprofeno pero ya no me hace nada. El dolor es punzante.', timestamp: '09:05' },
      { sender: 'assistant', text: 'Comprendo. Es vital que te valore nuestro endodoncista hoy mismo para cortar el dolor y salvar tu pieza.', timestamp: '09:06' },
      { sender: 'assistant', text: 'Tengo un espacio de urgencia desbloqueado HOY mismo a las 15:30 PM. ¿Puedes asistir a nuestra sucursal de Paseo Reforma?', timestamp: '09:07' },
      { sender: 'user', text: 'Sí, por favor. Aparta ese horario. Llegaré puntual.', timestamp: '09:10' },
      { sender: 'assistant', text: '¡Listo! Quedas registrada con máxima prioridad para hoy a las 3:30 PM. Por favor evita alimentos muy calientes o fríos antes de la cita. Te esperamos. El dolor tiene solución.', timestamp: '09:12' },
    ]
  },
  {
    id: 'lead-3',
    name: 'Mateo Ortiz',
    phone: '+52 55 9988 7766',
    status: 'Cliente Potencial',
    treatment: 'Ortodoncia Invisible (Invisalign)',
    date: 'Hoy, 10:45',
    lastMessage: 'Solicitó cotización detallada de mensualidades.',
    transcript: [
      { sender: 'user', text: 'Hola, quisiera saber el precio de la ortodoncia invisible. Me choca usar brackets metálicos.', timestamp: '10:35' },
      { sender: 'assistant', text: '¡Hola Mateo! Gran pregunta. La ortodoncia invisible con alineadores transparentes es maravillosa porque nadie notará que los traes puestos, y puedes comer sin molestias.', timestamp: '10:37' },
      { sender: 'assistant', text: 'En AuraDent manejamos la tecnología de punta Invisalign. El costo exacto se define con un escaneo 3D digital para ver cuántos alineadores necesitas. ¿Te gustaría saber sobre nuestros planes de financiamiento a meses sin intereses? 💳', timestamp: '10:38' },
      { sender: 'user', text: 'Sí, me interesa el financiamiento ya que sé que no es muy barato.', timestamp: '10:41' },
      { sender: 'assistant', text: '¡Perfecto! Manejamos mensualidades fijas desde $2,500 MXN mensuales sin enganche excesivo. Además, este mes incluimos el escaneo 3D (valorado en $1,800) totalmente GRATIS si agendas tu cita de diagnóstico esta semana.', timestamp: '10:43' },
      { sender: 'user', text: 'De acuerdo, déjame revisarlo con mi presupuesto y les aviso más tarde.', timestamp: '10:45' },
      { sender: 'assistant', text: 'Claro que sí, Mateo. Quedo super atenta. Recuerda que la promo del escáner gratis vence en 3 días. ¡Que tengas un día excelente!', timestamp: '10:45' },
    ]
  },
  {
    id: 'lead-4',
    name: 'Sofía Valenzuela',
    phone: '+52 55 5555 4433',
    status: 'Calificado',
    treatment: 'Diseño de Sonrisa / Carillas',
    date: 'Ayer, 14:15',
    time: '17:00 - 24/Jun',
    lastMessage: 'Agendó cita de consulta estética.',
    transcript: [
      { sender: 'user', text: 'Hola, vi sus fotos de antes y después en Instagram. Qué bonito les queda el diseño de sonrisa. ¿Cuánto cuesta hacerse las carillas de resina?', timestamp: '13:58' },
      { sender: 'assistant', text: '¡Hola Sofía! Qué alegría que te gusten nuestros resultados de diseño de sonrisa ✨. Trabajamos con carillas de alta estética de porcelana y resinas de nanotecnología.', timestamp: '14:01' },
      { sender: 'assistant', text: 'Para darte un costo ideal, ¿te interesa un cambio sutil en un par de dientes o buscas blanquear y simetrizar toda tu sonrisa (8 a 10 piezas)?', timestamp: '14:02' },
      { sender: 'user', text: 'Quisiera corregir la forma de los 4 dientes frontales de arriba que están un poco desgastados.', timestamp: '14:05' },
      { sender: 'assistant', text: 'Perfecto, 4 piezas frontales con resina inyectada es un procedimiento mínimamente invasivo y se realiza ¡en una sola sesión! El cambio es espectacular.', timestamp: '14:08' },
      { sender: 'assistant', text: '¿Te gustaría venir a una cita de simulación digital de sonrisa para que veas en computadora cómo quedarías antes de iniciar?', timestamp: '14:10' },
      { sender: 'user', text: '¡Sí! Me da miedo que queden muy grandes. Me encantaría ver la simulación.', timestamp: '14:12' },
      { sender: 'assistant', text: 'Es completamente normal, por eso garantizamos el diseño previo. Puedo agendarte para el miércoles 24 de junio a las 5:00 PM. ¿Te queda bien?', timestamp: '14:13' },
      { sender: 'user', text: 'Excelente, anótame por favor.', timestamp: '14:15' },
      { sender: 'assistant', text: '¡Hecho! Agendada el miércoles 24 a las 17:00 h. Traerás contigo la mejor actitud para diseñar tu sonrisa soñada. ¡Saludos! 😊🦷', timestamp: '14:15' },
    ]
  },
  {
    id: 'lead-5',
    name: 'Alejandro Ruiz',
    phone: '+52 55 2211 3344',
    status: 'Cliente Potencial',
    treatment: 'Limpieza dental con Ultrasonido',
    date: 'Ayer, 11:20',
    lastMessage: 'Preguntó si el seguro dental Sura cubre la limpieza.',
    transcript: [
      { sender: 'user', text: 'Hola, limpian con ultrasonido verdad? ¿Aceptan el convenio con Seguros Sura?', timestamp: '11:10' },
      { sender: 'assistant', text: '¡Hola Alejandro! Así es, realizamos profilaxis avanzada con ultrasonido cavitador para eliminar sarro sin dolor de forma rápida.', timestamp: '11:12' },
      { sender: 'assistant', text: 'Con respecto a Seguros Sura, ¡sí! Somos clínica en red de Sura Dental. Te apoyamos con todo el trámite de reembolso directo o copago según tu póliza.', timestamp: '11:15' },
      { sender: 'user', text: 'Ah excelente, ¿tienen cita en fin de semana? Trabajo de lunes a viernes.', timestamp: '11:18' },
      { sender: 'assistant', text: '¡Sí, abrimos los sábados de 9:00 AM a 2:00 PM! Tengo el sábado 20 de junio a las 10:00 AM o a la 1:00 PM disponible. ¿Cuál prefieres?', timestamp: '11:19' },
      { sender: 'user', text: 'Déjame confirmarlo hoy en la tarde y te escribo para concretar.', timestamp: '11:20' },
      { sender: 'assistant', text: 'Comprendido Alejandro. Deja guardada esta conversación y solo mándame un mensaje diciendo "Limpieza Sábado" para confirmar en cuanto puedas. ¡Te reservamos un gran servicio!', timestamp: '11:20' },
    ]
  }
];
