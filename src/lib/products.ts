import { Product, ProductCategory } from "./types";

export const CATEGORIES: {
  value: ProductCategory;
  label: string;
  icon: string;
}[] = [
  { value: "cemento-hormigon", label: "Cemento y Hormigón", icon: "🏗️" },
  { value: "ladrillos-bloques", label: "Ladrillos y Bloques", icon: "🧱" },
  {
    value: "herramientas-manuales",
    label: "Herramientas Manuales",
    icon: "🔨",
  },
  {
    value: "herramientas-electricas",
    label: "Herramientas Eléctricas",
    icon: "⚡",
  },
  {
    value: "pinturas-revestimientos",
    label: "Pinturas y Revestimientos",
    icon: "🎨",
  },
  { value: "tuberias-plomeria", label: "Tuberías y Plomería", icon: "🚿" },
  { value: "electricidad", label: "Electricidad", icon: "💡" },
  { value: "ferreteria", label: "Ferretería", icon: "🔩" },
  { value: "techos-cubiertas", label: "Techos y Cubiertas", icon: "🏠" },
  { value: "pisos-ceramicos", label: "Pisos y Cerámicos", icon: "⬜" },
];

export const BRANDS = [
  "CEMEX",
  "Holcim",
  "DeWalt",
  "Bosch",
  "Makita",
  "Stanley",
  "Black & Decker",
  "Sherwin Williams",
  "Comex",
  "Tigre",
  "Pavco",
  "Corona",
  "FV",
  "Schneider",
  "Philips",
  "Legrand",
  "Eternit",
  "Sodimac",
];

