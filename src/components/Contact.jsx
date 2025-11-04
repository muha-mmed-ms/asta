import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-gradient-to-br from-[#1a2744] to-[#0f1829]">
      <div className="grid lg:grid-cols-2 gap-0 lg:min-h-screen">
        {/* Left Side - Image */}
        <div className="relative h-[50vh] min-h-[300px] lg:h-auto lg:min-h-screen">
          <img
            src="/contact-image.jpg"
            alt="Asta Building"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/80 to-transparent lg:bg-gradient-to-r"></div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-[#1a2744] px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 flex items-center justify-center">
          <div className="max-w-xl w-full">
              <h2 className="text-[70px] font-normal text-white mb-4 leading-[100%] tracking-normal">
                Contact
              </h2>
              
              <div className="mb-8">
                <p className="text-[14px] font-semibold tracking-[0.08em] uppercase mb-2 leading-[100%]" style={{ fontFamily: 'Mulish, sans-serif', color: '#B1A490' }}>
                  Leave a Message
                </p>
                <p className="text-[40px] leading-[56px] text-white font-normal tracking-normal">
                  We love to hear from you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-[#c9a961] focus:ring-1 focus:ring-[#c9a961] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="px-8 py-5 bg-[#B1A490] text-white border border-[#B1A490]/36 text-[14px] font-semibold leading-[100%] tracking-[0.08em] uppercase"
                    style={{ fontFamily: 'Mulish, sans-serif' }}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

