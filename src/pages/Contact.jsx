import Navbar from '../components/Navbar';
import ReachOut from '../components/ReachOut';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';


export default function Contact() {

  return (
    <div className="min-h-screen">
      <Navbar />
      
      
      <div className="max-w-[1440px]  mt-[80px]">
        <div className="h-[347.58px] bg-aqua-haze flex flex-col items-center justify-center">
            <h5 className="font-inter text-secondary text-sm mb-[11px]">•  CONTACT US• </h5>
            <h1 className="font-inter text-[48px] text-midnight text-center">
            Secure Your Rights with Expert Legal Support
            </h1>        
        </div>
      </div> 

      {/* Contact Information Section */}
      <div className="max-w-[1440px]  py-[64px] bg-white mx-auto">
        <div className="flex items-start justify-between gap-[80px] px-[180px]">
          {/* Left Side - Contact Details */}
          <div className="flex-1 space-y-[32px] flex-shrink-0">
            {/* Phone */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="w-[16px] h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-[16px] text-blue-bayoux">Phone</span>
              </div>
              <p className="font-inter text-[16px] text-blue-bayoux mt-[11px]">+234-7035786703</p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="w-[16px] h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-[16px] text-blue-bayoux">Email</span>
              </div>
              <p className="font-inter text-[16px] text-blue-bayoux mt-[11px]">info@supramontem.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="w-[16px] h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-[16px] text-blue-bayoux">Location</span>
              </div>
              <p className="font-inter text-[16px] text-blue-bayoux mt-[11px]">1 Bende Road, Umu Obasi, Umuahia 440234, Abia</p>
            </div>

            {/* Appointment */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="w-[16px] h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-[16px] text-blue-bayoux">Appointment</span>
              </div>
              <p className="font-inter text-[16px] text-blue-bayoux mt-[11px]">Monday - Friday (9am - 5pm)</p>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="flex-shrink-0">
            <div className=" w-[586px] h-[368px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8634446967544!2d7.4892259!3d5.5247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzEnMjkuOSJOIDfCsDI5JzIxLjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Supramontem Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <AppointmentForm />
      <Footer /> 
    </div>
);}