export const PRODUCTS: Product[] = [
  // Cemento y Hormigón
  {
    id: "1",
    name: "Cemento Portland Tipo I - 50kg",
    description:
      "Cemento de alta calidad para construcción general, ideal para cimientos, columnas y losas.",
    price: 25.9,
    image:
      "https://promart.vteximg.com.br/arquivos/ids/7133522-1000-1000/22662.jpg?v=638228745030330000",
    category: "cemento-hormigon",
    brand: "CEMEX",
    inStock: true,
    stockQuantity: 150,
    features: ["Alta resistencia", "Fraguado rápido", "Ideal para estructuras"],
    specifications: {
      Peso: "50kg",
      Tipo: "Portland I",
      Resistencia: "350 kg/cm²",
    },
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    name: "Hormigón Premezclado H20",
    description:
      "Hormigón premezclado de 20 MPa, listo para usar en obras residenciales.",
    price: 85.0,
    image:
      "https://chilemat.vtexassets.com/arquivos/ids/251235/image-f73de40e0807453897619e50e0e139ff.jpg?v=638497356677870000",
    category: "cemento-hormigon",
    brand: "Holcim",
    inStock: true,
    stockQuantity: 25,
    features: [
      "Listo para usar",
      "Consistencia garantizada",
      "Control de calidad",
    ],
    specifications: {
      Resistencia: "20 MPa",
      Volumen: "1 m³",
      "Tiempo de trabajo": "90 minutos",
    },
    rating: 4.6,
    reviewCount: 89,
  },

  // Ladrillos y Bloques
  {
    id: "3",
    name: "Ladrillo Común 6x12x24cm",
    description:
      "Ladrillo cerámico común para mampostería, excelente aislación térmica.",
    price: 0.45,
    image:
      "https://www.ferbanz.com/wp-content/uploads/2020/03/pandereta-con-raya-lark-300x300.jpg",
    category: "ladrillos-bloques",
    brand: "Corona",
    inStock: true,
    stockQuantity: 5000,
    features: ["Resistente", "Buen aislante", "Fácil manipulación"],
    specifications: {
      Dimensiones: "6x12x24 cm",
      Material: "Cerámico",
      Resistencia: "150 kg/cm²",
    },
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "4",
    name: "Bloque de Hormigón 15x20x40cm",
    description:
      "Bloque hueco de hormigón para construcción de muros portantes y no portantes.",
    price: 2.8,
    image: "https://cdn.homedepot.com.mx/productos/790547/790547-za3.jpg",
    category: "ladrillos-bloques",
    brand: "CEMEX",
    inStock: true,
    stockQuantity: 800,
    features: ["Liviano", "Alta resistencia", "Hueco para instalaciones"],
    specifications: {
      Dimensiones: "15x20x40 cm",
      Peso: "18 kg",
      Resistencia: "4 MPa",
    },
    rating: 4.7,
    reviewCount: 156,
  },

  // Herramientas Manuales
  {
    id: "5",
    name: "Martillo de Carpintero 16oz",
    description:
      "Martillo profesional con mango de fibra de vidrio, ideal para carpintería y construcción.",
    price: 18.5,
    originalPrice: 22.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mV6IWHaBegvBO_-khGufdbBaHHejFHE_kQ&s",
    category: "herramientas-manuales",
    brand: "Stanley",
    inStock: true,
    stockQuantity: 45,
    features: ["Mango ergonómico", "Cabeza balanceada", "Anti-vibración"],
    specifications: {
      Peso: "16 oz (450g)",
      Longitud: "33 cm",
      "Material mango": "Fibra de vidrio",
    },
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "6",
    name: "Nivel de Burbuja 60cm",
    description:
      "Nivel profesional de aluminio con 3 burbujas para trabajos de precisión.",
    price: 24.9,
    image:
      "https://tiendatotalaruba.com/wp-content/uploads/2022/06/Nivel-De-Burbuja-De-30-Cm.-Espesor-Del-Alumi.jpg",
    category: "herramientas-manuales",
    brand: "Stanley",
    inStock: true,
    stockQuantity: 30,
    features: ["Aluminio resistente", "3 burbujas", "Precisión 0.5mm/m"],
    specifications: {
      Longitud: "60 cm",
      Material: "Aluminio",
      Precisión: "0.5 mm/m",
    },
    rating: 4.7,
    reviewCount: 98,
  },

  // Herramientas Eléctricas
  {
    id: "7",
    name: "Taladro Percutor 20V Inalámbrico",
    description:
      "Taladro percutor inalámbrico profesional con batería de litio y 2 velocidades.",
    price: 145.0,
    originalPrice: 180.0,
    image: "https://www.vultec.pe/wp-content/uploads/2023/04/PT000039.jpg",
    category: "herramientas-electricas",
    brand: "DeWalt",
    inStock: true,
    stockQuantity: 12,
    features: [
      "Batería 20V",
      "2 velocidades",
      "Mandril 13mm",
      "LED incorporado",
    ],
    specifications: {
      Voltaje: "20V",
      Mandril: "13mm",
      Velocidades: "2",
      Torque: "65 Nm",
    },
    rating: 4.8,
    reviewCount: 145,
  },
  {
    id: "8",
    name: "Amoladora Angular 115mm 850W",
    description:
      "Amoladora angular compacta para corte y desbaste en metal y mampostería.",
    price: 89.9,
    image:
      "https://dojiw2m9tvv09.cloudfront.net/79550/product/don0010-th3o5aa-231104905297-196480.jpeg",
    category: "herramientas-electricas",
    brand: "Bosch",
    inStock: true,
    stockQuantity: 18,
    features: [
      "Motor 850W",
      "Disco 115mm",
      "Protector ajustable",
      "Arranque suave",
    ],
    specifications: {
      Potencia: "850W",
      Disco: "115mm",
      Velocidad: "11.000 rpm",
      Peso: "1.8 kg",
    },
    rating: 4.6,
    reviewCount: 87,
  },

  // Pinturas y Revestimientos
  {
    id: "9",
    name: "Pintura Látex Interior Blanco 20L",
    description:
      "Pintura látex lavable para interiores, excelente cubrimiento y durabilidad.",
    price: 68.0,
    image: "https://cdn.homedepot.com.mx/productos/121069/121069-z.jpg",
    category: "pinturas-revestimientos",
    brand: "Sherwin Williams",
    inStock: true,
    stockQuantity: 35,
    features: ["Lavable", "Secado rápido", "Sin olor", "Fácil aplicación"],
    specifications: {
      Contenido: "20 litros",
      Rendimiento: "12-14 m²/L",
      Secado: "2 horas",
      Repintado: "4 horas",
    },
    rating: 4.5,
    reviewCount: 112,
  },

  // Tuberías y Plomería
  {
    id: "10",
    name: "Tubo PVC 110mm x 6m",
    description:
      "Tubo PVC para desagües, alta resistencia y fácil instalación.",
    price: 12.5,
    image: "https://www.sodimac.cl/static/images/Product/95862.png",
    category: "tuberias-plomeria",
    brand: "Tigre",
    inStock: true,
    stockQuantity: 80,
    features: ["Resistente a químicos", "Fácil corte", "Unión hermética"],
    specifications: {
      Diámetro: "110mm",
      Longitud: "6m",
      Presión: "0.63 MPa",
      Material: "PVC",
    },
    rating: 4.4,
    reviewCount: 76,
  },

  // Electricidad
  {
    id: "11",
    name: "Cable THW 12 AWG - 100m",
    description:
      "Cable eléctrico THW calibre 12 para instalaciones residenciales e industriales.",
    price: 89.0,
    image:
      "https://www.indeco.com.pe/wp-content/uploads/2020/04/thw-12-awg-indeco.jpg",
    category: "electricidad",
    brand: "Condumex",
    inStock: true,
    stockQuantity: 25,
    features: ["Cobre 99.9%", "Aislamiento THWN", "Resistente al calor"],
    specifications: {
      Calibre: "12 AWG",
      Longitud: "100m",
      Temperatura: "90°C",
      Voltaje: "600V",
    },
    rating: 4.6,
    reviewCount: 54,
  },

  // Ferretería
  {
    id: "12",
    name: 'Tornillos Autorroscantes 6x1" (100 pcs)',
    description:
      "Tornillos autorroscantes galvanizados para fijación en metal y madera.",
    price: 8.9,
    image:
      "https://www.aceros-arequipa.com/wp-content/uploads/2023/04/tornillos-autorroscantes-galvanizados.jpg",
    category: "ferreteria",
    brand: "Hilti",
    inStock: true,
    stockQuantity: 120,
    features: ["Galvanizado", "Punta autorroscante", "Cabeza Phillips"],
    specifications: {
      Medida: '6x1"',
      Cantidad: "100 piezas",
      Material: "Acero galvanizado",
      "Tipo cabeza": "Phillips",
    },
    rating: 4.3,
    reviewCount: 89,
  },
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return PRODUCTS.filter((product) => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find((product) => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery),
  );
};

export const filterProducts = (filters: {
  category?: ProductCategory;
  priceRange?: [number, number];
  brand?: string;
  inStock?: boolean;
  search?: string;
}): Product[] => {
  let filtered = PRODUCTS;

  if (filters.category) {
    filtered = filtered.filter(
      (product) => product.category === filters.category,
    );
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(
      (product) => product.price >= min && product.price <= max,
    );
  }

  if (filters.brand) {
    filtered = filtered.filter((product) => product.brand === filters.brand);
  }

  if (filters.inStock) {
    filtered = filtered.filter((product) => product.inStock);
  }

  if (filters.search) {
    const lowercaseQuery = filters.search.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.brand.toLowerCase().includes(lowercaseQuery),
    );
  }

  return filtered;
};
