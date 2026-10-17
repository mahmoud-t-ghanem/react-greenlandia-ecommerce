import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ar: {
    translation: {
      brandName: "جرينلانديا",
      searchPlaceholder: "ابحث عن نبتتك المفضلة...",
      addToCart: "إضافة للسلة",
      addedToCart: "في السلة",
      cartTitle: "سلة المشتريات",
      favoritesTitle: "المفضلات",
      emptyCart: "السلة فارغة حالياً",
      emptyFavorites: "لا توجد منتجات في المفضلات",
      noResults: "لا توجد نتائج مطابقة لبحثك",
      total: "المجموع الكلي:",
      checkoutWhatsApp: "إرسال الطلب عبر واتساب",
      customerInfo: "معلومات الشحن",
      fullName: "الاسم الكامل",
      phoneNumber: "رقم الهاتف",
      address: "العنوان / المدينة",
      confirmOrder: "تأكيد وإرسال الطلب",
      close: "إغلاق",
      currency: "دولار",

      home: {
        hero: {
          badge: "نباتات طبيعية لكل زاوية في بيتك",
          title: "أضف الحياة الى منزلك",
          subtitle:
            "اكتشف مجموعتنا من النباتات الداخلية والصباريات والأشجار، أو أخبرنا بالنبتة التي تبحث عنها.",
          shopNow: "تسوّق الآن",
          orderNow: "اطلب نبتتك",
        },
        features: {
          title: "لماذا جرينلانديا؟",
          subtitle: "كل ما تحتاجه لتبدأ رحلتك مع النباتات في مكان واحد",
          items: {
            quality: {
              title: "نباتات مختارة بعناية",
              text: "نختار نباتاتنا بعناية لتصلك بحالة جيدة وجاهزة للنمو.",
            },
            care: {
              title: "إرشادات للعناية",
              text: "نشاركك نصائح بسيطة للري والإضاءة لتبقى نباتاتك بصحة جيدة.",
            },
            packaging: {
              title: "تغليف آمن",
              text: "نهتم بتغليف النباتات لتصلك سليمة وبدون أضرار.",
            },
            whatsapp: {
              title: "طلب سريع عبر واتساب",
              text: "تواصل معنا مباشرة وأرسل طلبك خلال دقائق وبدون تعقيد.",
            },
            prices: {
              title: "أسعار واضحة",
              text: "سعر معلن لكل نبتة، بدون مفاجآت عند الطلب.",
            },
            custom: {
              title: "نبتتك المفضلة بالطلب",
              text: "لم تجد ما تبحث عنه؟ أخبرنا وسنساعدك في العثور عليه.",
            },
          },
        },
        products: {
          title: "نباتاتنا",
          subtitle: "مجموعة مختارة من النباتات المناسبة للمنازل والمكاتب",
          seeMore: "عرض المزيد",
        },
      },

      productsPage: {
        title: "جميع النباتات",
        subtitle: "تصفّح مجموعتنا الكاملة أو ابحث عن نبتتك المفضلة",
      },

      about: {
        title: "من نحن",
        subtitle: "نباتات تمنح بيتك حياة، وفريق يهتم بكل التفاصيل.",
        story: {
          title: "قصتنا",
          p1: "بدأت جرينلانديا من فكرة بسيطة: أن يكون لكل بيت ومكتب زاوية خضراء تمنح المكان حياة وهدوءاً.",
          p2: "نختار نباتاتنا بعناية، ونرافقك بنصائح العناية بها، ونبقى على تواصل معك حتى تنمو نبتتك كما تحب.",
          points: {
            point1: "نباتات داخلية وصباريات وأشجار زينة",
            point2: "نصائح عناية بسيطة لكل نبتة",
            point3: "طلب سهل عبر واتساب أو النموذج",
          },
        },
        pillars: {
          mission: {
            title: "رسالتنا",
            text: "نقرّب الطبيعة من بيتك بنباتات مختارة بعناية وخدمة بسيطة وواضحة.",
          },
          vision: {
            title: "رؤيتنا",
            text: "أن نكون وجهتك الأولى للنباتات المنزلية، حيث تجد ما يناسب ذوقك ومساحتك.",
          },
          values: {
            title: "قيمنا",
            text: "الجودة، والصدق في الوصف والسعر، والاهتمام بكل عميل.",
          },
        },
        cta: {
          title: "جاهز لتبدأ رحلتك الخضراء؟",
          text: "تصفّح نباتاتنا أو تواصل معنا ونساعدك في اختيار الأنسب لمكانك.",
          products: "تصفّح النباتات",
          contact: "تواصل معنا",
        },
      },

      contact: {
        title: "تواصل معنا",
        subtitle: "يسعدنا سماعك، اختر الطريقة الأنسب لك للتواصل معنا.",
        phone: { label: "اتصل بنا", action: "اتصل الآن" },
        whatsapp: { label: "واتساب", action: "ابدأ المحادثة" },
        email: { label: "البريد الإلكتروني", action: "أرسل رسالة" },
        address: {
          label: "العنوان",
          value: "شارع الحدائق، حي النخيل",
          action: "افتح الخريطة",
        },
        hours: {
          label: "ساعات العمل",
          value: "يومياً من 9:00 صباحاً حتى 9:00 مساءً",
        },
        formTitle: "أرسل لنا رسالتك",
        formSubtitle: "اكتب لنا وسيتواصل معك فريقنا في أقرب وقت.",
      },

      footer: {
        description:
          "متجر نباتات يهتم بأن يصلك ما تحب بحالة جيدة، مع نصائح بسيطة للعناية بها.",
        quickLinks: "روابط سريعة",
        contactTitle: "تواصل معنا",
        links: {
          home: "الرئيسية",
          products: "المنتجات",
          about: "من نحن",
          contact: "اتصل بنا",
        },
        backToTop: "العودة للأعلى",
        rights: "© {{year}} {{brand}}. جميع الحقوق محفوظة.",
      },

      request: {
        title: "لم تجد النبتة التي تبحث عنها؟",
        subtitle: "أخبرنا بما تحتاجه وسيتواصل معك فريقنا في أقرب وقت.",
        steps: {
          step1: "اكتب اسم النبتة أو تفاصيل طلبك",
          step2: "يتواصل معك فريق المبيعات لتأكيد التوفر والسعر",
          step3: "نرتّب معك تفاصيل الطلب والاستلام",
        },
        whatsappTitle: "تفضّل الطلب المباشر؟",
        whatsappButton: "اطلب عبر واتساب",
        whatsappText: "مرحباً، أرغب بالاستفسار عن نبتة وطلبها من جرينلانديا.",
        formTitle: "أرسل طلبك",
        fields: {
          name: "الاسم الكامل",
          phone: "رقم التواصل",
          email: "البريد الإلكتروني (اختياري)",
          message: "اكتب اسم النبتة أو تفاصيل طلبك",
        },
        errors: {
          required: "هذا الحقل مطلوب",
          nameShort: "الاسم قصير جداً",
          phoneInvalid: "أدخل رقم تواصل صحيح",
          emailInvalid: "أدخل بريداً إلكترونياً صحيحاً",
          messageShort: "اكتب تفاصيل أكثر (على الأقل {{min}} أحرف)",
        },
        submit: "إرسال الطلب",
        sending: "جاري الإرسال...",
        submitError: "تعذّر إرسال الطلب، حاول مرة أخرى.",
        success: {
          title: "تم إرسال طلبك بنجاح!",
          message:
            "شكراً لتواصلك معنا. سيقوم فريق المبيعات بمراجعة طلبك والتواصل معك في أقرب وقت ممكن.",
        },
      },
    },
  },
  en: {
    translation: {
      brandName: "Greenlandia",
      searchPlaceholder: "Search for your favorite plant...",
      addToCart: "Add to Cart",
      addedToCart: "In Cart",
      cartTitle: "Shopping Cart",
      favoritesTitle: "Favorites",
      emptyCart: "Your cart is currently empty",
      emptyFavorites: "No favorite items yet",
      noResults: "No products match your search",
      total: "Total:",
      checkoutWhatsApp: "Send Order via WhatsApp",
      customerInfo: "Shipping Information",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      address: "Address / City",
      confirmOrder: "Confirm & Send Order",
      close: "Close",
      currency: "USD",

      home: {
        hero: {
          badge: "Natural plants for every corner of your home",
          title: "Bring Your Home to Life",
          subtitle:
            "Explore our collection of indoor plants, succulents and trees, or tell us which plant you're looking for.",
          shopNow: "Shop Now",
          orderNow: "Request a Plant",
        },
        products: {
          title: "Our Plants",
          subtitle: "A curated collection for homes and offices",
          seeMore: "See More",
        },
        features: {
          title: "Why Greenlandia?",
          subtitle:
            "Everything you need to start your plant journey, in one place",
          items: {
            quality: {
              title: "Carefully Selected Plants",
              text: "We choose our plants with care so they arrive in good condition and ready to grow.",
            },
            care: {
              title: "Care Guidance",
              text: "Simple tips on watering and light to keep your plants healthy.",
            },
            packaging: {
              title: "Safe Packaging",
              text: "We pack plants carefully so they reach you undamaged.",
            },
            whatsapp: {
              title: "Quick Ordering on WhatsApp",
              text: "Message us directly and place your order in minutes, no hassle.",
            },
            prices: {
              title: "Clear Prices",
              text: "Every plant has a listed price, with no surprises when you order.",
            },
            custom: {
              title: "Plants on Request",
              text: "Can't find what you're after? Tell us and we'll help you find it.",
            },
          },
        },
      },

      productsPage: {
        title: "All Plants",
        subtitle:
          "Browse our full collection or search for your favorite plant",
      },

      about: {
        title: "About Us",
        subtitle:
          "Plants that bring your home to life, and a team that cares about every detail.",
        story: {
          title: "Our Story",
          p1: "Greenlandia started with a simple idea: every home and office deserves a green corner that adds life and calm.",
          p2: "We choose our plants with care, share tips to look after them, and stay in touch until your plant grows the way you love.",
          points: {
            point1: "Indoor plants, succulents and ornamental trees",
            point2: "Simple care tips for every plant",
            point3: "Easy ordering via WhatsApp or the request form",
          },
        },
        pillars: {
          mission: {
            title: "Our Mission",
            text: "To bring nature closer to your home with carefully chosen plants and simple, clear service.",
          },
          vision: {
            title: "Our Vision",
            text: "To be your first stop for houseplants, where you find what suits your taste and space.",
          },
          values: {
            title: "Our Values",
            text: "Quality, honesty in descriptions and prices, and care for every customer.",
          },
        },
        cta: {
          title: "Ready to start your green journey?",
          text: "Browse our plants or contact us and we'll help you pick the best fit for your space.",
          products: "Browse Plants",
          contact: "Contact Us",
        },
      },

      contact: {
        title: "Contact Us",
        subtitle:
          "We'd love to hear from you. Choose the way that suits you best.",
        phone: { label: "Call Us", action: "Call Now" },
        whatsapp: { label: "WhatsApp", action: "Start Chat" },
        email: { label: "Email", action: "Send a Message" },
        address: {
          label: "Address",
          value: "Gardens Street, Palm District",
          action: "Open Map",
        },
        hours: {
          label: "Working Hours",
          value: "Daily, 9:00 AM – 9:00 PM",
        },
        formTitle: "Send Us a Message",
        formSubtitle: "Write to us and our team will get back to you shortly.",
      },

      footer: {
        description:
          "A plant shop that cares about your plants arriving in good condition, with simple tips to look after them.",
        quickLinks: "Quick Links",
        contactTitle: "Get in Touch",
        links: {
          home: "Home",
          products: "Products",
          about: "About",
          contact: "Contact",
        },
        backToTop: "Back to top",
        rights: "© {{year}} {{brand}}. All rights reserved.",
      },

      request: {
        title: "Can't Find the Plant You Want?",
        subtitle:
          "Tell us what you need and our team will get back to you shortly.",
        steps: {
          step1: "Write the plant name or your request details",
          step2:
            "Our sales team contacts you to confirm availability and price",
          step3: "We arrange the order details and pickup with you",
        },
        whatsappTitle: "Prefer ordering directly?",
        whatsappButton: "Order via WhatsApp",
        whatsappText:
          "Hello, I'd like to ask about a plant and order it from Greenlandia.",
        formTitle: "Send Your Request",
        fields: {
          name: "Full name",
          phone: "Phone number",
          email: "Email address (optional)",
          message: "Plant name or request details",
        },
        errors: {
          required: "This field is required",
          nameShort: "Name is too short",
          phoneInvalid: "Enter a valid phone number",
          emailInvalid: "Enter a valid email address",
          messageShort: "Please add more details (at least {{min}} characters)",
        },
        submit: "Send Request",
        sending: "Sending...",
        submitError: "We couldn't send your request. Please try again.",
        success: {
          title: "Request Sent Successfully!",
          message:
            "Thank you for reaching out. Our sales team will review your request and get in touch with you soon.",
        },
      },
    },
  },
};

const savedLang = localStorage.getItem("appLang") || "ar";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
