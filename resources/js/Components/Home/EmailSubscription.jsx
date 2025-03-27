import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    try {
      // Thực hiện gọi API để gửi email
      // const response = await axios.post('/api/subscribe', { email });

      // Simulating API response for now
      await new Promise(resolve => setTimeout(resolve, 800));

      setMessage({
        text: 'Thank you for subscribing to our newsletter!',
        type: 'success'
      });
      setEmail('');
    } catch (error) {
      setMessage({
        text: 'An error occurred. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Sign Up for Latest Updates</h2>
            <p className="text-gray-600">
              Stay informed about our latest products, innovations, and company news
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-700"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-medium transition duration-200"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message.text && (
            <div className={`mt-4 text-sm text-center ${
              message.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
