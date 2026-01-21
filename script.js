// YEAR
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// TRANSLATIONS
const translations = {
  sq: {
    nav_services: "Shërbimet",
    nav_results: "Rezultatet",
    nav_packages: "Paketat",
    nav_faq: "FAQ",
    nav_contact: "Kontakto",

    hero_badge: "Marketing Digjital • Meta Ads • Google Ads • SEO",
    hero_title_1: "Rritje reale për biznesin tënd,",
    hero_title_2: "jo vetëm “like”.",
    hero_lead:
      "Social Boost Studio ndihmon biznese të marrin më shumë klientë me reklama të optimizuara, landing pages që konvertojnë dhe strategji të qarta.",
    cta_quote: "Kërko ofertë",
    cta_results: "Shiko rezultate",

    trust_1: "rritje leads",
    trust_2: "i përmirësuar",
    trust_3: "ditë plan veprimi",

    audit_title: "Audit falas (10 min)",
    audit_sub: "Më trego çfarë shet dhe ku do të rritesh. Të jap 3 ide konkrete.",
    audit_li_1: "Analizë e faqes / landing",
    audit_li_2: "Analizë e reklamave aktuale",
    audit_li_3: "Strategji e thjeshtë 30-ditore",
    audit_btn: "Rezervo konsultë",
    audit_note: "Nuk ka detyrim. Thjesht bisedë e shpejtë.",

    proof_text: "Punoj me biznese si:",
    proof_1: "Restorante",
    proof_2: "E-commerce",
    proof_3: "Shërbime lokale",
    proof_4: "Klinika",
    proof_5: "Trajnime",

    services_title: "Shërbimet",
    services_sub: "Zgjedhim vetëm atë që të sjell rezultat. Pa gjëra të kota.",

    s1_title: "Meta Ads (Facebook/Instagram)",
    s1_text: "Targetim i saktë, kreativa që shesin, optimizim dhe raportim i qartë.",
    s1_li1: "Lead Gen / Sales",
    s1_li2: "Remarketing",
    s1_li3: "Testim A/B",

    s2_title: "Google Ads",
    s2_text: "Search + Performance Max, me strukturë të pastër dhe matje të saktë.",
    s2_li1: "Search",
    s2_li2: "Performance Max",
    s2_li3: "Konvertime & GA4",

    s3_title: "SEO & Content",
    s3_text: "Renditje afatgjate me faqe të optimizuara, artikuj dhe strukturë teknike.",
    s3_li1: "SEO teknik",
    s3_li2: "On-page",
    s3_li3: "Content plan",

    s4_title: "Landing Pages",
    s4_text: "Landing që konvertojnë, të shpejta dhe të thjeshta për klientin.",
    s4_li1: "Copywriting",
    s4_li2: "UX",
    s4_li3: "Form & tracking",

    s5_title: "Analytics & Reporting",
    s5_text: "GA4, Pixel/CAPI, konvertime dhe raporte javore që kuptohen lehtë.",
    s5_li1: "GA4",
    s5_li2: "Pixel/CAPI",
    s5_li3: "Raporte javore",

    s6_title: "Video Editing",
    s6_text: "Reels, ads creatives dhe video të shkurtra që shesin e mbajnë vëmendjen.",
    s6_li1: "Reels / TikTok",
    s6_li2: "Ads creatives",
    s6_li3: "Subtitles & pacing",

    results_title: "Rezultatet",
    results_sub: "Vendos këtu 2–4 raste reale. Këto janë shembuj placeholder.",
    r1_title: "E-commerce",
    r1_pill: "Meta Ads",
    r1_text: "Fokus te kreativa + remarketing + landing.",
    r2_title: "Biznes lokal",
    r2_pill: "Google Search",
    r2_text: "Keyword me intent + konvertime të pastra në GA4.",
    r2_m1: "Telefonata",
    r2_m3: "Konvertime",

    packages_title: "Paketat",
    packages_sub: "Zgjedh paketën dhe kërko ofertë. E bëjmë sipas nevojës.",
    p1_title: "Start",
    p1_sub: "Për biznese që po nisin reklamimin.",
    p1_li1: "1 kanal (Meta ose Google)",
    p1_li2: "2–3 kampanja",
    p1_li3: "Raport javor",

    p_ribbon: "Më e kërkuara",
    p2_title: "Growth",
    p2_sub: "Për rritje serioze dhe optimizim të rregullt.",
    p2_li1: "Meta + Google",
    p2_li2: "Testim A/B kreativash",
    p2_li3: "Remarketing + tracking",

    p3_title: "Performance",
    p3_sub: "Për e-commerce / volum të madh.",
    p3_li1: "Optimizim i shpeshtë",
    p3_li2: "Sugjerime CRO",
    p3_li3: "Dashboard & raportim",

    packages_note: "Buxheti i reklamave paguhet veçmas (direkt në Meta/Google).",

    faq_title: "FAQ",
    faq_sub: "Pyetjet më të shpeshta.",
    faq_q1: "Sa shpejt shihen rezultatet?",
    faq_a1: "Zakonisht 7–14 ditët e para janë për testim. Pastaj nis optimizimi serioz.",
    faq_q2: "A punon me kontratë?",
    faq_a2: "Po. Mund të bëjmë mujore ose 3-mujore, varet prej objektivave.",
    faq_q3: "A mundem me e menaxhu vet reklamimin?",
    faq_a3: "Po. Mund të punojmë me konsulencë dhe review javore.",

    contact_title: "Kontakti",
    contact_sub: "Shkruaj çfarë synon dhe të kthehem shpejt.",
    form_name: "Emri",
    form_email: "Email",
    form_business: "Biznesi / Fusha",
    form_message: "Mesazhi",
    form_send: "Dërgo",
    form_note: "Ky formular hap emailin (mailto). Nëse do form profesional, përdor Formspree/Netlify Forms.",

    direct_title: "Kontakt direkt",
    direct_sub: "Më kontakto direkt këtu:",
    direct_phone: "Telefon",
    direct_email: "Email",
    direct_note: "Punoj online. Nëse je afër, mundemi edhe me takim.",

    footer_text: "Marketing digjital me fokus në rezultate: Meta Ads, Google Ads, SEO, Content dhe Video Editing.",
    footer_nav: "Navigimi",
    footer_contact: "Kontakt",
    footer_rights: "Copyright."
  },

  en: {
    nav_services: "Services",
    nav_results: "Results",
    nav_packages: "Packages",
    nav_faq: "FAQ",
    nav_contact: "Contact",

    hero_badge: "Digital Marketing • Meta Ads • Google Ads • SEO",
    hero_title_1: "Real growth for your business,",
    hero_title_2: "not just “likes”.",
    hero_lead:
      "Social Boost Studio helps businesses get more clients through optimized ads, high-converting landing pages, and clear strategies.",
    cta_quote: "Get a quote",
    cta_results: "See results",

    trust_1: "more leads",
    trust_2: "better ROAS",
    trust_3: "days action plan",

    audit_title: "Free audit (10 min)",
    audit_sub: "Tell me what you sell and where you want to grow. I’ll give you 3 clear ideas.",
    audit_li_1: "Website / landing analysis",
    audit_li_2: "Current ads review",
    audit_li_3: "Simple 30-day plan",
    audit_btn: "Book a call",
    audit_note: "No obligation. Just a quick chat.",

    proof_text: "I work with businesses like:",
    proof_1: "Restaurants",
    proof_2: "E-commerce",
    proof_3: "Local services",
    proof_4: "Clinics",
    proof_5: "Training",

    services_title: "Services",
    services_sub: "Only what brings results. No unnecessary stuff.",

    s1_title: "Meta Ads (Facebook/Instagram)",
    s1_text: "Precise targeting, creatives that sell, optimization and clear reporting.",
    s1_li1: "Lead Gen / Sales",
    s1_li2: "Remarketing",
    s1_li3: "A/B testing",

    s2_title: "Google Ads",
    s2_text: "Search + Performance Max with clean structure and accurate tracking.",
    s2_li1: "Search",
    s2_li2: "Performance Max",
    s2_li3: "Conversions & GA4",

    s3_title: "SEO & Content",
    s3_text: "Long-term rankings with optimized pages, content and technical structure.",
    s3_li1: "Technical SEO",
    s3_li2: "On-page",
    s3_li3: "Content plan",

    s4_title: "Landing Pages",
    s4_text: "Fast, simple landing pages built to convert.",
    s4_li1: "Copywriting",
    s4_li2: "UX",
    s4_li3: "Forms & tracking",

    s5_title: "Analytics & Reporting",
    s5_text: "GA4, Pixel/CAPI, conversions and easy weekly reports.",
    s5_li1: "GA4",
    s5_li2: "Pixel/CAPI",
    s5_li3: "Weekly reports",

    s6_title: "Video Editing",
    s6_text: "Reels, ad creatives and short videos built to sell and keep attention.",
    s6_li1: "Reels / TikTok",
    s6_li2: "Ads creatives",
    s6_li3: "Subtitles & pacing",

    results_title: "Results",
    results_sub: "Add 2–4 real case studies here. These are placeholders.",
    r1_title: "E-commerce",
    r1_pill: "Meta Ads",
    r1_text: "Creative testing + remarketing + landing improvements.",
    r2_title: "Local business",
    r2_pill: "Google Search",
    r2_text: "High-intent keywords + clean GA4 conversions.",
    r2_m1: "Calls",
    r2_m3: "Conversions",

    packages_title: "Packages",
    packages_sub: "Pick a package and request a quote. We tailor it to your needs.",
    p1_title: "Start",
    p1_sub: "For businesses getting started with ads.",
    p1_li1: "1 channel (Meta or Google)",
    p1_li2: "2–3 campaigns",
    p1_li3: "Weekly reporting",

    p_ribbon: "Most popular",
    p2_title: "Growth",
    p2_sub: "For serious growth and consistent optimization.",
    p2_li1: "Meta + Google",
    p2_li2: "A/B creative testing",
    p2_li3: "Remarketing + tracking",

    p3_title: "Performance",
    p3_sub: "For e-commerce / higher volume.",
    p3_li1: "Frequent optimization",
    p3_li2: "CRO suggestions",
    p3_li3: "Dashboard & reporting",

    packages_note: "Ad spend is paid separately (directly to Meta/Google).",

    faq_title: "FAQ",
    faq_sub: "Most common questions.",
    faq_q1: "How fast do results show?",
    faq_a1: "Usually the first 7–14 days are for testing. Then strong optimization kicks in.",
    faq_q2: "Do you work with contracts?",
    faq_a2: "Yes. Monthly or 3-month options, depending on goals.",
    faq_q3: "Can I manage ads myself?",
    faq_a3: "Yes. We can do consulting and weekly reviews.",

    contact_title: "Contact",
    contact_sub: "Tell me your goal and I’ll reply quickly.",
    form_name: "Name",
    form_email: "Email",
    form_business: "Business / Industry",
    form_message: "Message",
    form_send: "Send",
    form_note: "This form opens your email app (mailto). For a pro form, use Formspree/Netlify Forms.",

    direct_title: "Direct contact",
    direct_sub: "Reach me directly here:",
    direct_phone: "Phone",
    direct_email: "Email",
    direct_note: "I work online. If you’re nearby, we can also meet.",

    footer_text: "Digital marketing focused on results: Meta Ads, Google Ads, SEO, Content and Video Editing.",
    footer_nav: "Navigation",
    footer_contact: "Contact",
    footer_rights: "Copyright."
  }
};

// LANGUAGE UI HELPERS
const langWrap = document.getElementById("langWrap");
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const langCode = document.getElementById("langCode");

function renderLangUI(lang){
  if (!langToggle || !langCode) return;
  const flagEl = langToggle.querySelector(".flag");
  if (!flagEl) return;

  if (lang === "sq") {
    flagEl.textContent = "🇦🇱";
    langCode.textContent = "SQ";
  } else {
    flagEl.textContent = "🇬🇧";
    langCode.textContent = "EN";
  }
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.sq;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  renderLangUI(lang);
  localStorage.setItem("lang", lang);
}

// INIT LANGUAGE
const savedLang = localStorage.getItem("lang") || "sq";
setLanguage(savedLang);

// DROPDOWN EVENTS
if (langToggle && langMenu) {
  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });

  langMenu.querySelectorAll(".lang-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
      langMenu.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!langWrap) return;
    if (!langWrap.contains(e.target)) langMenu.classList.remove("open");
  });
}

// CONTACT FORM (MAILTO)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness/Industry: ${business}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:lumaedvin@gmail.com?subject=${subject}&body=${body}`;
  });
}

