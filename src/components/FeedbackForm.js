import { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'feedback',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    submissions.push(newSubmission);
    localStorage.setItem('submissions', JSON.stringify(submissions));

    setFormData({
      name: '',
      email: '',
      type: 'feedback',
      message: '',
    });
    alert(`Thank you for your ${formData.type}!`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-title text-oliveGreen mb-6">Feedback & Custom Orders</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-oliveGreen focus:ring-oliveGreen"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-oliveGreen focus:ring-oliveGreen"
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
            Message Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-oliveGreen focus:ring-oliveGreen"
          >
            <option value="feedback">General Feedback</option>
            <option value="custom order">Custom Order Request</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder={formData.type === 'custom order' 
              ? "Please provide specific details about your custom order request..."
              : "Share your thoughts, questions, or feedback with us..."}
            className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-oliveGreen focus:ring-oliveGreen"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-autumnLeaf text-white py-2 px-4 rounded-md hover:bg-autumnLeaf/90 focus:outline-none focus:ring-2 focus:ring-autumnLeaf focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm; 