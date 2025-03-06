import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({ children }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-rivuletBeige shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Client1_LogoPalette1_9D352E.png"
                  alt="Company Logo"
                  width={100}
                  height={100}
                  className="mr-2"
                />
                <span className="text-xl text-greenFont font-bold">Bloom Valley Nursery</span>
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link href="/gallery" className="hover:text-blue-600">Gallery</Link></li>
                <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link href="/community" className="hover:text-blue-600">Community</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-rivuletBeige text-greenFont">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 text-gray-800 rounded-l"
                  required
                />
                <button
                  type="submit"
                  className="bg-autumnLeaf px-4 py-2 rounded-r hover:bg-autumnLeaf/90 text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link href="/gallery" className="hover:text-blue-400">Gallery</Link></li>
                <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link href="/community" className="hover:text-blue-400">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 