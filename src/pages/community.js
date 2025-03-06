import Layout from '../components/Layout';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    content: 'The quality of products and customer service is exceptional. I have been shopping here for over a year and have never been disappointed.',
  },
  {
    name: 'Mike Chen',
    role: 'Local Business Owner',
    content: 'As a business owner myself, I appreciate their commitment to quality and community. They are not just a store, they are a valuable part of our neighborhood.',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Fashion Blogger',
    content: 'I love their curated selection of products. You can tell they put a lot of thought into what they offer. The prices are great too!',
  },
];

const initiatives = [
  {
    title: 'Environmental Sustainability',
    description: 'We are committed to reducing our environmental impact through eco-friendly packaging and recycling programs.',
    icon: '🌱',
  },
  {
    title: 'Local Partnerships',
    description: 'We work with local artisans and businesses to bring you unique products while supporting our community.',
    icon: '🤝',
  },
  {
    title: 'Youth Education',
    description: 'Our internship program provides valuable retail experience to local high school and college students.',
    icon: '📚',
  },
];

export default function Community() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gray-50 py-12 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Our Community Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8 px-4">
            {initiatives.map((initiative, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-autumnLeaf text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg mb-6">
            Want to participate in our community events or suggest new initiatives?
          </p>
          <Link href="/about" className="bg-white text-autumnLeaf px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
            Contact Us
          </Link>
        </section>
      </div>
    </Layout>
  );
} 