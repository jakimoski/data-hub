export type TSubCategories = {
  name: string;
  icon: string;
  childCategories: string[];
};

export type category = {
  name: string;
  icon: string;
  subCategories: TSubCategories[];
};
export type Product = {
  id: number;
  productName: string;
  store: string;
  regularPrice: number;
  discountedPrice: number;
  manufacturer: string;
  productUrl: string;
  imageUrl: string;
  inStock: number;
  productCode: number;
  categories: string[];

  reviews?: {
    id: number;
    author: string;
    comment: string;
    stars: number;
  }[];

  price_history?: {
    price: number;
    month: string;
  }[];
};

export const categories = [
  {
    name: "обувки",
    icon: "shoe.png",
    hoverIcon: "shoe-hover.png",
    subCategories: [
      {
        name: "Жени",
        icon: "1",
        childCategories: [],
      },
      {
        name: "Мажи",
        icon: "1",
        childCategories: [],
      },
      {
        name: "Момчиња",
        icon: "1",
        childCategories: [],
      },
      {
        name: "Девојчиња",
        icon: "1",
        childCategories: [],
      },
    ],
  },
  {
    name: "бела техника",
    icon: "apliance.png",
    hoverIcon: "aplianceHover.png",
    subCategories: [
      {
        name: "Ладилници",
        icon: "51",
        childCategories: [
          "Двокрилни ладилници",
          "Машини со предно полнење",
          "Ладилници со замрзнувач",
        ],
      },
      {
        name: "Апарати за домаќинство",
        icon: "26",
        childCategories: ["Кафемати", "Шејкери", "Блендери"],
      },
      {
        name: "Микробранови",
        icon: "52",
        childCategories: [
          "Електрични без грил",
          "Електрични со грил",
          "Механички со грил",
        ],
      },
      {
        name: "Клима уреди",
        icon: "53",
        childCategories: [
          "Инвертери",
          "Стандардни клима уреди",
          "Мобилни клима уреди",
        ],
      },
      {
        name: "Машини за садови",
        icon: "54",
        childCategories: ["Машини за садови 45цм", "Машини за садови 60цм"],
      },
      {
        name: "Вградлива техника",
        icon: "55",
        childCategories: [
          "Вградливи машини за садови",
          "Ладилници за вградуваење",
        ],
      },
      {
        name: "Шпорети",
        icon: "56",
        childCategories: [
          "Шпорети со електрични плотни",
          "Шпорети со керамички плотни",
        ],
      },
      {
        name: "Аспиратори",
        icon: "57",
        childCategories: ["Стандардни аспиратори", "Вградливи аспиратори"],
      },
      {
        name: "Замрзнувачи",
        icon: "58",
        childCategories: ["Хоризонтални замрзнуваши", "Вертикални замрзнувачи"],
      },
      {
        name: "Сушари за алишта",
        icon: "59",
        childCategories: [
          "Машини со горно полнење",
          "Машини со предно полнење",
        ],
      },
      {
        name: "Машини за перење",
        icon: "60",
        childCategories: [
          "Машини со горно полнење",
          "Машини со предно полнење",
        ],
      },
      {
        name: "Бојлери",
        icon: "61",
        childCategories: [
          "Машини со горно полнење",
          "Машини со предно полнење",
        ],
      },
    ],
  },

  {
    name: "игри и конзоли",
    icon: "gaming.png",
    hoverIcon: "gamingHover.png",
    subCategories: [
      {
        name: "Бојлери",
        icon: "1",
        childCategories: [
          "Машини со горно полнење",
          "Машини со предно полнење",
        ],
      },
    ],
  },
  {
    name: "облека",
    icon: "clothes.png",
    hoverIcon: "clothesHover.png",
    subCategories: [],
  },
  {
    name: "за деца",
    icon: "toys.png",
    hoverIcon: "toysHover.png",
    subCategories: [],
  },
  {
    name: "фотографија",
    icon: "camera.png",
    hoverIcon: "cameraHover.png",
    subCategories: [],
  },
  {
    name: "спорт",
    icon: "sport.png",
    hoverIcon: "sportHover.png",
    subCategories: [],
  },
];

