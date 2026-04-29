export const businessInfo = {
    name: "Kayal Academy",
    legalName: "Kayal Academy Abacus Classes",
    category: "EducationalOrganization",

    description:
        "Kayal Academy is the best Abacus and Mental Math training centre in Trichy offering Indian Abacus, handwriting improvement, spoken Hindi, phonics and tuition classes.",

    shortDescription:
        "Best Abacus Classes in Trichy - Mental Math & Skill Development",

    address: {
        street: "133/96, North Andar St, Opposite Annai Hostel, Teppakulam",
        city: "Tiruchirappalli",
        state: "Tamil Nadu",
        zip: "620002",
        country: "IN",
        formatted:
            "Kayal Academy,<br>133/96, First Floor,<br>North-Andar St,<br>Opposite Annai Hostel,<br>Teppakulam,<br>Trichy - 620002,<br>Tamil Nadu"
    },

    phone: "+91-9159496503",
    alternatePhone: "+91-74490-18862",

    // FIX: Added these two helpers so every component uses ONE source of truth
    // and never produces wa.me/undefined again.
    //
    // Usage in any .astro file:
    //   import { businessInfo } from '../config/business';
    //   <a href={businessInfo.whatsappUrl}>WhatsApp</a>
    //   <a href={`tel:${businessInfo.phoneClean}`}>Call</a>
    whatsappUrl: "https://wa.me/919159496503",   // ready-to-use full URL
    phoneClean: "+919159496503",                 // E.164 for tel: links

    email: "contact@kayalacademy.com",
    website: "https://kayalacademy.com",

    geo: {
        latitude: 10.8284,
        longitude: 78.6946
    },

    map: "https://maps.google.com/?q=Kayal+Academy+Trichy",

    socialLinks: {
        instagram: "https://www.instagram.com/kayalbalajii?igsh=eXU5YW1rYnl3bzNy",
        facebook: "https://www.facebook.com/kayalvizhi.senthamilselvan.2025",
        youtube: "https://youtube.com/@kayal_academy_official?si=xD6b-Dh3sOsoF9cQ",
        threads: "https://www.threads.net/@kayalacademy",
        // FIX: kept whatsapp here too for schema/sameAs usage
        whatsapp: "https://wa.me/919159496503"
    },

    openingHours: [
        "Mo-Fr 17:00-20:00",
        "Sa-Su 10:00-20:00"
    ],

    serviceArea: [
        "Tiruchirappalli",
        "Teppakulam",
        "Srirangam",
        "Woraiyur",
        "Thillai Nagar",
        "Cantonment",
        "K K Nagar",
        "Karumandapam",
        "Palakkarai",
        "Golden Rock"
    ],

    services: [
        "Abacus Classes in Trichy",
        "Vedic Maths Classes",
        "Phonics Classes",
        "Handwriting Improvement",
        "Spoken Hindi Classes",
        "Tuition for School Students"
    ],

    keywords: [
        "Abacus Classes in Trichy",
        "Abacus Classes Near Me",
        "Mental Math Training",
        "Tuition Centre in Teppakulam",
        "Indian Abacus Training",
        "Handwriting Classes Trichy",
        "Spoken Hindi Trichy",
        "Phonics Classes Trichy",
        "Vedic Maths Trichy",
        "Calligraphy Classes Trichy"
    ]
};