import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Sparkles, Calendar, Shield, PhoneCall, Check, ArrowRight,
  Users, Heart, Star, Clock, Smile, ChevronRight, Award,
  ThumbsUp, Stethoscope, MapPin, Mail, Phone, Instagram, Facebook,
  Plus, Minus, HelpCircle, Bell, Play, MessageSquare, Menu, X
} from 'lucide-react';

export default function LandingPage() {
  const revealContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: revealContainerRef,
    offset: ["start end", "center center"]
  });

  const containerWidth = useTransform(scrollYProgress, [0.0, 1.0], ["82%", "100%"]);
  const containerScale = useTransform(scrollYProgress, [0.0, 1.0], [0.93, 1.0]);
  const containerOpacity = useTransform(scrollYProgress, [0.0, 0.8], [0.5, 1.0]);

  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      after: 'https://res.cloudinary.com/chlgeobm/image/upload/v1782844706/exit_01_burkjt.webp',
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
      after: 'https://res.cloudinary.com/chlgeobm/image/upload/v1782844706/exit_02_xv0wyb.webp',
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
      after: 'https://res.cloudinary.com/chlgeobm/image/upload/v1782844705/exit_03_npvkxe.webp',
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

  const sanitizeInput = (text: string): string => {
    return text
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;")
      .trim();
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = id.startsWith('#') ? id.substring(1) : id;
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Sanitize user inputs to protect against potential HTML/Script injections
    const sanitizedName = sanitizeInput(formData.name);
    const sanitizedPhone = sanitizeInput(formData.phone);
    const sanitizedEmail = sanitizeInput(formData.email);

    setFormData(prev => ({
      ...prev,
      name: sanitizedName,
      phone: sanitizedPhone,
      email: sanitizedEmail
    }));

    setBookingLoading(true);

    // Simulated high-end secure API submission with loading feedback
    setTimeout(() => {
      setBookingLoading(false);
      setBookingSubmitted(true);
    }, 1200);
  };

  return (
    <div id="inicio" className="bg-[#EBF0FE] text-[#0B0A0A] font-sans selection:bg-[#246AFE]/20 selection:text-[#0B0A0A] overflow-x-hidden">
      
      {/* Decorative 3D Glass Orbs (Aesthetics inspired by Framer templates) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#246AFE]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#246AFE]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-medium -z-10" />
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-[#246AFE]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow -z-10" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-6 lg:py-10 overflow-hidden">
        <div className="w-full max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-center">
          
          {/* Main Dashboard Panel Container (Framer Aesthetic) */}
          <div className="relative w-full rounded-[2.5rem] border border-white/80 bg-white/60 shadow-[0_32px_90px_rgba(36,106,254,0.06)] overflow-hidden flex flex-col h-auto lg:h-[760px] xl:h-[800px]">
            
            {/* Embedded Floating Header - No Horizontal dividing line, floats on top of the container! */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 sm:p-6 md:p-8 lg:pt-10 lg:pb-10 lg:pl-32 lg:pr-12 xl:pl-44 xl:pr-16 z-30 pointer-events-none">
              {/* Brand Logo & Typography styled as floating pill */}
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md px-4 sm:px-5.5 py-2.5 sm:py-3.5 rounded-full border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] pointer-events-auto hover:scale-[1.02] transition-all duration-300">
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782838544/Logo_varenne_l4lsd7.svg" 
                  alt="" 
                  className="h-6 sm:h-8 w-auto object-contain shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span className="font-display font-bold text-sm sm:text-lg tracking-tight text-[#0B0A0A] select-none leading-none">
                  Varenne
                </span>
              </div>

              {/* Center Menu Pills floating */}
              <div className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] pointer-events-auto">
                <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="px-5 py-2.5 rounded-full text-xs font-bold text-[#0B0A0A] bg-[#EBF0FE] transition-all">Inicio</a>
                <a href="#servicios" onClick={(e) => scrollToSection(e, '#servicios')} className="px-5 py-2.5 rounded-full text-xs font-bold text-[#0B0A0A]/60 hover:text-[#246AFE] transition-all">Servicios</a>
                <a href="#ventajas" onClick={(e) => scrollToSection(e, '#ventajas')} className="px-5 py-2.5 rounded-full text-xs font-bold text-[#0B0A0A]/60 hover:text-[#246AFE] transition-all">Ventajas</a>
                <a href="#casos" onClick={(e) => scrollToSection(e, '#casos')} className="px-5 py-2.5 rounded-full text-xs font-bold text-[#0B0A0A]/60 hover:text-[#246AFE] transition-all">Casos</a>
              </div>

              {/* Right Side Header Items floating */}
              <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
                {/* Contacto Button (Featured on Desktop) */}
                <a 
                  href="#contacto" 
                  onClick={(e) => scrollToSection(e, '#contacto')}
                  className="hidden md:flex items-center gap-2 bg-[#0B0A0A] hover:bg-[#246AFE] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-105 shrink-0"
                >
                  <span>Contacto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* Mobile Menu Trigger */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="w-10 h-10 rounded-full bg-white border border-[#EBF0FE] flex items-center justify-center text-[#0B0A0A] hover:text-[#246AFE] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-105 transition-all cursor-pointer md:hidden"
                  aria-label="Menu principal"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>

              {/* Floating Menu Card for Responsive/Mobile View - Framer-Style & Sophisticated */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-20 right-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-[2rem] p-4 shadow-[0_24px_50px_rgba(0,0,0,0.06)] z-40 pointer-events-auto flex flex-col items-center justify-center space-y-0.5"
                  >
                    <a 
                      href="#inicio" 
                      onClick={(e) => scrollToSection(e, '#inicio')}
                      className="w-full text-center py-2 rounded-xl text-xs font-bold text-[#0B0A0A]/85 hover:bg-[#EBF0FE] hover:text-[#246AFE] transition-all duration-200"
                    >
                      Inicio
                    </a>
                    <a 
                      href="#servicios" 
                      onClick={(e) => scrollToSection(e, '#servicios')}
                      className="w-full text-center py-2 rounded-xl text-xs font-bold text-[#0B0A0A]/75 hover:bg-[#EBF0FE] hover:text-[#246AFE] transition-all duration-200"
                    >
                      Servicios
                    </a>
                    <a 
                      href="#ventajas" 
                      onClick={(e) => scrollToSection(e, '#ventajas')}
                      className="w-full text-center py-2 rounded-xl text-xs font-bold text-[#0B0A0A]/75 hover:bg-[#EBF0FE] hover:text-[#246AFE] transition-all duration-200"
                    >
                      Ventajas
                    </a>
                    <a 
                      href="#casos" 
                      onClick={(e) => scrollToSection(e, '#casos')}
                      className="w-full text-center py-2 rounded-xl text-xs font-bold text-[#0B0A0A]/75 hover:bg-[#EBF0FE] hover:text-[#246AFE] transition-all duration-200"
                    >
                      Casos de Éxito
                    </a>
                    
                    <div className="w-full pt-2 mt-1 border-t border-slate-100 flex flex-col items-center">
                      <a 
                        href="#contacto" 
                        onClick={(e) => scrollToSection(e, '#contacto')}
                        className="w-full text-center py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#246AFE] hover:bg-[#1e5ae0] hover:scale-[1.02] shadow-sm transition-all duration-200"
                      >
                        Contacto
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Content Split Panel Grid (Strictly 50/50 balance in desktop) */}
            
            {/* DESKTOP VIEW - PRESTIGE 50/50 SPLIT PANEL */}
            <div className="hidden lg:grid flex-1 grid-cols-12 relative overflow-hidden w-full h-full">
              
              {/* Left Column: Soft clinical white/blue background with entrance transitions */}
              <motion.div 
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-6 bg-white/70 p-6 sm:p-10 lg:pl-32 lg:pr-[14%] xl:pl-44 xl:pr-[16%] lg:pt-32 lg:pb-16 xl:pt-36 xl:pb-24 flex flex-col justify-between text-left space-y-8 lg:space-y-4 z-10 relative"
              >
                
                {/* Visual Label Tag */}
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#246AFE] bg-[#246AFE]/10 px-3.5 py-1.5 rounded-full w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Innovación Clínica Digital</span>
                </div>

                {/* Main Hero Header Title */}
                <div className="space-y-4 lg:space-y-3">
                  <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] text-[#0B0A0A] tracking-tight leading-[1.05] max-w-[420px] xl:max-w-[460px]">
                    Odont<span className="relative inline-block mx-0.5">
                      o
                      <span className="absolute inset-x-0 bottom-1.5 md:bottom-2 mx-auto w-4 h-4 rounded-full bg-gradient-to-tr from-[#246AFE] to-[#4c84ff] shadow-[0_4px_12px_rgba(36,106,254,0.4)] border border-white/20 animate-pulse"></span>
                    </span>logía <br />
                    de <span className="text-[#246AFE]">Élite</span>
                  </h1>
                  
                  <p className="text-sm lg:text-[14px] xl:text-[15px] text-slate-600 max-w-[320px] xl:max-w-[350px] leading-relaxed pt-1">
                    Estética dental de alta gama y tecnología digital para una experiencia indolora y personalizada.
                  </p>
                </div>

                {/* Call To Action Row */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="px-6 py-3 rounded-full bg-[#246AFE] hover:bg-[#246AFE]/90 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Agendar mi Consulta</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="flex items-center gap-2 px-1">
                    <div className="flex -space-x-1.5">
                      <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Paciente" />
                      <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Paciente" />
                    </div>
                    <div className="text-left leading-none">
                      <p className="text-xs font-bold text-[#0B0A0A]">4.9/5 Calificación</p>
                      <p className="text-[9px] text-slate-500">+2,000 casos de éxito</p>
                    </div>
                  </div>
                </div>

                {/* Clinical stats (compact horizontal flex container shifted to the left) */}
                <div className="pt-6 border-t border-[#EBF0FE] flex items-center gap-4 sm:gap-5 lg:gap-4 xl:gap-5 text-left max-w-[300px] xl:max-w-[320px] w-full">
                  <div>
                    <h4 className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-[#246AFE] leading-none font-display">10+</h4>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mt-1.5">Años Exp</p>
                  </div>
                  <div className="border-l border-slate-200/60 pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                    <h4 className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-[#246AFE] leading-none font-display">20+</h4>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mt-1.5">Dres. Élite</p>
                  </div>
                  <div className="border-l border-slate-200/60 pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                    <h4 className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-[#246AFE] leading-none font-display">100%</h4>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mt-1.5">Garantía 3D</p>
                  </div>
                </div>

              </motion.div>

              {/* Right Column: Royal blue solid graphic panel with right entrance transition */}
              <motion.div 
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-6 bg-[#246AFE] p-6 sm:p-10 lg:pl-[24%] lg:pr-10 xl:pl-[28%] xl:pr-14 lg:pt-32 lg:pb-16 xl:pt-36 xl:pb-24 text-white flex flex-col justify-between text-left relative overflow-hidden z-10"
              >
                {/* Subtle radial lights */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent)] pointer-events-none" />

                {/* Subheading technology block */}
                <div className="space-y-4 my-auto max-w-[240px] xl:max-w-[260px] z-10 pt-4 lg:pt-0">
                  <h2 className="font-display font-black text-xl sm:text-2xl lg:text-2xl xl:text-3xl tracking-tight leading-[1.15]">
                    Con Tecnologías Avanzadas
                  </h2>
                  <p className="text-[11px] sm:text-xs lg:text-[13px] xl:text-[14px] text-blue-100/85 leading-relaxed font-sans">
                    Equipamiento de última generación, diagnósticos tridimensionales computarizados y microcirugía guiada que garantizan tratamientos indoloros.
                  </p>
                </div>

                {/* Testimonial slider highlight */}
                <div className="pt-6 border-t border-white/20 flex items-center justify-between gap-4 mt-6 lg:mt-0 z-10">
                  <div className="space-y-2 max-w-[190px] xl:max-w-[210px]">
                    <p className="text-[11px] lg:text-[12px] text-blue-100 italic leading-relaxed">
                      "La tecnología digital de Varenne superó todas mis expectativas."
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex -space-x-1">
                        <img className="w-5.5 h-5.5 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop" alt="Avatar" />
                        <img className="w-5.5 h-5.5 rounded-full border border-blue-500 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop" alt="Avatar" />
                      </div>
                      <span className="text-[9px] text-blue-200 font-bold uppercase tracking-wider">Pacientes Varenne</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0 cursor-pointer">
                    <ChevronRight className="w-4.5 h-4.5" />
                  </div>
                </div>
              </motion.div>

              {/* Interactive Specialist Overlapping Portrait (Perfect center on the 50/50 seam line, fully responsive & optimized) */}
              <div className="absolute bottom-0 left-[50%] -translate-x-1/2 h-[70%] sm:h-[80%] md:h-[90%] lg:h-full w-auto max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] z-20 pointer-events-none">
                <motion.img 
                  initial={{ y: 220, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782755512/hero_v4ccw0.png" 
                  alt="Especialista Dental Elite Varenne" 
                  className="h-full w-auto object-contain object-bottom select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating pill 1: Confianza */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: -25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.85 }}
                  className="absolute top-[44%] left-2 lg:left-6 bg-white/95 backdrop-blur-md border border-[#EBF0FE] px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-2 pointer-events-auto hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-[#0B0A0A] uppercase tracking-wider">Confianza</span>
                </motion.div>

                {/* Floating pill 2: Experiencia */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: 25 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.95 }}
                  className="absolute top-[20%] right-2 lg:right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-2 pointer-events-auto hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Experiencia</span>
                </motion.div>

                {/* Floating pill 3: Profesionalismo */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.05 }}
                  className="absolute top-[68%] right-2 lg:right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-2 pointer-events-auto hover:scale-105 transition-transform"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Profesionalismo</span>
                </motion.div>
              </div>

            </div>

            {/* MOBILE & TABLET VIEW - HIGH-END FRAMER PHONE LAYOUT */}
            <div className="flex lg:hidden flex-1 flex-col pt-24 pb-6 px-4 relative overflow-hidden justify-between w-full h-full bg-gradient-to-b from-slate-50 to-slate-100">
              
              {/* Upper Content Column */}
              <div className="w-full text-center space-y-4">
                {/* Clinical Innovation Tag */}
                <div className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#246AFE] bg-[#246AFE]/10 px-3 py-1 rounded-full mx-auto">
                  <Sparkles className="w-3 h-3 text-[#246AFE]" />
                  <span>Innovación Clínica Digital</span>
                </div>

                {/* Large visual display title matching phone mockup */}
                <h1 className="font-display font-black text-3xl sm:text-4xl text-[#0B0A0A] tracking-tight leading-[1.1] max-w-sm mx-auto">
                  Odont<span className="relative inline-block mx-0.5">
                    o
                    <span className="absolute inset-x-0 bottom-1 sm:bottom-1.5 mx-auto w-3 h-3 rounded-full bg-gradient-to-tr from-[#246AFE] to-[#4c84ff] shadow-[0_4px_12px_rgba(36,106,254,0.4)] border border-white/20 animate-pulse"></span>
                  </span>logía <br />
                  de <span className="text-[#246AFE]">Élite</span>
                </h1>

                {/* Elegant statistics row directly beneath title */}
                <div className="py-2.5 my-1 border-y border-slate-200/60 flex items-center justify-around text-center w-full max-w-sm mx-auto">
                  <div>
                    <h4 className="text-lg font-black text-[#246AFE] leading-none font-display">10+</h4>
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold mt-1">Años Exp</p>
                  </div>
                  <div className="h-5 w-[1px] bg-slate-200" />
                  <div>
                    <h4 className="text-lg font-black text-[#246AFE] leading-none font-display">20+</h4>
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold mt-1">Dres. Élite</p>
                  </div>
                  <div className="h-5 w-[1px] bg-slate-200" />
                  <div>
                    <h4 className="text-lg font-black text-[#246AFE] leading-none font-display">100%</h4>
                    <p className="text-[8px] text-slate-500 uppercase tracking-widest font-bold mt-1">Garantía 3D</p>
                  </div>
                </div>

                {/* Fine clinical subtitle */}
                <p className="text-xs text-slate-500 max-w-xs sm:max-w-md mx-auto leading-relaxed">
                  Estética dental de alta gama y tecnología digital para una experiencia indolora y personalizada.
                </p>
              </div>

              {/* Lower Specialist Portrait Section inside high-contrast blue block */}
              <div className="relative w-full max-w-xs sm:max-w-sm mx-auto bg-[#246AFE] rounded-[2rem] pt-6 pb-0 px-6 flex flex-col items-center justify-end overflow-hidden shadow-[0_15px_35px_rgba(36,106,254,0.15)] min-h-[260px] sm:min-h-[300px] mt-6">
                {/* Background light reflections */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

                {/* Specialist Image */}
                <motion.img 
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782755512/hero_v4ccw0.png" 
                  alt="Especialista Varenne"
                  className="h-[210px] sm:h-[250px] w-auto object-contain object-bottom select-none z-10 pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                  referrerPolicy="no-referrer"
                />

                {/* Floating tags overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md z-20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[8px] font-bold text-[#0B0A0A] uppercase tracking-wider">Confianza</span>
                </div>
                <div className="absolute top-12 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-md z-20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse"></span>
                  <span className="text-[8px] font-bold text-white uppercase tracking-wider">Experiencia</span>
                </div>

                {/* Floating Bottom CTA Pill matching 'Find Doctor' bar */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <a 
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="w-full h-10 bg-white hover:bg-slate-50 text-[#0B0A0A] font-extrabold text-[10px] uppercase tracking-wider rounded-2xl flex items-center justify-between px-4 transition-all duration-300 shadow-md active:scale-95 cursor-pointer pointer-events-auto"
                  >
                    <span>Agendar Consulta</span>
                    <div className="w-6.5 h-6.5 rounded-full bg-[#246AFE] flex items-center justify-center text-white">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </section>

      {/* Scroll-Expanding Message Section (Framer Aesthetic) */}
      <section ref={revealContainerRef} className="py-12 sm:py-20 md:py-28 bg-[#EBF0FE] relative overflow-hidden flex flex-col items-center">
        <div className="w-full max-w-[1840px] px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-center">
          <motion.div 
            style={{ 
              width: containerWidth,
              scale: containerScale,
              opacity: containerOpacity
            }}
            className="bg-white border border-[#E1E8FD] shadow-[0_24px_80px_rgba(36,106,254,0.04)] rounded-[2.5rem] px-6 sm:px-12 md:px-20 lg:px-24 py-16 sm:py-20 lg:py-24 text-center flex flex-col items-center justify-center relative overflow-hidden w-full origin-center"
          >
            {/* Soft geometric light highlights on background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(36,106,254,0.03),transparent_45%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(36,106,254,0.02),transparent_40%)] pointer-events-none" />

            {/* Subtitle tag / Brand name */}
            <div className="flex items-center justify-center gap-2 text-slate-400 mb-6 z-10 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
              <span className="w-4 h-[1px] bg-slate-300"></span>
              <span>Varenne</span>
              <span className="w-4 h-[1px] bg-slate-300"></span>
            </div>

            {/* Big typographic highlight with embedded pills */}
            <h2 className="font-display font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-slate-900 tracking-tight leading-[1.35] max-w-4xl mx-auto z-10">
              Combinamos tecnologías{" "}
              <span className="inline-flex items-center mx-1 align-middle translate-y-[-2px]">
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782844704/cta_01_y3uvxt.webp" 
                  alt="Tecnología" 
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-blue-100 shadow-sm select-none shrink-0"
                  referrerPolicy="no-referrer"
                />
              </span>{" "}
              <span className="font-bold">innovadoras</span> con un enfoque humano para lograr que cada paciente{" "}
              <span className="inline-flex items-center -space-x-2.5 mx-1.5 align-middle translate-y-[-2px]">
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782844704/cta_02_wmjjom.webp" 
                  alt="Paciente Varenne" 
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-white shadow-sm select-none shrink-0"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782844705/cta_03_uotsps.webp" 
                  alt="Paciente Varenne" 
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-white shadow-sm select-none shrink-0"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782844705/cta_04_azda21.webp" 
                  alt="Doctora Varenne" 
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-white shadow-sm select-none shrink-0"
                  referrerPolicy="no-referrer"
                />
              </span>{" "}
              se sienta <span className="font-bold">seguro</span> y en <span className="font-bold">calma</span>.
            </h2>

            {/* Explanatory description paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed mt-6 z-10 font-normal">
              Nuestra clínica es <span className="font-bold text-slate-800">un espacio de confianza</span>, medicina moderna y cuidado, basado en años de experiencia y amor por las personas.
            </p>

            {/* Sophisticated dual-pill custom button */}
            <div className="mt-10 sm:mt-12 z-10 flex justify-center">
              <button 
                id="cta-reveal-button"
                onClick={() => {
                  const element = document.getElementById("contacto");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative flex items-center gap-4 bg-[#246AFE] hover:bg-[#1e5ae0] text-white pl-6 pr-2 py-2 rounded-full shadow-[0_12px_36px_rgba(36,106,254,0.12)] hover:shadow-[0_16px_44px_rgba(36,106,254,0.2)] transition-all duration-300 pointer-events-auto hover:scale-[1.02]"
              >
                <span className="text-xs sm:text-sm font-bold tracking-tight">Más sobre nosotros</span>
                <div className="w-8 h-8 rounded-full bg-white text-[#246AFE] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Services Section with Bento Grid aesthetics */}
      <section id="servicios" className="py-24 md:py-32 bg-[#EBF0FE] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Services Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-16 border-b border-slate-300/40 pb-8 lg:pb-10">
            <div className="space-y-2">
              <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-none text-slate-900">
                Especialidades
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                Nuestros tratamientos de vanguardia
              </p>
            </div>
            <div className="max-w-md text-left md:text-right md:self-end space-y-2">
              <p className="text-xs sm:text-sm font-normal text-slate-600 tracking-tight">
                Cuidado dental sofisticado y tecnología de precisión
              </p>
              <button 
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs font-bold text-[#246AFE] hover:text-[#1e5ae0] inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                Ver todas las especialidades
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 01 - Ortodoncia Invisible */}
              <div className="bg-white border border-[#EBEFFD] rounded-3xl p-6 relative flex flex-col justify-between group overflow-hidden h-[260px] hover:shadow-lg hover:border-[#D1DDFF] transition-all duration-300">
                <div className="absolute top-6 right-6 text-[#246AFE]/6 font-display font-black text-6xl select-none leading-none z-0">
                  01
                </div>
                <div className="z-10 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#246AFE]/5 text-[#246AFE] flex items-center justify-center mb-6 border border-[#246AFE]/10">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">Ortodoncia Invisible</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[90%] font-normal">
                    Alineadores transparentes removibles diseñados a tu medida con escaneo 3D de alta resolución.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 z-10 text-left">
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, treatment: "Ortodoncia Invisible" }));
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[11px] font-bold text-slate-800 hover:text-[#246AFE] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Agendar cita
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Desde $1,999/mes</span>
                </div>
              </div>

              {/* Card Blue Graphic Card - Varenne Promo Card */}
              <div className="bg-gradient-to-br from-[#246AFE] to-[#0B56FE] rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden h-[260px] shadow-[0_20px_50px_rgba(36,106,254,0.12)] group">
                {/* Subtle abstract fluid shapes / glows */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/15 rounded-full filter blur-xl group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-300/25 rounded-full filter blur-lg" />
                {/* Connecting glowing dots pattern */}
                <div className="absolute inset-0 flex items-center justify-center opacity-25">
                  <div className="relative w-full h-full">
                    <span className="absolute top-[25%] left-[40%] w-2 h-2 rounded-full bg-white animate-ping" />
                    <span className="absolute top-[25%] left-[40%] w-2 h-2 rounded-full bg-white" />
                    <span className="absolute top-[50%] left-[70%] w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="absolute top-[75%] left-[30%] w-1.5 h-1.5 rounded-full bg-white" />
                    <svg className="absolute inset-0 w-full h-full stroke-white/20 stroke-1" fill="none">
                      <path d="M 120 60 L 210 120 L 90 180" />
                    </svg>
                  </div>
                </div>
                <div className="z-10 text-left">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://res.cloudinary.com/chlgeobm/image/upload/v1782838544/Logo_varenne_l4lsd7.svg" 
                      alt="" 
                      className="h-5.5 w-auto object-contain shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-display font-bold text-base text-white tracking-tight leading-none">
                      Varenne
                    </span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed mt-2.5 max-w-[90%] font-light">
                    Desde la primera consulta y diagnóstico hasta el tratamiento final, con un absoluto cuidado del paciente.
                  </p>
                </div>
                <div className="z-10 text-left border-t border-white/10 pt-4">
                  <span className="text-[10px] text-white/60 font-semibold tracking-wider uppercase font-mono">Líderes en Estética Dental</span>
                </div>
              </div>

              {/* Card 02 - Carillas Estéticas */}
              <div className="bg-white border border-[#EBEFFD] rounded-3xl p-6 relative flex flex-col justify-between group overflow-hidden h-[260px] hover:shadow-lg hover:border-[#D1DDFF] transition-all duration-300">
                <div className="absolute top-6 right-6 text-[#246AFE]/6 font-display font-black text-6xl select-none leading-none z-0">
                  02
                </div>
                <div className="z-10 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#246AFE]/5 text-[#246AFE] flex items-center justify-center mb-6 border border-[#246AFE]/10">
                    <Smile className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">Carillas Estéticas</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[90%] font-normal">
                    Diseño de sonrisa de alta definición con porcelanas finas de aspecto natural y máxima durabilidad.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 z-10 text-left">
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, treatment: "Carillas Estéticas" }));
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[11px] font-bold text-slate-800 hover:text-[#246AFE] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Agendar cita
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Alta estética dental</span>
                </div>
              </div>

              {/* Card 03 - Implantes Premium */}
              <div className="bg-white border border-[#EBEFFD] rounded-3xl p-6 relative flex flex-col justify-between group overflow-hidden h-[260px] hover:shadow-lg hover:border-[#D1DDFF] transition-all duration-300">
                <div className="absolute top-6 right-6 text-[#246AFE]/6 font-display font-black text-6xl select-none leading-none z-0">
                  03
                </div>
                <div className="z-10 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#246AFE]/5 text-[#246AFE] flex items-center justify-center mb-6 border border-[#246AFE]/10">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">Implantes Premium</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[90%] font-normal">
                    Recupera la completa funcionalidad y la estética de tus piezas con implantes de titanio integrales.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 z-10 text-left">
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, treatment: "Implantes Premium" }));
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[11px] font-bold text-slate-800 hover:text-[#246AFE] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Agendar cita
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Solución permanente</span>
                </div>
              </div>

              {/* Card 04 - Blanqueamiento LED */}
              <div className="bg-white border border-[#EBEFFD] rounded-3xl p-6 relative flex flex-col justify-between group overflow-hidden h-[260px] hover:shadow-lg hover:border-[#D1DDFF] transition-all duration-300">
                <div className="absolute top-6 right-6 text-[#246AFE]/6 font-display font-black text-6xl select-none leading-none z-0">
                  04
                </div>
                <div className="z-10 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#246AFE]/5 text-[#246AFE] flex items-center justify-center mb-6 border border-[#246AFE]/10">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">Blanqueamiento LED</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[90%] font-normal">
                    Resultados seguros e impecables en una sesión guiada por expertos. Hasta 4 tonos más claros.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 z-10 text-left">
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, treatment: "Blanqueamiento LED" }));
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[11px] font-bold text-slate-800 hover:text-[#246AFE] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Agendar cita
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Hasta 4 tonos menos</span>
                </div>
              </div>

              {/* Card 05 - Diagnóstico Digital */}
              <div className="bg-white border border-[#EBEFFD] rounded-3xl p-6 relative flex flex-col justify-between group overflow-hidden h-[260px] hover:shadow-lg hover:border-[#D1DDFF] transition-all duration-300">
                <div className="absolute top-6 right-6 text-[#246AFE]/6 font-display font-black text-6xl select-none leading-none z-0">
                  05
                </div>
                <div className="z-10 text-left">
                  <div className="w-10 h-10 rounded-full bg-[#246AFE]/5 text-[#246AFE] flex items-center justify-center mb-6 border border-[#246AFE]/10">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">Diagnóstico Digital</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[90%] font-normal">
                    Escaneo intraoral completo y planificación computarizada para tratamientos óptimos y sin dolor.
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 z-10 text-left">
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, treatment: "Diagnóstico Digital" }));
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[11px] font-bold text-slate-800 hover:text-[#246AFE] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Agendar cita
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">Alta precisión</span>
                </div>
              </div>

              {/* Double-span Image Card representing modern high-tech diagnostics */}
              <div className="md:col-span-2 bg-white border border-[#EBEFFD] rounded-3xl relative overflow-hidden h-[260px] shadow-sm hover:shadow-lg transition-all duration-300 flex items-center group">
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782844707/services_qksnca.jpg"
                  alt="Varenne Clinic Diagnostics" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-300 mb-1.5 font-mono">Infraestructura premium</span>
                  <h4 className="text-white font-display font-bold text-base sm:text-lg leading-tight max-w-sm">
                    Laboratorio propio & Equipos dentales 3D de nivel internacional.
                  </h4>
                </div>
              </div>

            </div>

        </div>
      </section>

      {/* Advantages Section with Elegant Dual Container Block */}
      <section id="ventajas" className="py-24 md:py-32 bg-[#EBF0FE] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Dual-Part Container Box */}
          <div className="bg-white border border-[#E1E8FD] rounded-[2.5rem] shadow-[0_24px_80px_rgba(36,106,254,0.03)] relative overflow-hidden text-left p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Deep Blue gradient container with transparent doctor image */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#246AFE] to-[#1453DF] relative overflow-hidden lg:overflow-visible flex flex-col min-h-[380px] sm:min-h-[420px] lg:min-h-full p-8 sm:p-10 lg:p-12 group">
                
                {/* Background medical image - transparent PNG/WebP placed cleanly on top */}
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782844704/ventajas_yxgxvi.webp" 
                  alt="Especialistas de Varenne" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-[-45%] xl:right-[-55%] lg:translate-x-0 w-[98%] sm:w-[92%] lg:w-[125%] xl:w-[132%] max-w-none h-[84%] sm:h-[88%] lg:h-[90%] xl:h-[92%] object-contain object-bottom z-10 pointer-events-none group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient lights */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full filter blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/20 rounded-full filter blur-2xl pointer-events-none" />

                {/* Left card top labels */}
                <div className="absolute top-12 left-10 lg:top-16 lg:left-12 z-20 text-left max-w-xs select-none">
                  <h4 className="text-white font-display font-medium text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-[0.95] mb-2">
                    Por qué<br />elegirnos
                  </h4>
                  <p className="text-[9px] font-bold text-blue-200/80 tracking-widest uppercase font-sans">
                    Especialistas autorizados
                  </p>
                </div>

                {/* Floating Tag 1: Doctores Especialistas (Lowered and pushed to the edge) */}
                <div className="absolute top-[75%] right-[2%] sm:right-[6%] lg:top-[66%] lg:right-[-5%] xl:right-[-9%] z-20 flex items-center gap-1.5 select-none pointer-events-auto">
                  <div className="bg-white/75 backdrop-blur-md border border-white/40 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:scale-105 hover:bg-white/85 transition-all duration-300">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#246AFE] animate-pulse"></span>
                    <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-slate-900 uppercase tracking-wider font-sans">Doctores Especialistas</span>
                  </div>
                </div>

                {/* Floating Tag 2: Tecnología Avanzada (Pushed higher up on mobile to avoid the shoulder/face) */}
                <div className="absolute top-[38%] left-[2%] sm:left-[8%] lg:top-[44%] lg:left-[16%] xl:left-[20%] z-20 flex items-center gap-1.5 select-none pointer-events-auto">
                  <div className="bg-white/75 backdrop-blur-md border border-white/40 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:scale-105 hover:bg-white/85 transition-all duration-300">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#246AFE] animate-pulse"></span>
                    <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-slate-900 uppercase tracking-wider font-sans">Tecnología Avanzada</span>
                  </div>
                </div>

                {/* Floating Tag 3: Clínica Certificada (Pushed lower on mobile) */}
                <div className="absolute bottom-[14%] left-[2%] sm:left-[8%] lg:bottom-[20%] lg:left-[14%] z-20 flex items-center gap-1.5 select-none pointer-events-auto">
                  <div className="bg-white/75 backdrop-blur-md border border-white/40 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:scale-105 hover:bg-white/85 transition-all duration-300">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#246AFE] animate-pulse"></span>
                    <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-bold text-slate-900 uppercase tracking-wider font-sans">Clínica Certificada</span>
                  </div>
                </div>

                {/* Bottom Left human care indicator */}
                <div className="absolute bottom-6 left-8 z-20 select-none">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[9px] font-bold text-white tracking-wider uppercase">
                    Enfoque: Cuidado humano
                  </span>
                </div>

              </div>

              {/* Right Column: Sleek minimal typography and metrics grid */}
              <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-10 lg:p-12 lg:pl-32 xl:p-14 xl:pl-44">
                
                {/* Section tag and small intro */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-10">
                  <span className="text-xs font-bold text-[#246AFE] uppercase tracking-[0.2em] font-mono">
                    Ventajas
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 uppercase tracking-wider font-mono">
                    Odontología de Vanguardia
                  </span>
                </div>

                {/* 2x2 Metric Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8 lg:gap-x-12">
                  
                  {/* Metric 01 */}
                  <div className="space-y-2.5 pl-2">
                    <div className="flex items-baseline">
                      <span className="text-4xl lg:text-5xl font-display font-bold text-slate-950">10</span>
                      <span className="text-3xl lg:text-4xl font-display font-bold text-[#246AFE] ml-0.5">+</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 font-sans tracking-wide">Años de experiencia</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal mt-1 max-w-xs">
                        Trabajando desde 2012, elevando continuamente los estándares de seguridad, confort y excelencia clínica.
                      </p>
                    </div>
                  </div>

                  {/* Metric 02 */}
                  <div className="space-y-2.5 pl-2">
                    <div className="flex items-baseline">
                      <span className="text-4xl lg:text-5xl font-display font-bold text-slate-950">15</span>
                      <span className="text-3xl lg:text-4xl font-display font-bold text-[#246AFE] ml-0.5">+</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 font-sans tracking-wide">Especialidades clínicas</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal mt-1 max-w-xs">
                        Desde ortodoncia digital y odontología preventiva, hasta implantes y cirugías reconstructivas complejas.
                      </p>
                    </div>
                  </div>

                  {/* Metric 03 */}
                  <div className="space-y-2.5 pl-2">
                    <div className="relative inline-block pb-1">
                      <span className="text-4xl lg:text-5xl font-display font-bold text-slate-950">95%</span>
                      <div className="absolute bottom-0 left-0 w-11 h-[3px] bg-[#246AFE]"></div>
                    </div>
                    <div className="pt-1.5">
                      <h4 className="text-sm font-bold text-slate-950 font-sans tracking-wide">Pacientes satisfechos</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal mt-1 max-w-xs">
                        Certificado por auditorías de calidad externas y el índice más alto de recomendación familiar directa.
                      </p>
                    </div>
                  </div>

                  {/* Metric 04 */}
                  <div className="space-y-2.5 pl-2">
                    <div className="relative inline-block pb-1">
                      <span className="text-4xl lg:text-5xl font-display font-bold text-slate-950">98%</span>
                      <div className="absolute bottom-0 left-0 w-11 h-[3px] bg-[#246AFE]"></div>
                    </div>
                    <div className="pt-1.5">
                      <h4 className="text-sm font-bold text-slate-950 font-sans tracking-wide">Precisión diagnóstica</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal mt-1 max-w-xs">
                        Gracias a nuestra tecnología avanzada de escaneo 3D y diagnósticos guiados por computadora de alta precisión.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Fact Note */}
                <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>HECHO: <span className="text-slate-700 font-bold">Ayuda profesional en la que puedes confiar</span></span>
                </div>

              </div>

            </div>
          </div>

          {/* High-impact Framer-style Centered CTA Section - No Container, directly on page's celeste background */}
          <div className="mt-28 mb-12 text-center relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-8">
            {/* Micro badge indicator */}
            <div className="inline-flex items-center gap-2 bg-[#246AFE]/10 border border-[#246AFE]/20 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#246AFE] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#246AFE] uppercase">
                EXPERIENCIA VARENNE
              </span>
            </div>

            {/* Central high-impact quote phrase */}
            <h3 className="font-display font-light text-2xl sm:text-4xl md:text-5xl lg:text-[48px] text-slate-950 leading-[1.2] tracking-tight text-center max-w-3xl">
              La odontología de vanguardia <span className="font-bold text-slate-900">comienza con la ciencia</span>, pero la salud real <span className="font-bold text-[#246AFE]">empieza con la confianza</span>.
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl text-center leading-relaxed font-sans">
              Descubre un nuevo estándar en cuidado dental guiado por un diagnóstico clínico avanzado tridimensional y la cercanía de un equipo médico del más alto nivel.
            </p>

            {/* Bottom Center CTA Button */}
            <div className="pt-4 flex flex-col items-center gap-4">
              <button 
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative flex items-center gap-3 bg-[#246AFE] hover:bg-[#1e5ae0] text-white pl-7 pr-3 py-3 rounded-full shadow-[0_12px_40px_rgba(36,106,254,0.18)] hover:shadow-[0_16px_48px_rgba(36,106,254,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-bold tracking-tight">Agendar cita de diagnóstico sin costo</span>
                <div className="w-10 h-10 rounded-full bg-white text-[#246AFE] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
              
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-1">
                Atención preferencial • Cupos diarios limitados
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Redesigned Success Cases Section (SalvaMedic Theme & Dual Column Layout) */}
      <section id="casos" className="py-24 md:py-32 bg-[#EBF0FE] relative overflow-hidden border-t border-slate-200/40">
        {/* Decorative elements */}
        <div className="absolute top-[20%] left-[-100px] w-64 h-64 bg-[#246AFE]/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-100px] w-80 h-80 bg-[#246AFE]/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Casos Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-16 border-b border-slate-300/40 pb-8 lg:pb-10">
            <div className="space-y-2">
              <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-none text-slate-900">
                Resultados
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-normal">
                Casos clínicos reales de éxito
              </p>
            </div>
            <div className="max-w-md text-left md:text-right md:self-end">
              <p className="text-xs sm:text-sm font-normal text-slate-600 tracking-tight">
                Sonrisas transformadas con tecnología digital avanzada
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-stretch">
            
            {/* Left Column: Interactive card selectors, and specs */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
              
              {/* Vertical list of clickable clinical success cases representing left column data */}
              <div className="flex flex-col gap-4">
                {cases.map((c, idx) => {
                  const isActive = activeCase === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveCase(idx);
                        setSliderPosition(50);
                      }}
                      className={`w-full p-5 text-left rounded-3xl transition-all duration-300 border ${
                        isActive 
                          ? 'bg-white border-[#246AFE] ring-2 ring-[#246AFE]/10 shadow-[0_12px_36px_rgba(36,106,254,0.06)] scale-[1.01]' 
                          : 'bg-white/60 border-slate-200/50 hover:bg-white hover:border-[#C3D4FF]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[9px] font-extrabold uppercase tracking-wider font-mono ${isActive ? 'text-[#246AFE]' : 'text-slate-400'}`}>
                          Caso de éxito 0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#246AFE]" />
                        )}
                      </div>
                      
                      <h3 className="font-display font-bold text-base text-slate-900">
                        {c.title}
                      </h3>
                      
                      <p className={`text-xs text-slate-500 mt-2 leading-relaxed transition-all ${
                        isActive ? 'opacity-100 line-clamp-none' : 'opacity-70 line-clamp-1'
                      }`}>
                        {c.description}
                      </p>

                      {/* Expandable specs grid when active */}
                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-slate-200/50 grid grid-cols-3 gap-2">
                          {c.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="space-y-0.5 text-left">
                              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider font-mono">{spec.label}</p>
                              <p className="text-[11px] font-bold text-slate-800">{spec.value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Slider Controls: Previous/Next Navigation exactly styled as the bottom left in the image */}
              <div className="flex items-center gap-4 pt-4">
                <button 
                  onClick={() => {
                    setActiveCase(prev => (prev === 0 ? cases.length - 1 : prev - 1));
                  }}
                  className="w-11 h-11 rounded-full border border-slate-200 hover:border-[#246AFE] text-slate-400 hover:text-[#246AFE] flex items-center justify-center transition-colors bg-white hover:bg-[#246AFE]/5 cursor-pointer shadow-sm shrink-0"
                  aria-label="Caso anterior"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button 
                  onClick={() => {
                    setActiveCase(prev => (prev === cases.length - 1 ? 0 : prev + 1));
                  }}
                  className="w-11 h-11 rounded-full bg-[#246AFE] hover:bg-[#1e5ae0] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer shrink-0"
                  aria-label="Siguiente caso"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <span className="text-[11px] font-mono text-slate-400 font-semibold tracking-wider uppercase ml-2">
                  {`Registro ${activeCase + 1} de ${cases.length}`}
                </span>
              </div>

            </div>

            {/* Right Column: Minimalist card container with dynamic single image changing based on activeCase selection */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.03)] w-full">
                {/* Card Top Branding / Details */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="text-left">
                    <span className="text-[9px] font-bold text-[#246AFE] uppercase tracking-wider font-mono">Resultado Clínico</span>
                    <h4 className="font-display font-bold text-sm text-slate-900 mt-0.5">{cases[activeCase].title}</h4>
                  </div>
                  <div className="bg-[#EBF0FE] px-3 py-1 rounded-full text-[9px] font-bold text-[#246AFE] uppercase tracking-widest font-mono">
                    {cases[activeCase].specs[0].value}
                  </div>
                </div>

                {/* Single Image Showcase inside the Card */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none border border-slate-100 bg-slate-50 shadow-inner group/image">
                  <img 
                    src={cases[activeCase].after} 
                    alt={`Resultado de ${cases[activeCase].title}`} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Elegant Glass Overlay Tag */}
                  <div className="absolute top-4 left-4 bg-white/75 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#246AFE] animate-pulse"></span>
                    <span className="text-[9px] font-bold text-slate-900 uppercase tracking-wider font-mono">Resultado Final</span>
                  </div>

                  {/* Technology Overlay Badge */}
                  <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-white font-mono uppercase tracking-widest">Planificación 3D</span>
                  </div>
                </div>

                {/* Bottom details of the case */}
                <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500 font-mono border-t border-slate-100 pt-4">
                  <span>Resolución de alta precisión clínica</span>
                  <span className="font-bold text-[#246AFE] uppercase tracking-wider">Garantía Varenne</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Redesigned Premium FAQ Section with blue background container wrapping the sophisticated accordions */}
      <section id="faq" className="py-24 md:py-32 bg-[#EBF0FE] relative overflow-hidden border-t border-slate-200/40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Large Deep Royal Blue Container wrapping the entire FAQs content */}
          <div className="w-full bg-gradient-to-br from-[#246AFE] via-[#1b5bdc] to-[#0d40bf] rounded-[3rem] p-8 sm:p-12 lg:p-16 xl:p-20 relative overflow-hidden shadow-[0_30px_70px_rgba(36,106,254,0.18)] min-h-[750px] sm:min-h-[720px] lg:min-h-[660px]">
            
            {/* Elegant visual background grid / dots / waves for premium Framer feel */}
            <div className="absolute inset-0 opacity-25">
              <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-sky-200/10 rounded-full filter blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.1]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
              
              {/* Left Column: Title and Subtitle in high contrast white-on-blue */}
              <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-24">
                <div className="space-y-2">
                  <h2 className="text-white font-display font-medium text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-none">
                    Preguntas
                  </h2>
                  <p className="text-blue-100/80 text-xs sm:text-sm font-normal">
                    Todo lo que necesitas saber sobre tu consulta dental
                  </p>
                </div>

                {/* Unique surprise feature: Dynamic glassmorphic support advisor card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-sm flex flex-col justify-between gap-6 max-w-sm">
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img 
                        src="https://res.cloudinary.com/chlgeobm/image/upload/v1782844704/faq_wmsjni.webp" 
                        alt="Dra. Elisa Varenne" 
                        className="w-12 h-12 rounded-full object-cover border border-white/20"
                        referrerPolicy="no-referrer"
                      />
                      {/* Pulsing online status indicator */}
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-bold text-white">¿Tienes dudas clínicas?</h4>
                      <p className="text-[11px] text-blue-200 mt-0.5 font-mono">Dra. Elisa Varenne está en línea</p>
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-blue-100 leading-relaxed font-normal text-left">
                    Si deseas consultar un caso particular o tienes dudas de bioseguridad, puedes enviarnos un mensaje de forma inmediata.
                  </p>

                  <button 
                    onClick={() => {
                      const el = document.getElementById("contacto");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 hover:text-[#246AFE] text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                  >
                    <span>Hablar con un asesor</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: Premium micro-animated glassmorphic FAQ accordions with stable min-height */}
              <div className="lg:col-span-7 space-y-4 min-h-[580px] sm:min-h-[550px] lg:min-h-[510px]">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className={`transition-all duration-300 rounded-[1.75rem] overflow-hidden border ${
                        isOpen 
                          ? 'border-white/30 bg-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.05)]' 
                          : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center gap-4">
                          {/* High tech index numbering in mono */}
                          <span className={`font-mono text-[10px] sm:text-xs font-bold shrink-0 ${isOpen ? 'text-white' : 'text-blue-200/60'}`}>
                            0{index + 1}
                          </span>
                          <span className="font-display font-bold text-xs sm:text-[14px] md:text-sm text-white pr-3 leading-snug">
                            {faq.question}
                          </span>
                        </div>
                        
                        {/* Fluid rotating toggle icon */}
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                          isOpen 
                            ? 'bg-white border-white text-[#246AFE] rotate-180' 
                            : 'bg-white/10 border-white/10 text-white hover:bg-white/20'
                        }`}>
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
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
                            <div className="px-6 sm:px-8 pb-5 text-xs sm:text-sm text-blue-100 border-t border-white/5 pt-4 leading-relaxed font-normal pl-[44px] sm:pl-[54px] text-left">
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

        </div>
      </section>

      {/* Interactive Booking & Contact Form (Elegant, Sophisticated Framer-style Layout) */}
      <section id="contacto" className="py-24 md:py-32 bg-[#EBF0FE] relative overflow-hidden border-t border-slate-200/40">
        {/* Subtle decorative glow to blend with the footer transition */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#246AFE]/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Left Column: Title, Subtitle, Contact Details & Social Media */}
            <div className="lg:col-span-5 text-left space-y-10 lg:sticky lg:top-24">
              <div className="space-y-3">
                <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[56px] leading-none text-slate-900 tracking-tight">
                  Reserva
                </h2>
                <p className="text-slate-500 text-sm sm:text-base font-normal max-w-sm">
                  Inicia tu viaje hacia una sonrisa ideal
                </p>
              </div>

              {/* Contact details list styled with subtle elegance */}
              <div className="space-y-6 pt-6 border-t border-slate-300/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#246AFE] border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Correo electrónico</span>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">contacto@clinica-varenne.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#246AFE] border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Teléfono de atención</span>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">+52 55 9000 8888</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#246AFE] border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Sede principal</span>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                      Av. Campos Elíseos 400, Lomas de Chapultepec, CDMX
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-3 pt-6 border-t border-slate-300/30">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">Nuestras redes</span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white border border-slate-150 text-slate-500 hover:text-[#246AFE] hover:border-[#246AFE]/40 hover:shadow-sm flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white border border-slate-150 text-slate-500 hover:text-[#246AFE] hover:border-[#246AFE]/40 hover:shadow-sm flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://wa.me/525590008888" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white border border-slate-150 text-slate-500 hover:text-[#246AFE] hover:border-[#246AFE]/40 hover:shadow-sm flex items-center justify-center transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Redesigned Sophisticated Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.02)] relative overflow-hidden text-left">
                
                {/* Subtle visual branding background line */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#246AFE]/2 rounded-full filter blur-xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {!bookingSubmitted ? (
                    <motion.form 
                      key="booking-form"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Nombre completo</label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Ej. María González"
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#246AFE]/15 focus:border-[#246AFE] focus:bg-white transition-all text-slate-900 font-sans"
                          />
                        </div>

                        {/* Phone Contact */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">WhatsApp / Teléfono</label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Ej. +52 55 1234 5678"
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#246AFE]/15 focus:border-[#246AFE] focus:bg-white transition-all text-slate-900 font-sans"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Correo electrónico (Opcional)</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Ej. maria@example.com"
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#246AFE]/15 focus:border-[#246AFE] focus:bg-white transition-all text-slate-900 font-sans"
                          />
                        </div>

                        {/* Treatment Selection */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Tratamiento de interés</label>
                          <select 
                            name="treatment"
                            value={formData.treatment}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#246AFE]/15 focus:border-[#246AFE] focus:bg-white transition-all text-slate-900 cursor-pointer font-sans"
                          >
                            <option value="Ortodoncia Invisible">Ortodoncia Invisible (Invisalign)</option>
                            <option value="Carillas Estéticas">Carillas de Cerámica Pura</option>
                            <option value="Implantes Premium">Implantes Dentales Premium</option>
                            <option value="Blanqueamiento LED">Blanqueamiento Dental LED</option>
                            <option value="Limpieza Dental de Sarro">Limpieza Ultrasonido Profilaxis</option>
                            <option value="Otro / Valoración general">Otro / Consulta de Valoración</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Date picker */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Fecha sugerida</label>
                          <input 
                            type="date" 
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#246AFE]/15 focus:border-[#246AFE] focus:bg-white transition-all text-slate-900 cursor-pointer font-sans"
                          />
                        </div>

                        {/* Time selection */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">Preferencia de horario</label>
                          <select 
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#246AFE]/15 focus:border-[#246AFE] focus:bg-white transition-all text-slate-900 cursor-pointer font-sans"
                          >
                            <option value="09:00 AM">Mañana (09:00 AM - 12:00 PM)</option>
                            <option value="01:00 PM">Mediodía (12:00 PM - 03:00 PM)</option>
                            <option value="04:00 PM">Tarde (03:00 PM - 07:00 PM)</option>
                          </select>
                        </div>
                      </div>

                      {/* Submission Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={bookingLoading}
                          className={`group relative w-full flex items-center justify-between bg-[#246AFE] hover:bg-[#1e5ae0] text-white pl-6 pr-3 py-3.5 rounded-2xl shadow-[0_12px_32px_rgba(36,106,254,0.15)] hover:shadow-[0_16px_40px_rgba(36,106,254,0.3)] transition-all duration-300 hover:scale-[1.01] ${bookingLoading ? 'opacity-85 cursor-wait' : 'cursor-pointer'}`}
                        >
                          <div className="flex items-center gap-2">
                            {bookingLoading ? (
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0" />
                            ) : (
                              <PhoneCall className="w-4 h-4" />
                            )}
                            <span className="text-xs sm:text-sm font-bold tracking-tight">
                              {bookingLoading ? 'Procesando pre-registro seguro...' : 'Enviar pre-registro clínico'}
                            </span>
                          </div>
                          <div className="w-8 h-8 rounded-xl bg-white text-[#246AFE] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                            {bookingLoading ? (
                              <Check className="w-4 h-4 text-emerald-500 animate-pulse" />
                            ) : (
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            )}
                          </div>
                        </button>
                        <p className="text-[10px] text-slate-400 font-sans mt-3 text-center">
                          🔒 Sus datos están cifrados y protegidos por nuestro Aviso de Privacidad de grado médico.
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="booking-success"
                      className="py-10 px-4 text-center space-y-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                        <Check className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-xl text-slate-900">¡Pre-registro enviado con éxito!</h3>
                        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                          Gracias, <strong className="text-slate-800">{formData.name}</strong>. Hemos registrado tus datos en el sistema clínico de Varenne.
                        </p>
                      </div>

                      <div className="p-5 bg-slate-50 rounded-2xl max-w-md mx-auto text-left space-y-2 text-xs border border-slate-100">
                        <p className="text-slate-500"><strong className="text-slate-800 font-medium">Paciente:</strong> {formData.name}</p>
                        <p className="text-slate-500"><strong className="text-slate-800 font-medium">Contacto:</strong> {formData.phone}</p>
                        <p className="text-slate-500"><strong className="text-slate-800 font-medium">Tratamiento:</strong> {formData.treatment}</p>
                        <p className="text-slate-500"><strong className="text-slate-800 font-medium">Fecha tentativa:</strong> {formData.date} • {formData.time}</p>
                      </div>

                      <p className="text-[11px] text-slate-400 font-sans italic max-w-sm mx-auto">
                        Un coordinador se pondrá en contacto de inmediato vía WhatsApp o llamada telefónica para formalizar tu agenda final. ¡Que tengas un excelente día! 🦷✨
                      </p>

                      <button
                        onClick={() => setBookingSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Agendar otra consulta o cambiar datos
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Framer-Inspired Footer with Dental/Odontological Theme */}
      <footer className="bg-[#0B0A0A] text-slate-400 pt-16 pb-12 border-t border-slate-900 font-sans relative overflow-hidden">
        {/* Modern decorative visual elements & Grid background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#246AFE]/2 rounded-full filter blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#246AFE]/2 rounded-full filter blur-[120px] -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.02] -z-10" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Content with Modular Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900/40">
            
            {/* Column 1 - Brand Info & Philosophy */}
            <div className="md:col-span-4 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <img 
                  src="https://res.cloudinary.com/chlgeobm/image/upload/v1782838544/Logo_varenne_l4lsd7.svg" 
                  alt="" 
                  className="h-8 w-auto object-contain shrink-0"
                  referrerPolicy="no-referrer"
                />
                <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-none select-none">
                  Varenne
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                Inspirados en la perfección matemática de la proporción áurea y la biología tisular, diseñamos sonrisas únicas de alta costura que armonizan de manera natural y duradera.
              </p>
              
              {/* Telemetry/Live Clinic status indicator (Framer Style) */}
              <div className="inline-flex items-center gap-2.5 bg-zinc-950/50 border border-slate-800/30 px-3 py-1.5 rounded-xl">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-bold text-slate-300 font-mono tracking-wider">CLÍNICA DIGITAL ACTIVA</span>
              </div>
            </div>

            {/* Column 2 - Navigation */}
            <div className="md:col-span-2 text-left space-y-4 sm:pl-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white font-mono">Clínica</h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="group flex items-center gap-1.5 hover:text-white transition-all">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-[#246AFE] group-hover:translate-x-0.5 transition-all" />
                    <span>Inicio</span>
                  </a>
                </li>
                <li>
                  <a href="#servicios" onClick={(e) => scrollToSection(e, '#servicios')} className="group flex items-center gap-1.5 hover:text-white transition-all">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-[#246AFE] group-hover:translate-x-0.5 transition-all" />
                    <span>Servicios</span>
                  </a>
                </li>
                <li>
                  <a href="#ventajas" onClick={(e) => scrollToSection(e, '#ventajas')} className="group flex items-center gap-1.5 hover:text-white transition-all">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-[#246AFE] group-hover:translate-x-0.5 transition-all" />
                    <span>Ventajas</span>
                  </a>
                </li>
                <li>
                  <a href="#casos" onClick={(e) => scrollToSection(e, '#casos')} className="group flex items-center gap-1.5 hover:text-white transition-all">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-[#246AFE] group-hover:translate-x-0.5 transition-all" />
                    <span>Casos</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Specialties (Odontological details) */}
            <div className="md:col-span-3 text-left space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white font-mono">Tratamientos</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#246AFE]" />
                  <span>Invisalign® Elite</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#246AFE]" />
                  <span>Carillas Cerámicas avanzadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#246AFE]" />
                  <span>Implantología Computarizada</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#246AFE]" />
                  <span>Diseño de Sonrisa 3D</span>
                </li>
              </ul>
            </div>

            {/* Column 4 - Advanced Diagnosis Hardware */}
            <div className="md:col-span-3 text-left space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white font-mono">Tecnología</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-[#246AFE] shrink-0 mt-0.5" />
                  <span>Escáner Intraoral iTero 5D</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-[#246AFE] shrink-0 mt-0.5" />
                  <span>Tomografía CBCT 3D</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-[#246AFE] shrink-0 mt-0.5" />
                  <span>Microscopía Clínica</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-[#246AFE] shrink-0 mt-0.5" />
                  <span>Fresadora CAD/CAM</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Quick Contact Ribbon & Working Hours (Minimal Elegant Bar) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-slate-900/40 text-[11px] text-slate-400 items-center text-left">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-zinc-950 flex items-center justify-center border border-slate-800/30 shrink-0">
                <MapPin className="w-3 text-[#246AFE]" />
              </div>
              <span>Av. Paseo de la Reforma 1240, Miguel Hidalgo, CDMX</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-zinc-950 flex items-center justify-center border border-slate-800/30 shrink-0">
                <Phone className="w-3 text-[#246AFE]" />
              </div>
              <span>Contacto Directo: +52 55 5432 1098</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-zinc-950 flex items-center justify-center border border-slate-800/30 shrink-0">
                <Clock className="w-3 text-[#246AFE]" />
              </div>
              <span>Lunes a Sábado: 09:00 AM - 08:00 PM</span>
            </div>
          </div>

          {/* Footer Copyright and Social Media Icons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-slate-500 text-center sm:text-left relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <img 
                src="https://res.cloudinary.com/chlgeobm/image/upload/v1782838544/Logo_varenne_l4lsd7.svg" 
                alt="" 
                className="h-4 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity shrink-0 hidden sm:block"
                referrerPolicy="no-referrer"
              />
              <p className="font-sans font-light tracking-wide text-slate-400/80">
                © 2026 Varenne by <span className="text-[#246AFE] font-semibold hover:opacity-90 transition-all duration-300">Inspyrio</span>. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex items-center gap-2.5">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-zinc-950 border border-slate-800/30 hover:border-[#246AFE]/40 hover:bg-[#246AFE]/5 text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook Varenne"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-zinc-950 border border-slate-800/30 hover:border-[#246AFE]/40 hover:bg-[#246AFE]/5 text-slate-500 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Varenne"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}