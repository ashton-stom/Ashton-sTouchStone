import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
  {
    title: 'Quality Products',
    description: 'Hand-picked items from trusted suppliers',
    icon: '🌟',
  },
  {
    title: 'Fast Shipping',
    description: 'Free delivery on orders over $50',
    icon: '🚚',
  },
  {
    title: '24/7 Support',
    description: 'Always here to help you',
    icon: '💬',
  },
];

const categories = [
  {
    name: 'Indoor Plants',
    description: 'Beautiful plants for your home',
    image: '/Client1_SpiderPlant.png',
    link: '/gallery?category=indoor',
  },
  {
    name: 'Trees',
    description: 'Enhance your landscape',
    image: '/Client1_MapleTree.png',
    link: '/gallery?category=trees',
  },
  {
    name: 'Supplies',
    description: 'Everything for your garden',
    image: '/Client1_WateringCan.png',
    link: '/gallery?category=supplies',
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/Client1_MapleTree.png"
            alt="Autumn maple leaves"
            fill
            priority
            quality={100}
            className="object-cover"
            sizes="100vw"
            style={{
              objectPosition: 'center 30%'
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="font-display text-3xl mb-6">Welcome to Our Store</h1>
            <p className="font-bodyLarge text-lg mb-8">
              Discover amazing products at unbeatable prices
            </p>
            <Link
              href="/gallery"
              className="inline-block bg-autumnLeaf text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-autumnLeaf/90 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rivuletBeige/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-title text-oliveGreen text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-oliveGreen">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-oliveGreen text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-title mb-4">Special Offer!</h2>
            <p className="text-xl font-bodyLarge mb-6">
              Get 20% off on your first purchase. Use code: WELCOME20
            </p>
            <Link
              href="/gallery"
              className="inline-block bg-autumnLeaf text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-autumnLeaf/90 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-rivuletBeige/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-title text-oliveGreen text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group relative h-80 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
                  <h3 className="text-xl font-semibold text-oliveGreen mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 