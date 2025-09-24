import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';


export default function Contact() {

  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="practice-area" className="w-full  pt-[74px]">
      {/* Topic Section */}
        <div className="max-w-full bg-aqua-haze container lg:py-[104px] py-10">
          <div className="text-center  px-5  container">
            <h5 className="section-name text-center">• CONTACT US •</h5>
            <h1 className="font-inter lg:font-normal font-medium text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl ">
              Secure Your Rights with Expert Legal Support
            </h1>
          </div>
        </div>

      {/* Contact Information Section */}
      <div className="max-w-full container mx-auto py-10 bg-white  lg:py-[64px]">
        <div className="flex flex-col items-center gap-8 px-5 lg:flex lg:items-start lg:justify-between lg:gap-[15px] lg:px-[45px] xl:px-[100px] lg:flex-row">
          {/* Contact Details */}
          <div className="space-y-6 text-center lg:flex-1 lg:space-y-[20px] lg:flex-shrink-0 lg:text-left">

            {/* Phone */}
            <div className="flex flex-col">
              <div className="flex mx-auto gap-3 lg:mx-0 lg:gap-4 lg:items-center">
                <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-sm text-blue-bayoux lg:text-[16px] ">Phone</span>
              </div>
              <p className="font-inter text-sm text-blue-bayoux mt-2 lg:text-[16px] lg:mt-[11px]">+234-7035786703</p>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <div className="flex mx-auto gap-3 lg:mx-0 lg:gap-4 items-center">
                <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-sm text-blue-bayoux lg:text-[16px]">Email</span>
              </div>
              <p className="font-inter text-sm text-blue-bayoux mt-2 lg:text-[16px] lg:mt-[11px]">info@supramontem.com</p>
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <div className="flex mx-auto gap-3 lg:mx-0 lg:gap-4 ">
                <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-sm text-blue-bayoux lg:text-[16px]">Location</span>
              </div>
              <p className="font-inter text-sm text-blue-bayoux mt-2 lg:text-[16px] lg:mt-[11px]">1 Bende Road, Umu Obasi, Umuahia 440234, Abia</p>
            </div>

            {/* Appointment */}
            <div className="flex flex-col">
              <div className="flex mx-auto gap-3 lg:mx-0 lg:gap-4 items-center">
                <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
                  <svg viewBox="0 0 24 24" fill="none" className="text-midnight">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-inter text-sm text-blue-bayoux lg:text-[16px]">Appointment</span>
              </div>
              <p className="font-inter text-sm text-blue-bayoux mt-2 lg:text-[16px] lg:mt-[11px]">Monday - Friday (9am - 5pm)</p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:flex-shrink-0">
            <div className="w-full h-auto  overflow-hidden lg:w-[400px] lg:h-[300px] 2xl:w-[586px] 2xl:h-[368px]">
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
      </section>

    </div>
);}