const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 3.5,
    numReviews: 12,
  },
  {
    "name": "Logitech MX Master 3 Wireless Mouse",
    "image": "https://images.unsplash.com/photo-1559526323-5f0899b4e57f",
    "description": "Advanced ergonomic design, ultrafast magspeed scrolling, and 4000 DPI precision sensor make it the ultimate mouse for power users.",
    "brand": "Logitech",
    "category": "Electronics",
    "price": 99.99,
    "countInStock": 20,
    "rating": 4.7,
    "numReviews": 32
  },
  {
    "name": "Samsung Odyssey G9 Curved Gaming Monitor",
    "image": "https://images.unsplash.com/photo-1601043268471-372ec8a2649e",
    "description": "49-inch super ultra-wide dual QHD curved gaming monitor with 240Hz refresh rate, 1ms response time, and HDR1000 support for immersive gaming experience.",
    "brand": "Samsung",
    "category": "Electronics",
    "price": 1499.99,
    "countInStock": 10,
    "rating": 4.9,
    "numReviews": 45
  },
  {
    "name": "Apple MacBook Pro 16-inch",
    "image": "https://images.unsplash.com/photo-1593642532442-59522f3cabb4",
    "description": "16-inch Retina display, up to 64GB RAM, up to 8TB SSD storage, Intel Core i9 processor, and AMD Radeon Pro 5000M graphics for professionals and power users.",
    "brand": "Apple",
    "category": "Electronics",
    "price": 2399.99,
    "countInStock": 15,
    "rating": 4.8,
    "numReviews": 60
  },
  {
    "name": "Sony PlayStation 5",
    "image": "https://images.unsplash.com/photo-1605633499872-912a6a39420f",
    "description": "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D audio, and an all-new generation of incredible PlayStation games.",
    "brand": "Sony",
    "category": "Electronics",
    "price": 499.99,
    "countInStock": 25,
    "rating": 4.6,
    "numReviews": 75
  },
  {
    "name": "Dell XPS 13 Laptop",
    "image": "https://images.unsplash.com/photo-1617254083607-123f593f1d57",
    "description": "13.4-inch FHD InfinityEdge display, 11th Gen Intel Core processors, up to 32GB RAM, and up to 2TB PCIe NVMe SSD storage for high-performance computing in a compact design.",
    "brand": "Dell",
    "category": "Electronics",
    "price": 1199.99,
    "countInStock": 30,
    "rating": 4.7,
    "numReviews": 55
  },
  {
    "name": "Canon EOS R5 Mirrorless Camera",
    "image": "https://images.unsplash.com/photo-1594300820218-b536995a524c",
    "description": "45MP full-frame CMOS sensor, 8K RAW video recording, 5-axis in-body image stabilization, and Dual Pixel CMOS AF II for unmatched performance in both stills and video.",
    "brand": "Canon",
    "category": "Electronics",
    "price": 3899.99,
    "countInStock": 8,
    "rating": 4.9,
    "numReviews": 42
  },
  {
    "name": "Razer BlackWidow Elite Mechanical Gaming Keyboard",
    "image": "https://images.unsplash.com/photo-1602566329992-f48d90576a75",
    "description": "Razer Mechanical Switches, customizable Chroma RGB lighting, ergonomic wrist rest, and dedicated media controls make it the ultimate gaming keyboard for competitive gamers.",
    "brand": "Razer",
    "category": "Electronics",
    "price": 169.99,
    "countInStock": 18,
    "rating": 4.5,
    "numReviews": 38
  },
  {
    "name": "LG C1 OLED 4K TV",
    "image": "https://images.unsplash.com/photo-1591519642702-155e4a8fa9e0",
    "description": "Self-lit OLED technology delivers perfect black and infinite contrast, α9 Gen4 AI Processor 4K provides stunning picture quality, and webOS smart platform offers a seamless user experience.",
    "brand": "LG",
    "category": "Electronics",
    "price": 1799.99,
    "countInStock": 12,
    "rating": 4.8,
    "numReviews": 50
  },
  {
    "name": "Corsair Void RGB Elite Wireless Gaming Headset",
    "image": "https://images.unsplash.com/photo-1603403500221-5cb4649d3457",
    "description": "Custom-tuned 50mm neodymium audio drivers, omnidirectional microphone with flip-to-mute function, and durable construction make it the perfect gaming headset for immersive audio experience.",
    "brand": "Corsair",
    "category": "Electronics",
    "price": 99.99,
    "countInStock": 22,
    "rating": 4.6,
    "numReviews": 28
  },
  {
    "name": "GoPro HERO10 Black Action Camera",
    "image": "https://images.unsplash.com/photo-1621886121615-9c124a2fa97b",
    "description": "5.3K video recording, 23MP photos, HyperSmooth 4.0 stabilization, TimeWarp 4.0, and LiveBurst for capturing stunning moments with incredible clarity and smoothness.",
    "brand": "GoPro",
    "category": "Electronics",
    "price": 499.99,
    "countInStock": 15,
    "rating": 4.7,
    "numReviews": 35
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

export default products
