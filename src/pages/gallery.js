import { useState } from 'react';
import Layout from '../components/Layout';
import ShoppingCart from '../components/ShoppingCart';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Spider Plant',
    price: 24.99,
    description: 'Easy to care for, air-purifying spider plant. Perfect for hanging baskets.',
    details: 'Size: 6" pot | Care: Moderate light | Water: Weekly',
    image: '/Client1_SpiderPlant.png',
    category: 'indoor',
    stock: 15,
  },
  {
    id: 2,
    name: 'String of Pearls',
    price: 29.99,
    description: 'Elegant trailing succulent with pearl-like leaves. Great for hanging planters.',
    details: 'Size: 4" pot | Care: Bright light | Water: When dry',
    image: '/Client1_StringofPearls.png',
    category: 'indoor',
    stock: 8,
  },
  {
    id: 3,
    name: 'Aloe Plant',
    price: 19.99,
    description: 'Medicinal aloe vera plant. Low maintenance and great for sunny windowsills.',
    details: 'Size: 5" pot | Care: Bright light | Water: Bi-weekly',
    image: '/Client1_AloePlant.png',
    category: 'indoor',
    stock: 20,
  },
  {
    id: 4,
    name: 'Maple Tree',
    price: 89.99,
    description: 'Beautiful maple tree sapling. Perfect for adding fall colors to your yard.',
    details: 'Height: 3-4 ft | Spread: 2-3 ft | Full sun to partial shade',
    image: '/Client1_MapleTree.png',
    category: 'trees',
    stock: 5,
  },
  {
    id: 5,
    name: 'Birch Tree',
    price: 79.99,
    description: 'Elegant birch tree sapling. Known for its distinctive bark and graceful form.',
    details: 'Height: 4-5 ft | Spread: 2-3 ft | Full sun',
    image: '/Client1_BirchTree.png',
    category: 'trees',
    stock: 7,
  },
  {
    id: 6,
    name: 'Apple Tree',
    price: 99.99,
    description: 'Fruit-bearing apple tree sapling. Grow your own organic apples!',
    details: 'Height: 3-4 ft | Type: Semi-dwarf | Full sun',
    image: '/Client1_AppleTree.png',
    category: 'trees',
    stock: 10,
  },
  {
    id: 7,
    name: 'Watering Can',
    price: 34.99,
    description: 'Durable metal watering can with comfortable grip. Perfect for indoor and outdoor use.',
    details: 'Capacity: 2 gallons | Material: Galvanized steel',
    image: '/Client1_WateringCan.png',
    category: 'supplies',
    stock: 25,
  },
  {
    id: 8,
    name: 'Bird House',
    price: 44.99,
    description: 'Charming wooden bird house. Attract beautiful birds to your garden.',
    details: 'Size: 8"x8"x10" | Material: Cedar wood | Weather-resistant',
    image: '/Client1_BirdHouse.png',
    category: 'supplies',
    stock: 12,
  },
  {
    id: 9,
    name: 'Potting Soil',
    price: 19.99,
    description: 'Premium potting soil blend. Perfect for indoor and outdoor plants.',
    details: 'Size: 20 quart bag | Organic ingredients | pH balanced',
    image: '/Client1_PottingSoil.png',
    category: 'supplies',
    stock: 30,
  },
];

export default function Gallery() {
  const { addToCart, toggleCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Item added to cart!');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-greenFont">Our Garden Collection</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full transition-colors text-white ${
                selectedCategory === 'all'
                  ? 'bg-oliveGreen'
                  : 'bg-barkBrown/70 text-greenFont hover:bg-oliveGreen/60'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('indoor')}
              className={`px-4 py-2 rounded-full transition-colors text-white ${
                selectedCategory === 'indoor'
                  ? 'bg-oliveGreen'
                  : 'bg-oliveGreen/60 text-greenFont hover:bg-oliveGreen/80'
              }`}
            >
              Indoor Plants
            </button>
            <button
              onClick={() => setSelectedCategory('trees')}
              className={`px-4 py-2 rounded-full transition-colors text-white ${
                selectedCategory === 'trees'
                  ? 'bg-oliveGreen'
                  : 'bg-oliveGreen/60 text-greenFont hover:bg-oliveGreen/80'
              }`}
            >
              Trees
            </button>
            <button
              onClick={() => setSelectedCategory('supplies')}
              className={`px-4 py-2 rounded-full transition-colors text-white ${
                selectedCategory === 'supplies'
                  ? 'bg-oliveGreen'
                  : 'bg-oliveGreen/60 text-greenFont hover:bg-oliveGreen/80'
              }`}
            >
              Supplies
            </button>
          </div>
        </div>

        <button
          onClick={toggleCart}
          className="fixed top-4 right-4 z-10 bg-autumnLeaf text-white px-6 py-2 rounded-full shadow-lg hover:bg-autumnLeaf/90 transition-colors"
        >
          View Cart
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 flex items-center justify-center bg-rivuletBeige/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain p-4 mix-blend-multiply"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-greenFont">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-gray-500 mb-4">{product.details}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-oliveGreen">${product.price}</span>
                    <p className="text-sm text-gray-500 mt-1">Stock: {product.stock} available</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-oliveGreen text-white px-4 py-2 rounded-full hover:bg-oliveGreen/90 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ShoppingCart />
    </Layout>
  );
} 