import Layout from '../components/Layout';
import FeedbackForm from '../components/FeedbackForm';

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday - Sunday', hours: '10:00 AM - 5:00 PM' },
];

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Welcome to Your Store, where quality meets convenience. Since our
              establishment in 2020, we've been dedicated to providing our customers
              with the best shopping experience possible.
            </p>
            <p className="text-lg mb-4">
              Our mission is to offer high-quality products at competitive prices
              while maintaining exceptional customer service. We carefully select
              each item in our inventory to ensure it meets our strict quality
              standards.
            </p>
            <p className="text-lg mb-4">
              What sets us apart is our commitment to customer satisfaction. We
              believe in building long-lasting relationships with our clients and
              providing them with products that enhance their daily lives.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <table className="w-full">
              <tbody>
                {businessHours.map((schedule, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 font-medium">{schedule.day}</td>
                    <td className="py-3 text-right">{schedule.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <address className="not-italic">
              <p className="mb-2">123 Shopping Street</p>
              <p className="mb-2">Retail District</p>
              <p className="mb-2">City, State 12345</p>
              <p className="mb-2">
                Phone: <a href="tel:+1234567890" className="text-blue-600">123-456-7890</a>
              </p>
              <p>
                Email: <a href="mailto:contact@yourstore.com" className="text-blue-600">contact@yourstore.com</a>
              </p>
            </address>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Feedback & Custom Orders</h2>
          <div className="bg-white rounded-lg shadow-md">
            <FeedbackForm />
          </div>
        </section>
      </div>
    </Layout>
  );
} 