export type Category = {
  name: string;
  icon: string;
  hoverIcon?: string;
  subCategories: {
    name: string;
    icon: string;
    childCategories: string[];
  }[];
};

export const products: Product[] = [
  {
    id: 1,
    productName: "Apple Magic Mouse 3 (2021)",
    store: "tehnomarket",
    regularPrice: 5499,
    discountedPrice: 0,
    manufacturer: "APPLE",
    productUrl:
      "https://tehnomarket.com.mk/product/29395679/apple-magic-mouse-3-2021",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/download67.jpg",
    inStock: 1,
    productCode: 29395679,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ТАСТАТУРИ",
      "ГЛУВЧИЊА",
      "ПЦ КАМЕРИ",
      "ГЛУВЧИЊА И ПОДЛОГИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Jane Doe",
        comment: "Smooth and precise.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 5499,
        month: "January",
      },
    ],
  },
  {
    id: 2,
    productName: "Mouse Deepcool Wireless MG510 Gaming RGB 19000dpi Black",
    store: "tehnomarket",
    regularPrice: 5499,
    discountedPrice: 4799,
    manufacturer: "DEEPCOOL",
    productUrl:
      "https://tehnomarket.com.mk/product/29395135/mouse-deepcool-wireless-mg510-gaming-rgb-19000dpi-black",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/13122022083557download11.jpg",
    inStock: 1,
    productCode: 29395135,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ТАСТАТУРИ",
      "ГЛУВЧИЊА",
      "ПЦ КАМЕРИ",
      "ГЛУВЧИЊА И ПОДЛОГИ",
    ],
    reviews: [
      {
        id: 1,
        author: "John Smith",
        comment: "Great for gaming!",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 5499,
        month: "March",
      },
      {
        price: 4799,
        month: "April",
      },
    ],
  },
  {
    id: 3,
    productName: "Mouse BenQ ZOWIE Gaming Gear EC1-B Large Black",
    store: "tehnomarket",
    regularPrice: 4999,
    discountedPrice: 3299,
    manufacturer: "BENQ",
    productUrl:
      "https://tehnomarket.com.mk/product/29389949/mouse-benq-zowie-gaming-gear-ec1-b-large-black",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/110920201005131.jpg",
    inStock: 1,
    productCode: 29389949,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ТАСТАТУРИ",
      "ГЛУВЧИЊА",
      "ПЦ КАМЕРИ",
      "ГЛУВЧИЊА И ПОДЛОГИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Alice Johnson",
        comment: "Good value for money.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 4999,
        month: "February",
      },
      {
        price: 3299,
        month: "April",
      },
    ],
  },
  {
    id: 4,
    productName:
      "RAZER DEATHADDER V2 MINI ULTRA-LIGHTWEIGHT ERGONOMIC OPTICAL GAMING MOUSE RGB CHROMA BLACK",
    store: "tehnomarket",
    regularPrice: 2699,
    discountedPrice: 2599,
    manufacturer: "RAZER",
    productUrl:
      "https://tehnomarket.com.mk/product/29390813/razer-deathadder-v2-mini-ultra-lightweight-ergonomic-optical-gaming-mouse-rgb-chroma-black",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/rz0103340100r3m1_1.jpg",
    inStock: 0,
    productCode: 29390813,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ТАСТАТУРИ",
      "ГЛУВЧИЊА",
      "ПЦ КАМЕРИ",
      "ГЛУВЧИЊА И ПОДЛОГИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Bob Brown",
        comment: "Excellent mouse, very lightweight.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 2699,
        month: "May",
      },
      {
        price: 2599,
        month: "June",
      },
    ],
  },
  {
    id: 5,
    productName:
      'Notebook Stand Platinet PLCP6FB up to 17.3"/6x Fan/2xUSB/Blue Led',
    store: "tehnomarket",
    regularPrice: 1799,
    discountedPrice: 1599,
    manufacturer: "PLATINET",
    productUrl:
      "https://tehnomarket.com.mk/product/29399950/notebook-stand-platinet-plcp6fb-up-to-1736x-fan2xusbblue-led",
    imageUrl: "/img/no_image.jpg",
    inStock: 1,
    productCode: 29399950,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ЛАПТОПИ И ДОДАТОЦИ",
      "ВЕНТИЛАЦИОНИ ПОДЛОГИ ЗА ЛАПТОПИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Jane Doe",
        comment: "Great cooling performance.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 1799,
        month: "January",
      },
      {
        price: 1599,
        month: "February",
      },
    ],
  },
  {
    id: 6,
    productName:
      'Notebook Stand/Cooler Deepcool Multi Core X6 up to 15.6" Metal Mesh Black',
    store: "tehnomarket",
    regularPrice: 1699,
    discountedPrice: 0,
    manufacturer: "DEEPCOOL",
    productUrl:
      "https://tehnomarket.com.mk/product/5005750/notebook-standcooler-deepcool-multi-core-x6-up-to-156-metal-mesh-black",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/03102023120653x6_p111-500x500.jpg",
    inStock: 1,
    productCode: 5005750,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ЛАПТОПИ И ДОДАТОЦИ",
      "ВЕНТИЛАЦИОНИ ПОДЛОГИ ЗА ЛАПТОПИ",
    ],
    reviews: [
      {
        id: 1,
        author: "John Smith",
        comment: "Solid build quality.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 1699,
        month: "March",
      },
    ],
  },
  {
    id: 7,
    productName:
      'Notebook Stand Platinet PLCP5FB up to 17.3"/5x Fan/2xUSB/Blue Led',
    store: "tehnomarket",
    regularPrice: 1599,
    discountedPrice: 1399,
    manufacturer: "PLATINET",
    productUrl:
      "https://tehnomarket.com.mk/product/29399949/notebook-stand-platinet-plcp5fb-up-to-1735x-fan2xusbblue-led",
    imageUrl: "/img/no_image.jpg",
    inStock: 1,
    productCode: 29399949,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ЛАПТОПИ И ДОДАТОЦИ",
      "ВЕНТИЛАЦИОНИ ПОДЛОГИ ЗА ЛАПТОПИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Alice Johnson",
        comment: "Quiet fans.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 1599,
        month: "January",
      },
      {
        price: 1399,
        month: "February",
      },
    ],
  },
  {
    id: 8,
    productName:
      'Notebook Stand/Cooler Genesis OXID 260 up to 17.3" Gaming LED Metal',
    store: "tehnomarket",
    regularPrice: 1499,
    discountedPrice: 0,
    manufacturer: "GENESIS",
    productUrl:
      "https://tehnomarket.com.mk/product/29400243/notebook-standcooler-genesis-oxid-260-up-to-173-gaming-led-metal",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/nhg2075.jpg",
    inStock: 1,
    productCode: 29400243,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ЛАПТОПИ И ДОДАТОЦИ",
      "ВЕНТИЛАЦИОНИ ПОДЛОГИ ЗА ЛАПТОПИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Bob Brown",
        comment: "Excellent for gaming laptops.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 1499,
        month: "April",
      },
    ],
  },
  {
    id: 9,
    productName:
      'NATEC GENESIS OXID 250 NOTEBOOK STAND UP TO 17.3" GAMING LED METAL',
    store: "tehnomarket",
    regularPrice: 1499,
    discountedPrice: 899,
    manufacturer: "NATEC",
    productUrl:
      "https://tehnomarket.com.mk/product/29288897/natec-genesis-oxid-250-notebook-stand-up-to-173-gaming-led-metal",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/nhg1144(1).jpg",
    inStock: 0,
    productCode: 29288897,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ЛАПТОПИ И ДОДАТОЦИ",
      "ВЕНТИЛАЦИОНИ ПОДЛОГИ ЗА ЛАПТОПИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Chris Green",
        comment: "Affordable and effective.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 1499,
        month: "May",
      },
      {
        price: 899,
        month: "June",
      },
    ],
  },
  {
    id: 10,
    productName:
      'SBOX WHITE SHARK ICE WIZARD NOTEBOOK STAND UP TO 17.3" 5xLED FANS',
    store: "tehnomarket",
    regularPrice: 1499,
    discountedPrice: 1299,
    manufacturer: "SBOX",
    productUrl:
      "https://tehnomarket.com.mk/product/29287563/sbox-white-shark-ice-wizard-notebook-stand-up-to-173-5xled-fans",
    imageUrl:
      "https://d3mrte3vpewnxc.cloudfront.net/img/products/full/thumbs/1__mg_8848web.jpg",
    inStock: 1,
    productCode: 29287563,
    categories: [
      "КОМПЈУТЕРИ И ГЕЈМИНГ",
      "ЛАПТОПИ И ДОДАТОЦИ",
      "ВЕНТИЛАЦИОНИ ПОДЛОГИ ЗА ЛАПТОПИ",
    ],
    reviews: [
      {
        id: 1,
        author: "Eve White",
        comment: "Cool design with LED fans.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 1499,
        month: "July",
      },
      {
        price: 1299,
        month: "August",
      },
    ],
  },
  {
    id: 11,
    productName: "Game Nintendo - Super Mario Odyssey",
    store: "anhoc",
    regularPrice: 3990,
    discountedPrice: 0,
    manufacturer: "Nintendo",
    productUrl:
      "https://www.anhoch.com/product/599266047/game-nintendo-super-mario-odyssey",
    imageUrl:
      "https://d1a68gwbwfmqto.cloudfront.net/img/products/full/thumbs/supermarioodyssey.jpg",
    inStock: 1,
    productCode: 599266047,
    categories: ["Игри"],
    reviews: [
      {
        id: 1,
        author: "Mario Fan",
        comment: "A must-have for every Switch owner.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 3990,
        month: "May",
      },
    ],
  },
  {
    id: 12,
    productName: "Game Nintendo - Fae Farm",
    store: "anhoc",
    regularPrice: 3980,
    discountedPrice: 0,
    manufacturer: "Other",
    productUrl:
      "https://www.anhoch.com/product/599880138/game-nintendo-fae-farm",
    imageUrl:
      "https://d1a68gwbwfmqto.cloudfront.net/img/products/full/thumbs/faefawrm-nsw-k150-k150.jpg",
    inStock: 1,
    productCode: 599880138,
    categories: ["Игри"],
    reviews: [
      {
        id: 1,
        author: "Farm Lover",
        comment: "Fun and relaxing farming game.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 3980,
        month: "June",
      },
    ],
  },
  {
    id: 13,
    productName: "Game PS4 - Street Fighter 6 Standard Edition",
    store: "anhoc",
    regularPrice: 3980,
    discountedPrice: 0,
    manufacturer: "Capcom",
    productUrl:
      "https://www.anhoch.com/product/599879305/game-ps4-street-fighter-6-standard-edition",
    imageUrl:
      "https://d1a68gwbwfmqto.cloudfront.net/img/products/full/thumbs/sf6-ps4.jpg",
    inStock: 1,
    productCode: 599879305,
    categories: ["Игри"],
    reviews: [
      {
        id: 1,
        author: "Fighter Fan",
        comment: "Great addition to the series.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 3980,
        month: "July",
      },
    ],
  },
  {
    id: 14,
    productName: "Game XBOX/XBSX - Dead Island 2 (Day One Edition)",
    store: "anhoc",
    regularPrice: 3980,
    discountedPrice: 0,
    manufacturer: "Deep Silver",
    productUrl:
      "https://www.anhoch.com/product/599879114/game-xboxxbsx-dead-island-2-day-one-edition",
    imageUrl:
      "https://d1a68gwbwfmqto.cloudfront.net/img/products/full/thumbs/xbx_di2-d1e_2d-box_pegi-en_png_jpgcopy-k150.jpg",
    inStock: 1,
    productCode: 599879114,
    categories: ["Игри"],
    reviews: [
      {
        id: 1,
        author: "Zombie Slayer",
        comment: "Awesome zombie game with great graphics.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 3980,
        month: "August",
      },
    ],
  },
  {
    id: 15,
    productName: "Game Nintendo - Animal Crossing: New Horizons",
    store: "anhoc",
    regularPrice: 3980,
    discountedPrice: 0,
    manufacturer: "Nintendo",
    productUrl:
      "https://www.anhoch.com/product/599267982/game-nintendo-animal-crossing-new-horizons",
    imageUrl:
      "https://d1a68gwbwfmqto.cloudfront.net/img/products/full/thumbs/crossing.jpg",
    inStock: 1,
    productCode: 599267982,
    categories: ["Игри"],
    reviews: [
      {
        id: 1,
        author: "Island Dweller",
        comment: "Perfect for relaxing and unwinding.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 3980,
        month: "September",
      },
    ],
  },
  {
    id: 16,
    productName: "Game PC - Cyberpunk 2077 Ultimate Edition (CIAB)",
    store: "anhoc",
    regularPrice: 3780,
    discountedPrice: 0,
    manufacturer: "CD Projekt Red",
    productUrl:
      "https://www.anhoch.com/product/599880992/game-pc-cyberpunk-2077-ultimate-edition-ciab",
    imageUrl:
      "https://d1a68gwbwfmqto.cloudfront.net/img/products/full/thumbs/5902367641702-k150.jpg",
    inStock: 1,
    productCode: 599880992,
    categories: ["Игри"],
    reviews: [
      {
        id: 1,
        author: "Cyberpunk Enthusiast",
        comment: "Fantastic open-world experience.",
        stars: 4,
      },
    ],
    price_history: [
      {
        price: 3780,
        month: "October",
      },
    ],
  },
  {
    id: 17,
    productName: "Game PS5 - Final Fantasy XVI",
    store: "anhoc",
    regularPrice: 3780,
    discountedPrice: 0,
    manufacturer: "Square Enix",
    productUrl:
      "https://www.anhoch.com/product/599879513/game-ps5-final-fantasy-xvi",
    imageUrl:
      "https://d1a68gwbwfmqto.cloudfront.net/img/products/full/thumbs/ffxvi-1.jpg",
    inStock: 1,
    productCode: 599879513,
    categories: ["Игри"],
    reviews: [
      {
        id: 1,
        author: "RPG Lover",
        comment: "Another epic adventure from Square Enix.",
        stars: 5,
      },
    ],
    price_history: [
      {
        price: 3780,
        month: "November",
      },
    ],
  },
  {
    id: 18,
    productName: "Нега на екран CANYON CCL12 Wipes for Plastic 100 pcs",
    store: "neptun",
    regularPrice: 199,
    discountedPrice: 0,
    manufacturer: "CANYON",
    productUrl:
      "https://www.neptun.mk/categories/Nega_na_ekrani/CANYON-CCL12-Wipes-for-Plastic-100-pcs",
    imageUrl: "https://www.neptun.mk/2023/04/13/екран.JPG",
    inStock: 1,
    productCode: 84100125,
    categories: ["Нега на екрани"],
  },
  {
    id: 19,
    productName:
      "Персонален компјутер EWE PC GAMER X921 i5-13400F/16GB/1TB SSD/RTX 4060 8GB",
    store: "neptun",
    regularPrice: 56999,
    discountedPrice: 53999,
    manufacturer: "EWE PC",
    productUrl:
      "https://www.neptun.mk/categories/GAMING_DESKTOP_KOMPJUTERI/EWE-PC-GAMER-X921-i5-13400F-16GB-1TB-SSD-RTX-4060-8GB",
    imageUrl:
      "https://www.neptun.mk/2024/04/08/RAC24441_979d324d-5e45-4ce7-b532-6fefb49a2935.jpg",
    inStock: 1,
    productCode: 84106086,
    categories: ["GAMING десктоп компјутери"],
  },
  {
    id: 20,
    productName:
      "Персонален компјутер EWE PC GAMER X3402 R5-5600X/16GB/1TB SSD/RX 7600 8GB",
    store: "neptun",
    regularPrice: 47999,
    discountedPrice: 45999,
    manufacturer: "EWE PC",
    productUrl:
      "https://www.neptun.mk/categories/GAMING_DESKTOP_KOMPJUTERI/EWE-PC-GAMER-X3402-R5-5600X-16GB-1TB-SSD-RX-7600-8GB",
    imageUrl:
      "https://www.neptun.mk/2024/01/11/X3402_b3ad38de-a892-4b72-8f15-9e3b21d778a1.jpg",
    inStock: 1,
    productCode: 84104587,
    categories: ["GAMING десктоп компјутери"],
  },
  {
    id: 21,
    productName: "PlayStation 5 PS5 Slim 1TB Blu-Ray Edition",
    store: "neptun",
    regularPrice: 33999,
    discountedPrice: 0,
    manufacturer: "Play Station",
    productUrl:
      "https://www.neptun.mk/categories/GAMING_KONZOLI/SONY-PlayStation-5-PS5-Slim-D-Chassis",
    imageUrl:
      "https://www.neptun.mk/2023/12/13/PS5CFI2000PR01sRGB_48afe0cc-9e50-49fc-b69a-e6ae8f8a4593.jpg",
    inStock: 1,
    productCode: 84103824,
    categories: ["GAMING Конзоли"],
  },
  {
    id: 22,
    productName: "PS5 Dualsense Wireless Controller – Cobalt Blue",
    store: "neptun",
    regularPrice: 4599,
    discountedPrice: 0,
    manufacturer: "Play Station",
    productUrl:
      "https://www.neptun.mk/categories/DODATOCI_ZA_KONZOLI/PS5-Dualsense-Wireless-Controller-Cobalt-Blue",
    imageUrl:
      "https://www.neptun.mk/2024/01/22/DualSense-CobaltBlue-Hero-1-new_a10303ec-32b0-4d92-bfc0-3653f4a5cfd9.webp",
    inStock: 1,
    productCode: 84104608,
    categories: ["Додатоци за конзоли"],
  },
  {
    id: 23,
    productName: "PS5 Dualsense Wireless Controller – Volcanic Red",
    store: "neptun",
    regularPrice: 4599,
    discountedPrice: 0,
    manufacturer: "Play Station",
    productUrl:
      "https://www.neptun.mk/categories/DODATOCI_ZA_KONZOLI/PS5-Dualsense-Wireless-Controller-Volcanic-Red",
    imageUrl:
      "https://www.neptun.mk/2024/01/22/DualSense_Wireless_Controller_Volcanic_Red01.jpg",
    inStock: 1,
    productCode: 84104607,
    categories: ["Додатоци за конзоли"],
  },
  {
    id: 24,
    productName: "PS5 Dualsense Wireless Controller",
    store: "neptun",
    regularPrice: 4299,
    discountedPrice: 0,
    manufacturer: "Play Station",
    productUrl:
      "https://www.neptun.mk/categories/DODATOCI_ZA_KONZOLI/PS5-Dualsense-Wireless-Controller",
    imageUrl:
      "https://www.neptun.mk/2021/12/29/playstation-5-dualsense-wireless-controller_a653a7c6-bceb-4e1a-97be-eb59f0a771ed.jpg",
    inStock: 1,
    productCode: 84093911,
    categories: ["Додатоци за конзоли"],
  },
  {
    id: 25,
    productName: "Wireless слушалки JBL QUANTUM 350 WL BLK",
    store: "neptun",
    regularPrice: 5999,
    discountedPrice: 0,
    manufacturer: "JBL",
    productUrl:
      "https://www.neptun.mk/categories/SLUSALKI_A/JBL-QUANTUM-350-WL-BLK",
    imageUrl:
      "https://www.neptun.mk/2021/11/12/61qhzib033S.ACSL1200_8c0f6005-6ff3-4779-ad70-1fa9c6ec6893.jpg",
    inStock: 1,
    productCode: 84093329,
    categories: ["СЛУШАЛКИ"],
  },
  {
    id: 26,
    productName: "BT слушалки SONY BT WH-CH720NL",
    store: "neptun",
    regularPrice: 5999,
    discountedPrice: 5499,
    manufacturer: "SONY",
    productUrl:
      "https://www.neptun.mk/categories/SLUSALKI_A/SONY-BT-WH-CH720NL",
    imageUrl:
      "https://www.neptun.mk/2023/05/24/whch720nl.ce7_032f0c9c-3b49-43d0-884d-9ca1d4c0b886.JPG",
    inStock: 1,
    productCode: 84100621,
    categories: ["СЛУШАЛКИ"],
  },
  {
    id: 27,
    productName: "Слушалки MOYE Timbre ANC BLK",
    store: "neptun",
    regularPrice: 3799,
    discountedPrice: 2999,
    manufacturer: "MOYE",
    productUrl:
      "https://www.neptun.mk/categories/SLUSALKI_A/MOYE-Timbre-ANC-BLK",
    imageUrl: "https://www.neptun.mk/2023/04/13/куфје_1.JPG",
    inStock: 1,
    productCode: 84100025,
    categories: ["СЛУШАЛКИ"],
  },
  {
    id: 28,
    productName: "SNOPY SN-XBK33 BATTY BT Headset with TF Card White",
    store: "neptun",
    regularPrice: 899,
    discountedPrice: 0,
    manufacturer: "SNOPY",
    productUrl:
      "https://www.neptun.mk/categories/SLUSALKI_A/SNOPY-SN-XBK33-BATTY-BT-Headset-with-TF-Card-White",
    imageUrl:
      "https://www.neptun.mk/2024/04/04/SN-XBK33BEYAZ00_be6b9663-bbf1-446f-9ae8-c3de9c4ccd91.jpg",
    inStock: 1,
    productCode: 84105579,
    categories: ["СЛУШАЛКИ"],
  },
  {
    id: 29,
    productName: "BT звучник SONY LSPX S3",
    store: "neptun",
    regularPrice: 19999,
    discountedPrice: 7995,
    manufacturer: "SONY",
    productUrl:
      "https://www.neptun.mk/categories/PORTABL_ZVUCNICI__DOKING/SONY-LSPX-S3",
    imageUrl:
      "https://www.neptun.mk/2022/06/23/17240773820446_a3502fee-f030-4266-a98b-262baca5059c.jpg",
    inStock: 1,
    productCode: 84096099,
    categories: ["ПОРТАБЛ ЗВУЧНИЦИ"],
  },
  {
    id: 30,
    productName: 'Држач за QLED SAMSUNG WMN5870XR/XC, 76"',
    store: "neptun",
    regularPrice: 10999,
    discountedPrice: 5495,
    manufacturer: "SAMSUNG",
    productUrl:
      "https://www.neptun.mk/categories/DRZACI_ZA_LCD_PDP/SAMSUNG-WMN5870XR-XC",
    imageUrl:
      "https://www.neptun.mk/2020/12/09/12_3a7933d2-9644-4e13-bcc4-c5d1a715a6c5.jpg",
    inStock: 1,
    productCode: 84087959,
    categories: ["ДРЖАЧИ ЗА ТЕЛЕВИЗОРИ"],
  },
  {
    id: 31,
    productName: "Држач MELICONI SlimStyle Plus 600 SR, 50-82''",
    store: "neptun",
    regularPrice: 3499,
    discountedPrice: 2799,
    manufacturer: "MELICONI",
    productUrl:
      "https://www.neptun.mk/categories/DRZACI_ZA_LCD_PDP/MELICONI-SlimStyle-Plus-600-SR",
    imageUrl:
      "https://www.neptun.mk/2019/08/21/2_b6b6be85-f03c-4799-a358-62d079bf5a4f.JPG",
    inStock: 1,
    productCode: 84081082,
    categories: ["ДРЖАЧИ ЗА ТЕЛЕВИЗОРИ"],
  },
  {
    id: 32,
    productName: "SUKO SAS + 2usb 2,1a polnac za mobilni bel",
    store: "neptun",
    regularPrice: 799,
    discountedPrice: 547,
    manufacturer: "SAS",
    productUrl:
      "https://www.neptun.mk/categories/KABLI_I_RAZDELNICI/SUKO-SAS---2usb-2,1a-polnac-za-mobilni-bel",
    imageUrl:
      "https://www.neptun.mk/2022/11/16/036126_0465fdfe-07ac-42a1-9717-4c4ee1ac9657.jpg",
    inStock: 1,
    productCode: 84080481,
    categories: ["КАБЛИ И РАЗДЕЛНИЦИ"],
  },
];
