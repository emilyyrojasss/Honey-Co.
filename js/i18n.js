/* ============================================================
   HONEY & CO. — Language toggle (ES / EN)
   js/i18n.js
   ============================================================ */
'use strict';

const T = {
  es: {
    /* NAV */
    'nav.nosotros': 'Nosotros', 'nav.servicios': 'Servicios',
    'nav.galeria':  'Galería',  'nav.contacto':  'Contacto',

    /* FOOTER */
    'footer.tagline': 'Donde cada detalle cuenta.',
    'footer.nav.title': 'Páginas',
    'footer.contact.title': 'Contacto',
    'footer.copy': '© 2025 Honey & Co. Costa Rica · Todos los derechos reservados',

    /* INDEX — hero */
    'idx.hero.eyebrow':  'COSTA RICA',
    'idx.hero.title':    'Cada evento,<br>una historia que contar.',
    'idx.hero.subtitle': 'Convertimos tus ideas en momentos que no se olvidan.',
    'idx.hero.cta':      'Cotiza tu evento',
    /* INDEX — nosotros */
    'idx.about.eyebrow': 'QUIÉNES SOMOS',
    'idx.about.title':   'Más de 17 años creando momentos que perduran en la memoria.',
    'idx.about.body1':   'Con más de 17 años de experiencia, en Honey & Co. nos especializamos en la organización y planificación de eventos corporativos, religiosos, celebraciones especiales y mucho más. Hemos sido parte de más de 100 actividades — desde eventos pequeños e íntimos hasta convenciones nacionales e internacionales.',
    'idx.about.body2':   'Trabajamos constantemente para que puedas despreocuparte por completo y vivir una experiencia única. Contamos con aliados de alta experiencia y proveedores de altos estándares de calidad y responsabilidad.',
    'idx.about.stat1': 'Actividades realizadas', 'idx.about.stat2': 'Años de experiencia',
    'idx.about.link': 'Conoce nuestra historia',
    /* INDEX — servicios */
    'idx.srv.eyebrow': 'LO QUE HACEMOS', 'idx.srv.title': 'Servicios',
    'idx.srv.s1': 'Bodas', 'idx.srv.s2': 'Corporativos', 'idx.srv.s3': 'Celebraciones', 'idx.srv.s4': 'Eventos Religiosos',
    'idx.srv.more': 'Explorar todos los servicios',
    /* INDEX — galería */
    'idx.gal.eyebrow': 'NUESTRO TRABAJO', 'idx.gal.title': 'Una mirada a nuestros eventos.',
    'idx.gal.cta': 'Ver galería completa',
    /* INDEX — testimonios */
    'idx.testi.eyebrow': 'LO QUE DICEN', 'idx.testi.title': 'Historias que nos inspiran.',
    /* INDEX — CTA */
    'idx.cta.title': '¿Lista para crear tu evento?',
    'idx.cta.sub':   'Conversemos sobre tus ideas y hagamos que sucedan.',
    'idx.cta.btn':   'Cotiza tu evento',

    /* NOSOTROS */
    'nos.hero.eyebrow': 'NUESTRA HISTORIA',
    'nos.hero.title':   'El equipo detrás de cada detalle.',
    'nos.hero.sub':     'Conoce a las personas que convierten tus ideas en momentos inolvidables.',
    'nos.about.eyebrow': 'QUIÉNES SOMOS',
    'nos.about.title':   'Más de 17 años detrás de cada gran evento, amando cada detalle.',
    'nos.about.stat1': 'Actividades realizadas', 'nos.about.stat2': 'Años de experiencia',
    'nos.team.eyebrow': 'NUESTRO EQUIPO', 'nos.team.title': 'La persona que hace la magia.',
    'nos.role1': 'Fundadora & Directora Creativa',
    'nos.role2': 'Coordinadora de Eventos',
    'nos.role3': 'Diseño & Decoración',
    'nos.cta.title': '¿Lista para trabajar juntas?',
    'nos.cta.sub':   'Cuéntanos sobre tu evento y te acompañamos en cada paso.',
    'nos.cta.btn':   'Cotiza tu evento',

    /* SERVICIOS */
    'srv.hero.eyebrow': 'LO QUE HACEMOS',
    'srv.hero.title':   'Servicios a tu medida.',
    'srv.hero.sub':     'Desde la primera reunión hasta el último detalle del día, estamos contigo.',
    'srv.spec.eyebrow': 'ESPECIALIDADES', 'srv.spec.title': 'Todo lo que necesitas, en un solo lugar.',
    'srv.s1': 'Bodas', 'srv.s2': 'Corporativos', 'srv.s3': 'Celebraciones', 'srv.s4': 'Eventos Religiosos',
    'srv.proc.eyebrow': 'NUESTRO PROCESO', 'srv.proc.title': 'Cómo trabajamos contigo.',
    'srv.p1': 'Consulta inicial', 'srv.p2': 'Propuesta a medida', 'srv.p3': 'Planificación', 'srv.p4': 'El gran día',
    'srv.cta.title': '¿Cuál es tu próximo evento?',
    'srv.cta.sub':   'Dinos qué tienes en mente y construimos algo extraordinario juntas.',
    'srv.cta.btn':   'Cotiza tu evento',

    /* GALERÍA */
    'gal.hero.eyebrow': 'NUESTRO TRABAJO', 'gal.hero.title': 'Cada detalle, cuidado con amor.',
    'gal.hero.sub': 'Una colección de los momentos que hemos tenido el privilegio de crear.',
    'gal.cta.title': '¿Quieres que tu evento esté aquí?',
    'gal.cta.sub':   'Cada imagen en esta galería fue un sueño que alguien decidió hacer realidad.',
    'gal.cta.btn':   'Cotiza tu evento',

    /* CONTACTO */
    'con.hero.eyebrow': 'HABLEMOS', 'con.hero.title': 'Cotiza tu evento.',
    'con.hero.sub': 'Cuéntanos tu idea y te contactamos en menos de 24 horas.',
    'con.f.nombre': 'Nombre completo', 'con.f.email': 'Email', 'con.f.tel': 'Teléfono',
    'con.f.tipo': 'Tipo de evento', 'con.f.fecha': 'Fecha estimada',
    'con.f.personas': 'Número de personas', 'con.f.presupuesto': 'Presupuesto aproximado',
    'con.f.mensaje': 'Mensaje', 'con.f.submit': 'Enviar solicitud',
    'con.f.success': '¡Gracias! Recibimos tu solicitud. Te contactamos en menos de 24 horas.',
    'con.opt.boda': 'Boda', 'con.opt.corp': 'Corporativo', 'con.opt.celeb': 'Celebración', 'con.opt.otro': 'Otro',
    'con.info.email': 'Email', 'con.info.wa': 'WhatsApp', 'con.info.hours': 'Horario',
    'con.info.schedule': 'Lunes a viernes<br>9:00 am – 6:00 pm',
  },

  en: {
    /* NAV */
    'nav.nosotros': 'About',    'nav.servicios': 'Services',
    'nav.galeria':  'Gallery',  'nav.contacto':  'Contact',

    /* FOOTER */
    'footer.tagline': 'Where every detail matters.',
    'footer.nav.title': 'Pages',
    'footer.contact.title': 'Contact',
    'footer.copy': '© 2025 Honey & Co. Costa Rica · All rights reserved',

    /* INDEX — hero */
    'idx.hero.eyebrow':  'COSTA RICA',
    'idx.hero.title':    'Every event,<br>a story to tell.',
    'idx.hero.subtitle': "We turn your ideas into moments you'll never forget.",
    'idx.hero.cta':      'Get a quote',
    /* INDEX — nosotros */
    'idx.about.eyebrow': 'ABOUT US',
    'idx.about.title':   'Over 17 years creating moments that last.',
    'idx.about.body1':   'With over 17 years of experience, Honey & Co. specializes in organizing and planning corporate events, religious celebrations, special occasions and much more. We have been part of over 100 activities — from intimate gatherings to national and international conventions.',
    'idx.about.body2':   'We work tirelessly so you can be completely worry-free and live a unique experience. We have high-experience allies and suppliers with the highest standards of quality and responsibility.',
    'idx.about.stat1': 'Events completed', 'idx.about.stat2': 'Years of experience',
    'idx.about.link': 'Learn our story',
    /* INDEX — servicios */
    'idx.srv.eyebrow': 'WHAT WE DO', 'idx.srv.title': 'Services',
    'idx.srv.s1': 'Weddings', 'idx.srv.s2': 'Corporate', 'idx.srv.s3': 'Celebrations', 'idx.srv.s4': 'Religious Events',
    'idx.srv.more': 'Explore all services',
    /* INDEX — galería */
    'idx.gal.eyebrow': 'OUR WORK', 'idx.gal.title': 'A glimpse of our events.',
    'idx.gal.cta': 'View full gallery',
    /* INDEX — testimonios */
    'idx.testi.eyebrow': 'WHAT THEY SAY', 'idx.testi.title': 'Stories that inspire us.',
    /* INDEX — CTA */
    'idx.cta.title': 'Ready to plan your event?',
    'idx.cta.sub':   "Let's talk about your ideas and make them happen.",
    'idx.cta.btn':   'Get a quote',

    /* NOSOTROS */
    'nos.hero.eyebrow': 'OUR STORY',
    'nos.hero.title':   'The team behind every detail.',
    'nos.hero.sub':     'Meet the people who turn your ideas into unforgettable moments.',
    'nos.about.eyebrow': 'ABOUT US',
    'nos.about.title':   'Over 17 years behind every great event, loving every detail.',
    'nos.about.stat1': 'Events completed', 'nos.about.stat2': 'Years of experience',
    'nos.team.eyebrow': 'OUR TEAM', 'nos.team.title': 'The person who makes the magic happen.',
    'nos.role1': 'Founder & Creative Director',
    'nos.role2': 'Events Coordinator',
    'nos.role3': 'Design & Décor',
    'nos.cta.title': 'Ready to work together?',
    'nos.cta.sub':   "Tell us about your event and we'll be with you every step of the way.",
    'nos.cta.btn':   'Get a quote',

    /* SERVICIOS */
    'srv.hero.eyebrow': 'WHAT WE DO',
    'srv.hero.title':   'Services tailored to you.',
    'srv.hero.sub':     "From the first meeting to the last detail on the day, we're with you.",
    'srv.spec.eyebrow': 'SPECIALTIES', 'srv.spec.title': 'Everything you need, in one place.',
    'srv.s1': 'Weddings', 'srv.s2': 'Corporate', 'srv.s3': 'Celebrations', 'srv.s4': 'Religious Events',
    'srv.proc.eyebrow': 'OUR PROCESS', 'srv.proc.title': 'How we work with you.',
    'srv.p1': 'Initial Consultation', 'srv.p2': 'Custom Proposal', 'srv.p3': 'Planning', 'srv.p4': 'The Big Day',
    'srv.cta.title': "What's your next event?",
    'srv.cta.sub':   "Tell us what you have in mind and let's build something extraordinary.",
    'srv.cta.btn':   'Get a quote',

    /* GALERÍA */
    'gal.hero.eyebrow': 'OUR WORK', 'gal.hero.title': 'Every detail, crafted with love.',
    'gal.hero.sub': "A collection of moments we've had the privilege to create.",
    'gal.cta.title': 'Want your event featured here?',
    'gal.cta.sub':   'Every image in this gallery was a dream someone decided to make real.',
    'gal.cta.btn':   'Get a quote',

    /* CONTACTO */
    'con.hero.eyebrow': "LET'S TALK", 'con.hero.title': 'Get a quote.',
    'con.hero.sub': "Tell us your idea and we'll reach out within 24 hours.",
    'con.f.nombre': 'Full name', 'con.f.email': 'Email', 'con.f.tel': 'Phone',
    'con.f.tipo': 'Event type', 'con.f.fecha': 'Estimated date',
    'con.f.personas': 'Number of guests', 'con.f.presupuesto': 'Approximate budget',
    'con.f.mensaje': 'Message', 'con.f.submit': 'Send request',
    'con.f.success': "Thank you! We received your request. We'll be in touch within 24 hours.",
    'con.opt.boda': 'Wedding', 'con.opt.corp': 'Corporate', 'con.opt.celeb': 'Celebration', 'con.opt.otro': 'Other',
    'con.info.email': 'Email', 'con.info.wa': 'WhatsApp', 'con.info.hours': 'Hours',
    'con.info.schedule': 'Monday to Friday<br>9:00 am – 6:00 pm',
  }
};

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[lang]?.[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = T[lang]?.[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  const active = document.getElementById('lang-active');
  const other  = document.getElementById('lang-other');
  if (active) active.textContent = lang.toUpperCase();
  if (other)  other.textContent  = lang === 'es' ? 'EN' : 'ES';
  localStorage.setItem('hc-lang', lang);
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('hc-lang') || 'es';
  applyLang(saved);
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  let current = saved;
  btn.addEventListener('click', () => {
    current = current === 'es' ? 'en' : 'es';
    applyLang(current);
  });
});
