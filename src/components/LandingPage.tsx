import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Calendar, Shield, PhoneCall, Check, ArrowRight,
  Users, Heart, Star, Clock, Smile, ChevronRight, Award,
  ThumbsUp, Stethoscope, MapPin, Mail, Phone, Instagram, Facebook,
  Plus, Minus, HelpCircle
} from 'lucide-react';

export default function LandingPage() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCase, setActiveCase] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Ortodoncia Invisible',
    date: '',
    time: '10:00 AM'
  });

  const services = [
    {
      title: 'Ortodoncia Invisible',
      price: 'Desde $1,999/mes',
      description: 'Alineadores transparentes invisibles y removibles diseñados a tu medida con tecnología de escaneo 3D.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80',
      icon: Sparkles
    },
    {
      title: 'Carillas Estéticas',
      price: 'Alta estética dental',
      description: 'Diseño de sonrisa personalizado con carillas de porcelana o resina de máxima calidad y aspecto natural.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop&q=80',
      icon: Smile
    },
    {
      title: 'Implantes Premium',
      price: 'Soluciones permanentes',
      description: 'Recupera la funcionalidad y estética de tus dientes con implantes de titanio de última generación.',
      image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?w=600&auto=format&fit=crop&q=80',
      icon: Shield
    },
    {
      title: 'Blanqueamiento LED',
      price: 'Hasta 4 tonos más blanco',
      description: 'Tratamiento rápido y seguro en una sola sesión de 45 minutos para devolverle el brillo a tu sonrisa.',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=80',
      icon: Award
    }
  ];

  const advantages = [
    {
      title: 'Tecnología de Vanguardia',
      description: 'Utilizamos escáneres intraorales 3D y radiografía digital para diagnósticos ultra precisos sin dolor.',
      icon: Stethoscope
    },
    {
      title: 'Especialistas Certificados',
      description: 'Nuestro equipo de odontólogos cuenta con posgrados internacionales y formación continua de élite.',
      icon: Users
    },
    {
      title: 'Instalaciones Premium',
      description: 'Disfruta de una experiencia relajante en suites dentales diseñadas para tu máximo confort y seguridad.',
      icon: Heart
    },
    {
      title: 'Financiamiento Flexible',
      description: 'Planes de pago personalizados y meses sin intereses con las principales tarjetas de crédito.',
      icon: ThumbsUp
    }
  ];

  const cases = [
    {
      title: 'Ortodoncia Invisible',
      subtitle: 'Caso de Éxito #124 — Alineadores Invisibles',
      description: 'Corrección de apiñamiento severo en arcada superior e inferior. El paciente logró una alineación perfecta en solo 12 meses sin brackets.',
      before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80',
      after: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80',
      specs: [
        { label: 'Tratamiento', value: 'Ortodoncia Digital' },
        { label: 'Duración', value: '12 meses' },
        { label: 'Alineadores', value: '24 pares' }
      ]
    },
    {
      title: 'Carillas de Porcelana',
      subtitle: 'Caso de Éxito #098 — Diseño de Sonrisa',
      description: 'Cierre de diastemas (espacios) y corrección de microdoncia (dientes pequeños) con 8 carillas de porcelana ultra-delgadas de alta resistencia.',
      before: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&auto=format&fit=crop&q=80',
      after: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&auto=format&fit=crop&q=80',
      specs: [
        { label: 'Tratamiento', value: 'Carillas de Porcelana' },
        { label: 'Sesiones', value: '2 visitas' },
        { label: 'Material', value: 'Silicato de Litio' }
      ]
    },
    {
      title: 'Blanqueamiento Premium',
      subtitle: 'Caso de Éxito #241 — Blanqueamiento Láser LED',
      description: 'Eliminación de manchas extrínsecas por tabaco y café. El tratamiento de una sesión de 45 minutos logró aclarar 5 tonos según la guía VITA.',
      before: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&auto=format&fit=crop&q=80',
      after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
      specs: [
        { label: 'Tratamiento', value: 'Blanqueamiento Láser' },
        { label: 'Sesiones', value: '1 sesión' },
        { label: 'Mejora de Tono', value: '5 Tonos VITA' }
      ]
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto dura el tratamiento de Ortodoncia Invisible?',
      answer: 'En promedio, la duración oscila entre los 6 y 18 meses, dependiendo de la complejidad dental del paciente. Gracias a nuestro avanzado software de simulación 3D, podrás visualizar el resultado final antes de usar el primer alineador.'
    },
    {
      question: '¿Qué métodos de pago y financiamiento ofrecen?',
      answer: 'Ofrecemos planes de financiamiento personalizados para cada tratamiento, pagos mensuales fijos y la facilidad de pagar a 3, 6, 9 o 12 meses sin intereses (MSI) con las principales tarjetas de crédito participantes.'
    },
    {
      question: '¿Es doloroso el tratamiento con carillas de porcelana?',
      answer: 'Absolutamente no. El procedimiento es mínimamente invasivo y se realiza bajo anestesia local localizada para garantizar cero molestias. Además, disponemos de opciones de sedación consciente para pacientes con alta sensibilidad.'
    },
    {
      question: '¿Cada cuánto tiempo debo realizarme una limpieza dental?',
      answer: 'Recomendamos agendar una limpieza dental con ultrasonido cada 6 meses. Esto previene eficazmente la formación de sarro, caries profundas y enfermedades periodontales que afecten tus dientes o encías.'
    },
    {
      question: '¿Tienen alguna garantía sobre los implantes dentales?',
      answer: 'Sí. Todos nuestros tratamientos de implantología utilizan piezas de titanio premium de marcas internacionales con garantía de por vida. Además, nuestro protocolo incluye tomografías previas y seguimiento de osteointegración.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setBookingSubmitted(true);
    }
  };

  return (
    <div id="inicio" className="bg-[#EBECF2] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* Decorative 3D Glass Orbs (Aesthetics inspired by Framer templates) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-medium -z-10" />
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow -z-10" />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Titulo: texto 12px azul. no tendra diseño de boton */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[12px] font-bold uppercase tracking-widest text-blue-600 block mb-2"
              >
                Odontología de Élite & Estética Dental
              </motion.div>

              {/* subtitulo: texto 44px negro */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-3xl sm:text-[44px] text-black tracking-tight leading-[1.15] mb-4"
              >
                La sonrisa que siempre soñaste, con cuidado premium.
              </motion.h1>

              {/* frase: texto 16px negro */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] text-black max-w-xl leading-relaxed mt-4"
              >
                En AuraDent combinamos la experiencia de los mejores especialistas dentales con tecnología digital de vanguardia. Un concepto clínico diseñado para ofrecerte comodidad absoluta y resultados excepcionales.
              </motion.p>

              {/* Action Buttons (Strictly Pill-shaped rounded-full) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <a
                  href="#contacto"
                  className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <Calendar className="w-5 h-5 text-indigo-100" />
                  <span>Agenda tu Valoración</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-3 justify-center sm:justify-start px-2">
                  <div className="flex -space-x-2">
                    <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Paciente 1" referrerPolicy="no-referrer" />
                    <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Paciente 2" referrerPolicy="no-referrer" />
                    <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="Paciente 3" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-slate-800">4.9/5</span>
                    </div>
                    <p className="text-xs text-slate-500 font-sans">+2,000 Pacientes Satisfechos</p>
                  </div>
                </div>
              </motion.div>

              {/* Minimal benefits markers */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 pt-6 border-t border-slate-200"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Escaneo Digital 3D</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Financiamiento a tu medida</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Diagnóstico Integral</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Premium Graphic Visual (Inspired by high-fidelity framer dental blocks) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-2"
              >
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80" 
                  alt="Clínica Dental Premium AuraDent" 
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg text-left flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-display">Horario flexible para ti</h4>
                    <p className="text-[11px] text-slate-500">Lunes a Sábado • Horario extendido</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary decorative floating stats */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-slate-900 text-white p-4 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3 text-left max-w-[190px]"
                whileHover={{ y: -5 }}
              >
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Star className="w-5 h-5 fill-emerald-400" />
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Satisfacción</h4>
                  <p className="text-base font-extrabold font-display">99.4%</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section with Bento Grid aesthetics */}
      <section id="servicios" className="py-28 md:py-36 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600 block mb-2">
              NUESTROS SERVICIOS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-[44px] text-black tracking-tight leading-[1.15] mb-4">
              Especialidades diseñadas para transformar tu sonrisa
            </h2>
            <p className="text-[16px] text-black leading-relaxed max-w-2xl mx-auto mt-4">
              Tratamientos dentales personalizados ejecutados con la máxima precisión, materiales de nivel premium y tecnología alemana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2 rounded-xl border border-white/40 shadow-sm text-indigo-600">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="p-6 text-left space-y-3">
                      <h3 className="font-display font-semibold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-indigo-600 font-medium font-mono uppercase bg-indigo-50/60 inline-block px-2.5 py-1 rounded-md">
                        {service.price}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 text-left">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setFormData(prev => ({ ...prev, treatment: service.title }));
                        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-slate-950 text-white hover:bg-indigo-600 transition-all duration-300 text-xs font-semibold group/btn cursor-pointer"
                    >
                      <span>Cotizar ahora</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Advantages Section */}
      <section id="ventajas" className="py-28 md:py-36 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Big Container Card for Advantages Section */}
          <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden text-left">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-50 rounded-full filter blur-3xl opacity-60 -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-50 rounded-full filter blur-3xl opacity-60 -z-10 animate-pulse" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-4">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600 block mb-2">
                  VENTAJAS CLÍNICAS
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-[44px] text-black tracking-tight leading-[1.15] mb-4">
                  ¿Por qué elegir la experiencia AuraDent?
                </h2>
                <p className="text-[16px] text-black leading-relaxed mt-4">
                  Buscamos la excelencia en cada consulta. Desde tu primera cita de diagnóstico hasta el final de tu tratamiento, cuidamos cada detalle con un servicio impecable.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((adv, index) => {
                  const Icon = adv.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-[#EBECF2]/40 border border-slate-200/40 hover:bg-[#EBECF2]/80 hover:shadow-sm transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-inner group-hover/item:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-900 mt-4">{adv.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">{adv.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stat Callouts Banner - Replaced with an ultra premium design inside the section block */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto bg-slate-950 text-white rounded-[2rem] p-8 text-center shadow-lg border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full filter blur-2xl -z-10" />
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-indigo-400">10+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Años de trayectoria</p>
            </div>
            <div className="space-y-1 border-t sm:border-t-0 sm:border-l sm:border-r border-slate-800/80 py-4 sm:py-0">
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-indigo-400">15k+</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Tratamientos exitosos</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-indigo-400">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Especialistas certificados</p>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Before & After Cases Section (Point 2 of Framer Audit) */}
      <section id="casos" className="py-28 md:py-36 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600 block mb-2">
              CASOS DE ÉXITO
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-[44px] text-black tracking-tight leading-[1.15] mb-4">
              Transformaciones reales en AuraDent
            </h2>
            <p className="text-[16px] text-black leading-relaxed max-w-2xl mx-auto mt-4">
              Desliza el control blanco hacia la izquierda o derecha sobre las imágenes para revelar el cambio definitivo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Tabs and Details */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="flex flex-col gap-3">
                {cases.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCase(idx);
                      setSliderPosition(50);
                    }}
                    className={`w-full p-6 text-left rounded-3xl transition-all duration-300 border ${
                      activeCase === idx 
                        ? 'bg-white border-indigo-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]' 
                        : 'bg-transparent border-transparent hover:bg-white/40'
                    }`}
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 block mb-1">
                      {c.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-lg text-slate-950">
                      {c.title}
                    </h3>
                    <p className={`text-xs text-slate-500 mt-2 line-clamp-2 transition-all ${
                      activeCase === idx ? 'opacity-100' : 'opacity-70'
                    }`}>
                      {c.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Specs Grid */}
              <div className="p-6 bg-white border border-slate-100 rounded-3xl space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Especificaciones Clínicas
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {cases[activeCase].specs.map((spec, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{spec.label}</p>
                      <p className="text-xs font-bold text-slate-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Custom Interactive Before/After Slider */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full max-w-2xl aspect-[4/3] rounded-[2rem] overflow-hidden select-none shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-200/60 bg-slate-100">
                
                {/* Before Image (Lower Layer) */}
                <img 
                  src={cases[activeCase].before} 
                  alt="Antes de la intervención dental" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest z-10">
                  Antes
                </div>

                {/* After Image (Upper Layer - clipped by slider position) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img 
                    src={cases[activeCase].after} 
                    alt="Después de la intervención dental" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-4 right-4 bg-indigo-600/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest z-10">
                  Después
                </div>

                {/* Slider Control Line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-[0_0_15px_rgba(0,0,0,0.4)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center border-4 border-white text-base font-bold shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                    ⇄
                  </div>
                </div>

                {/* Invisible native range input for perfectly accessible responsive dragging */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPosition} 
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Deslizador de antes y después"
                />
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span>← Arrastra el control para comparar →</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive FAQ Section (Point 3 of Framer Audit) */}
      <section id="faq" className="py-28 md:py-36 bg-transparent relative border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading and description */}
            <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-32">
              <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600 block mb-2">
                PREGUNTAS FRECUENTES
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-[44px] text-black tracking-tight leading-[1.15]">
                Todo lo que necesitas saber
              </h2>
              <p className="text-[16px] text-black leading-relaxed">
                Resolvemos tus dudas sobre nuestros tratamientos de alta gama, financiamiento y de bioseguridad clínica.
              </p>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-200/70 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                    >
                      <span className="font-display font-bold text-sm sm:text-base text-slate-900 pr-4">
                        {faq.question}
                      </span>
                      <span className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-50 border-indigo-100 text-indigo-600' : ''}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-6 sm:px-8 pb-6 text-xs sm:text-sm text-slate-600 border-t border-slate-50 pt-4 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Booking & Contact Form (Elegant replacement for widget) */}
      <section id="contacto" className="py-28 md:py-36 bg-transparent relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
            <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600 block mb-2">
              AGENDA DE FORMA INMEDIATA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-[44px] text-black tracking-tight leading-[1.15] mb-4">
              Inicia el viaje hacia tu sonrisa ideal
            </h2>
            <p className="text-[16px] text-black leading-relaxed mt-4">
              Llena el siguiente formulario preliminar para pre-registrarte. Uno de nuestros coordinadores clínicos se comunicará contigo de inmediato para confirmar el horario de tu cita de valoración.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-6 sm:p-12 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!bookingSubmitted ? (
                <motion.form 
                  key="booking-form"
                  onSubmit={handleSubmit} 
                  className="space-y-6 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700">Nombre completo</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ej. María González"
                        className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                      />
                    </div>

                    {/* Phone Contact */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700">Número telefónico / WhatsApp</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ej. 55 1234 5678"
                        className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700">Correo electrónico (Opcional)</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ej. maria@example.com"
                        className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900"
                      />
                    </div>

                    {/* Treatment Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700">Tratamiento de interés</label>
                      <select 
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 cursor-pointer"
                      >
                        <option value="Ortodoncia Invisible">Ortodoncia Invisible</option>
                        <option value="Carillas Estéticas">Carillas Estéticas</option>
                        <option value="Implantes Premium">Implantes Premium</option>
                        <option value="Blanqueamiento LED">Blanqueamiento LED</option>
                        <option value="Limpieza Dental de Sarro">Limpieza Dental de Sarro</option>
                        <option value="Otro / Valoración general">Otro / Valoración general</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Date picker */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700">Fecha tentativa preferida</label>
                      <input 
                        type="date" 
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 cursor-pointer"
                      />
                    </div>

                    {/* Time selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-700">Horario preferido</label>
                      <select 
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 cursor-pointer"
                      >
                        <option value="09:00 AM">Mañana (09:00 AM - 12:00 PM)</option>
                        <option value="01:00 PM">Mediodía (12:00 PM - 03:00 PM)</option>
                        <option value="04:00 PM">Tarde (03:00 PM - 07:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission Button (Rounded-full pill button) */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-4 rounded-full bg-slate-950 hover:bg-indigo-600 text-white font-semibold text-sm transition-all duration-300 shadow hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mx-auto"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Enviar Solicitud de Cita</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="booking-success"
                  className="py-12 px-4 text-center space-y-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-slate-950">¡Solicitud recibida con éxito!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Muchas gracias, <strong>{formData.name}</strong>. Hemos registrado tus datos de pre-registro para <strong>{formData.treatment}</strong> en el sistema de AuraDent.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-2xl max-w-md mx-auto text-left space-y-2 text-xs text-slate-600">
                    <p><strong>Paciente:</strong> {formData.name}</p>
                    <p><strong>Contacto:</strong> {formData.phone}</p>
                    <p><strong>Servicio solicitado:</strong> {formData.treatment}</p>
                    <p><strong>Fecha preferida:</strong> {formData.date} • {formData.time}</p>
                  </div>

                  <p className="text-xs text-slate-400 font-sans italic">
                    Un asesor clínico humano se comunicará contigo por teléfono o WhatsApp para confirmar tu horario final. ¡Que tengas un excelente día! 🦷✨
                  </p>

                  <button
                    onClick={() => setBookingSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    Agendar otra cita
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Premium Framer-Inspired Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-24 pb-16 border-t border-slate-900 font-sans relative overflow-hidden">
        {/* Modern decorative visual elements for Footer */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full filter blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-900/10 rounded-full filter blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Banner inside Footer: Newsletter & Instant Callouts (Framer Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 mb-16 border-b border-slate-900 items-center">
            <div className="lg:col-span-7 text-left space-y-2">
              <h3 className="font-display font-bold text-2xl text-white">¿Listo para rediseñar tu sonrisa?</h3>
              <p className="text-sm text-slate-400 max-w-lg">
                Suscríbete para recibir tips exclusivos de salud oral, promociones de temporada y noticias sobre estética dental premium de AuraDent.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1.5 rounded-full w-full max-w-md ml-auto">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none px-4 py-2 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shrink-0 cursor-pointer"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
            
            {/* Column 1 - Brand Info */}
            <div className="md:col-span-4 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-white tracking-tight">AuraDent</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Odontología de Élite</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Odontología estética premium de alta gama. Comprometidos con darte la sonrisa más saludable y brillante bajo un concepto de servicio de primer nivel en la Ciudad de México.
              </p>
              
              {/* Telemetry/Live Clinic status indicator (Framer style) */}
              <div className="inline-flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 text-[10px] text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Clínica Activa • Sábado Abierto</span>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="md:col-span-2 text-left space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-200">Clínica</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#inicio" className="hover:text-white hover:translate-x-1 transition-all inline-block">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-white hover:translate-x-1 transition-all inline-block">Servicios</a></li>
                <li><a href="#ventajas" className="hover:text-white hover:translate-x-1 transition-all inline-block">Ventajas</a></li>
                <li><a href="#contacto" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contacto</a></li>
              </ul>
            </div>

            {/* Column 3 - Specialties */}
            <div className="md:col-span-3 text-left space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-200">Especialidades</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#servicios" className="hover:text-white hover:translate-x-1 transition-all inline-block">Ortodoncia Invisible</a></li>
                <li><a href="#servicios" className="hover:text-white hover:translate-x-1 transition-all inline-block">Carillas Estéticas</a></li>
                <li><a href="#servicios" className="hover:text-white hover:translate-x-1 transition-all inline-block">Implantes Premium</a></li>
                <li><a href="#servicios" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blanqueamiento LED</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="md:col-span-3 text-left space-y-4 text-xs">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-200">Contacto Directo</h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Av. Paseo de la Reforma 1240, Miguel Hidalgo, CDMX</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>+52 55 5432 1098</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>recepcion@auradent.com.mx</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Footer Copyright and Social Media Icons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
            <p>© 2026 AuraDent Clinic. Todos los derechos reservados. Diseñado bajo estándares internacionales con tecnologías de estética dental.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all duration-300"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
