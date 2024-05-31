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
  name: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  reviews: number;
  sore_num: number;

  reviewsList: {
    id: number;
    author: string;
    comment: string;
    stars: number;
  }[];

  price_history: {
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

export const products = [
  {
    id: 1,
    name: "NUTRIBULLET PRO 900W",
    price: 19500,
    category: "бела техника",
    brand: "LE GRAND BIKES",
    image: "1",
    reviews: 4,
    sore_num: 4,
    reviewsList: [
      {
        id: 0,
        author: "Martin",
        comment: "Very good",
        stars: 4,
      },
      {
        id: 1,
        author: "Joshua",
        comment: "Okay",
        stars: 3,
      },
      {
        id: 2,
        author: "Davis",
        comment: "Have seen better",
        stars: 2,
      },
      {
        id: 3,
        author: "Jordan",
        comment: "Terrible",
        stars: 1,
      },
    ],
    price_history: [
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
    ],
  },
  {
    name: "Име на продукт",
    id: 2,
    price: 19500,
    category: "бела техника",
    brand: "LE GRAND BIKES",
    image: "2",
    reviews: 4,
    sore_num: 4,
    reviewsList: [
      {
        id: 0,
        author: "Martin",
        comment: "Very good",
        stars: 4,
      },
      {
        id: 1,
        author: "Joshua",
        comment: "Okay",
        stars: 3,
      },
      {
        id: 2,
        author: "Davis",
        comment: "Have seen better",
        stars: 2,
      },
      {
        id: 3,
        author: "Jordan",
        comment: "Terrible",
        stars: 1,
      },
    ],
    price_history: [
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
    ],
  },
  {
    name: "Име на продукт",
    id: 3,
    price: 19500,
    category: "бела техника",
    brand: "LE GRAND BIKES",
    image: "3",
    reviews: 4,
    sore_num: 4,
    reviewsList: [
      {
        id: 0,
        author: "Martin",
        comment: "Very good",
        stars: 4,
      },
      {
        id: 1,
        author: "Joshua",
        comment: "Okay",
        stars: 3,
      },
      {
        id: 2,
        author: "Davis",
        comment: "Have seen better",
        stars: 2,
      },
      {
        id: 3,
        author: "Jordan",
        comment: "Terrible",
        stars: 1,
      },
    ],
    price_history: [
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
    ],
  },
  {
    name: "Име на продукт",
    price: 19500,
    id: 4,
    category: "облека",
    brand: "LE GRAND BIKES",
    image: "4",
    reviews: 4,
    sore_num: 4,
    reviewsList: [
      {
        id: 0,
        author: "Martin",
        comment: "Very good",
        stars: 4,
      },
      {
        id: 1,
        author: "Joshua",
        comment: "Okay",
        stars: 3,
      },
      {
        id: 2,
        author: "Davis",
        comment: "Have seen better",
        stars: 2,
      },
      {
        id: 3,
        author: "Jordan",
        comment: "Terrible",
        stars: 1,
      },
    ],
    price_history: [
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
    ],
  },
  {
    name: "Име на продукт",
    id: 5,
    price: 19500,
    category: "Blenders",
    brand: "LE GRAND BIKES",
    image: "5",
    reviews: 4,
    sore_num: 4,
    reviewsList: [
      {
        id: 0,
        author: "Martin",
        comment: "Very good",
        stars: 4,
      },
      {
        id: 1,
        author: "Joshua",
        comment: "Okay",
        stars: 3,
      },
      {
        id: 2,
        author: "Davis",
        comment: "Have seen better",
        stars: 2,
      },
      {
        id: 3,
        author: "Jordan",
        comment: "Terrible",
        stars: 1,
      },
    ],
    price_history: [
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
    ],
  },
  {
    name: "Име на продукт",
    id: 6,
    price: 19500,
    category: "Blenders",
    brand: "LE GRAND BIKES",
    image: "6",
    reviews: 4,
    sore_num: 4,
    reviewsList: [
      {
        id: 0,
        author: "Martin",
        comment: "Very good",
        stars: 4,
      },
      {
        id: 1,
        author: "Joshua",
        comment: "Okay",
        stars: 3,
      },
      {
        id: 2,
        author: "Davis",
        comment: "Have seen better",
        stars: 2,
      },
      {
        id: 3,
        author: "Jordan",
        comment: "Terrible",
        stars: 1,
      },
    ],
    price_history: [
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
      {
        price: 0,
        month: "Martin",
      },
    ],
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
