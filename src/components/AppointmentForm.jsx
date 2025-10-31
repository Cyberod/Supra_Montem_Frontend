import { useState } from 'react';
import { useFormspark } from '@formspark/use-formspark';
// import ActionButton from './ActionButton'; // Not needed, using button instead

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submit, submitting] = useFormspark({
    formId: "jVcoHK4iD", // Replace with your actual Formspark form ID
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for the field being changed
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (/\d/.test(formData.fullName)) {
      newErrors.fullName = 'Full name cannot contain digits';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await submit(formData);
      alert('Form submitted successfully!');
      // Optionally reset the form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        category: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="max-w-full container py-10 bg-aqua-haze  xl:py-[64px]">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-8 xl:mb-[48px]">
          <h2 className="font-inter text-2xl font-semibold text-midnight mb-3 xl:text-[28px]">
            Book your appointment!
          </h2>
          <p className="font-inter text-sm font-normal text-blue-bayoux xl:text-[14px]">
            Fill out the form below to schedule your appointment. We'll get back to you soon!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row: Full Name and Email */}
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:md:grid-cols-2 xl:gap-6">
            {/* Full Name Field */}
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Full name</label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Write your full name"
                  className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 xl:right-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-grey xl:w-5 xl:h-5">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email Address Field */}
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 xl:right-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-grey xl:w-5 xl:h-5">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Second Row: Phone Number and Category */}
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-1 xl:md:grid-cols-2 xl:gap-6">
            {/* Phone Number Field */}
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 xl:right-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-grey xl:w-5 xl:h-5">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Select Category Field */}
            <div>
              <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Select Category</label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-12 px-3 py-3 pr-10 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none appearance-none bg-white text-grey-3 xl:h-[56px] xl:px-4 xl:pr-12 xl:text-[14px]"
                  required
                >
                  <option value="">Choose Area of Law</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Estate Planning">Estate Planning</option>
                  <option value="Litigation">Litigation</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 xl:right-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-grey-3 xl:w-5 xl:h-5">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>
          </div>

          {/* Additional Message Field */}
          <div>
            <label className="block font-inter text-sm text-midnight mb-2 font-semibold xl:text-[14px] xl:mb-1">Additional Message</label>
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Message"
                className="w-full h-32 px-3 py-3 border border-grey rounded-lg font-inter text-sm focus:border-secondary focus:outline-none resize-none bg-white xl:h-[158px] xl:px-4 xl:pr-12 xl:text-[14px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='text-center mt-12'>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex pl-[14px] py-2 pb-2 pr-2 md:px-[14px] md:py-3 xl:px-4 xl:py-3 bg-midnight text-barley-white cursor-pointer rounded-full hover:opacity-90 transition text-h-1 items-center text-base gap-3 lg:text-[18px] h-12 lg:h-14 xl:ml-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Send Message'}
                <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-transform">
                  <img
                    src="/arrow.svg"
                    alt="arrow icon"
                    className="bg-secondary w-[10px] h-[10px] stroke-[1.5px]"
                  />
                </div>
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
