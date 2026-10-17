const img = (name) => `/images/plants/${name}.webp`;

export const products = [
  {
    id: 1,
    nameAr: "نبتة البوتس",
    nameEn: "Devil's Ivy",
    descriptionAr:
      "نبتة متسلقة قوية بأوراق خضراء لامعة، سهلة العناية وتناسب الرفوف.",
    descriptionEn:
      "A hardy trailing plant with glossy green leaves, easy to care for and ideal for shelves.",
    price: 18,
    image: img("pothos"),
  },
  {
    id: 2,
    nameAr: "نبتة الألوفيرا",
    nameEn: "Aloe Vera",
    descriptionAr: "نبتة عصارية معروفة بجلّها المهدّئ، تتحمل الجفاف وقلة الري.",
    descriptionEn:
      "A succulent known for its soothing gel, tolerant of drought and infrequent watering.",
    price: 15,
    image: img("aloe-vera"),
  },
  {
    id: 3,
    nameAr: "نبتة الزاميا",
    nameEn: "ZZ Plant",
    descriptionAr: "تتحمل الإضاءة المنخفضة وقلة الري، مثالية للمكاتب والمنازل.",
    descriptionEn:
      "Extremely resilient, thrives in low light with minimal watering. Perfect for offices and homes.",
    price: 28,
    image: img("zz-plant"),
  },
  {
    id: 4,
    nameAr: "شجرة الفيكس ليراتا",
    nameEn: "Fiddle Leaf Fig",
    descriptionAr: "شجرة داخلية أنيقة بأوراق عريضة تضفي لمسة عصرية على المكان.",
    descriptionEn:
      "An elegant indoor tree with large, violin-shaped leaves that adds a modern touch.",
    price: 45,
    image: img("fiddle-leaf-fig"),
  },
  {
    id: 5,
    nameAr: "نبتة السانسيفيريا",
    nameEn: "Snake Plant",
    descriptionAr:
      "من أكثر النباتات الداخلية تحملاً، تعيش في مختلف ظروف الإضاءة وتحتاج ريّاً قليلاً.",
    descriptionEn:
      "One of the toughest houseplants, adapts to most light conditions and needs little water.",
    price: 22,
    image: img("snake-plant"),
  },
  {
    id: 6,
    nameAr: "زنبق السلام",
    nameEn: "Peace Lily",
    descriptionAr:
      "تتميز بأزهار بيضاء أنيقة وأوراق خضراء داكنة، وتزدهر في الإضاءة المعتدلة.",
    descriptionEn:
      "Known for elegant white blooms and deep green leaves, thrives in moderate light.",
    price: 26,
    image: img("peace-lily"),
  },
  {
    id: 7,
    nameAr: "بامبو الحظ",
    nameEn: "Lucky Bamboo",
    descriptionAr: "تنمو في الماء أو التربة وتضفي أجواء من الهدوء على المكان.",
    descriptionEn:
      "Grows in water or soil and brings a calm, minimal touch to any space.",
    price: 19,
    image: img("lucky-bamboo"),
  },
  {
    id: 8,
    nameAr: "اللبلاب الإنجليزي",
    nameEn: "English Ivy",
    descriptionAr:
      "نبتة متسلقة كلاسيكية بأوراق خضراء كثيفة، مناسبة للسلال المعلقة.",
    descriptionEn:
      "A classic climbing vine with dense green foliage, perfect for hanging baskets.",
    price: 20,
    image: img("english-ivy"),
  },
  {
    id: 9,
    nameAr: "صبار الكريسماس",
    nameEn: "Christmas Cactus",
    descriptionAr: "نبتة عصارية تزهر بألوان زاهية في فصل الشتاء.",
    descriptionEn:
      "A succulent that blooms with bright flowers during the winter months.",
    price: 24,
    image: img("christmas-cactus"),
  },
  {
    id: 10,
    nameAr: "نبتة الكالاتيا",
    nameEn: "Calathea",
    descriptionAr:
      "تشتهر بنقوش أوراقها الساحرة، وترفع أوراقها وتطويها مع حلول الليل.",
    descriptionEn:
      "Famous for its patterned leaves that fold upward as evening comes.",
    price: 32,
    image: img("calathea"),
  },
  {
    id: 11,
    nameAr: "نبتة الشيفليرا",
    nameEn: "Umbrella Tree",
    descriptionAr: "نبتة شجرية بأوراق لامعة تتوزع على شكل مظلة خضراء كثيفة.",
    descriptionEn:
      "A lush houseplant with glossy leaves arranged like a green umbrella.",
    price: 38,
    image: img("umbrella-tree"),
  },
  {
    id: 12,
    nameAr: "صبار البرميل الذهبي",
    nameEn: "Golden Barrel Cactus",
    descriptionAr: "صبار كروي الشكل بأشواك ذهبية لافتة، ويعيش لسنوات طويلة.",
    descriptionEn:
      "A striking round cactus with golden spines that lives for many years.",
    price: 16,
    image: img("golden-barrel-cactus"),
  },
  {
    id: 13,
    nameAr: "نبتة الأوركيد",
    nameEn: "Orchid",
    descriptionAr: "زهرة استوائية فاخرة تدوم أزهارها لأسابيع طويلة.",
    descriptionEn: "An elegant tropical flower whose blooms last for weeks.",
    price: 50,
    image: img("orchid"),
  },
  {
    id: 14,
    nameAr: "نبتة البيبروميا",
    nameEn: "Peperomia",
    descriptionAr: "نبتة صغيرة بأوراق سميكة لامعة، مناسبة للرفوف والمكاتب.",
    descriptionEn:
      "A compact plant with thick, glossy leaves, ideal for shelves and desks.",
    price: 17,
    image: img("peperomia"),
  },
  {
    id: 15,
    nameAr: "فيكس بنجامينا",
    nameEn: "Weeping Fig",
    descriptionAr:
      "شجرة أنيقة بأغصان متدلية وأوراق كثيفة تمنح المكان طابعاً طبيعياً.",
    descriptionEn:
      "A graceful indoor tree with arching branches and dense, leafy foliage.",
    price: 42,
    image: img("weeping-fig"),
  },
  {
    id: 16,
    nameAr: "نبتة اليوفوربيا",
    nameEn: "African Milk Tree",
    descriptionAr: "نبتة عصارية طويلة بسيقان مضلّعة تضيف لمسة هندسية للغرفة.",
    descriptionEn:
      "A tall succulent with ridged stems that adds a sculptural touch to any room.",
    price: 29,
    image: img("african-milk-tree"),
  },
  {
    id: 17,
    nameAr: "سرخس بوسطن",
    nameEn: "Boston Fern",
    descriptionAr:
      "سرخس كلاسيكي بأوراق ريشية كثيفة يحب الرطوبة والإضاءة غير المباشرة.",
    descriptionEn:
      "A lush fern with feathery fronds that loves humidity and indirect light.",
    price: 23,
    image: img("boston-fern"),
  },
  {
    id: 18,
    nameAr: "نبتة الأنثوريوم",
    nameEn: "Anthurium",
    descriptionAr: "تتميز بأزهار حمراء لامعة على شكل قلب تدوم طويلاً.",
    descriptionEn:
      "A showy plant with glossy, heart-shaped red blooms that last for weeks.",
    price: 35,
    image: img("anthurium"),
  },
  {
    id: 19,
    nameAr: "نبتة أذن الفيل",
    nameEn: "Elephant Ear",
    descriptionAr: "نبتة بأوراق ضخمة تمنح المكان طابعاً استوائياً لافتاً.",
    descriptionEn:
      "A dramatic plant with oversized tropical leaves that makes a bold statement.",
    price: 40,
    image: img("elephant-ear"),
  },
  {
    id: 20,
    nameAr: "صبار أذن الأرنب",
    nameEn: "Bunny Ears Cactus",
    descriptionAr:
      "صبار لطيف تشبه سيقانه المسطحة أذني الأرنب، ويُفضّل لمسه بحذر.",
    descriptionEn:
      "A charming cactus with flat pads shaped like bunny ears. Handle with care.",
    price: 14,
    image: img("bunny-ears-cactus"),
  },
];
