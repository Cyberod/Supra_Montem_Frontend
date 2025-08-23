import { useState } from 'react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
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
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="max-w-[1440px] px-[200px] py-[64px] bg-aqua-haze">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-[48px]">
          <h2 className="font-inter text-[28px] font-semibold text-midnight mb-3">
            Book your appointment!
          </h2>
          <p className="font-inter text-[14px] font-normal text-blue-bayoux">
            Fill out the form below to schedule your appointment. We'll get back to you soon!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row: Full Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name Field */}
            <div>
              <label className="block font-inter text-[14px] text-midnight mb-1 font-semibold">Full name</label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Write your full name"
                  className="w-full h-[56px] px-4 py-3 pr-12 border border-grey rounded-lg font-inter text-[14px] focus:border-secondary focus:outline-none bg-white text-grey-3"
                  required
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-grey">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Email Address Field */}
            <div>
              <label className="block font-inter text-[14px] text-midnight mb-1 font-semibold">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full h-[56px] px-4 py-3 pr-12 border border-grey rounded-lg font-inter text-[14px] focus:border-secondary focus:outline-none bg-white text-grey-3"
                  required
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-grey">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row: Phone Number and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Number Field */}
            <div>
              <label className="block font-inter text-[14px] text-midnight mb-1 font-semibold ">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full h-[56px] px-4 py-3 pr-12 border border-grey rounded-lg font-inter text-[14px] focus:border-secondary focus:outline-none bg-white text-grey-3"
                  required
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-grey">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Select Category Field */}
            <div>
              <label className="block font-inter text-[14px] text-midnight mb-1 font-semibold">Select Category</label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-[56px] px-4 py-3 pr-12 border border-grey rounded-lg font-inter text-[14px] focus:border-secondary focus:outline-none appearance-none bg-white text-grey-3"
                  required
                >
                  <option value="">Choose Area of Law</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="criminal">Criminal Defense</option>
                  <option value="family">Family Law</option>
                  <option value="estate">Estate Planning</option>
                  <option value="litigation">Litigation</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-grey-3">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Message Field */}
          <div>
            <label className="block font-inter text-[14px] text-midnight mb-1"></label>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Message"
                className="w-full h-[158px] px-4 py-3 pr-12 border border-grey rounded-lg font-inter text-[14px] focus:border-secondary focus:outline-none resize-none bg-white"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="inline-flex px-8 py-3 bg-midnight text-white rounded-[24px] hover:opacity-90 transition font-inter items-center gap-3"
            >
              Confirm Your Appointment
              <img src="/arrow.png" alt="arrow icon" className="bg-secondary rounded-[50%] w-[32px] h-[32px]"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
