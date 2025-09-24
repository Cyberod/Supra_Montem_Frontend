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
            <h1 className="font-inter text-midnight lg:font-normal font-medium text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl ">
              Secure Your Rights with Expert Legal Support
            </h1>
          </div>
        </div>

{/* Contact Information Section */}
<div className="max-w-full container mx-auto py-10 bg-white lg:py-16">
  <div className="flex flex-col items-center gap-8 lg:px-20 lg:flex-row lg:items-start lg:justify-center lg:gap-20 xl:gap-32">
    {/* Contact Details */}
    <div className="w-full lg:w-[400px] xl:w-[450px] space-y-6 text-center lg:text-left">
      {/* Phone */}
      <div className="flex flex-col">
        <div className="flex justify-center lg:justify-start gap-3">
          <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
            <img src="./phone.svg" alt="Phone icon" />
          </div>
          <span className="font-inter text-sm lg:text-base text-blue-bayoux">Phone</span>
        </div>
        <p className="font-inter text-sm lg:text-base text-blue-bayoux mt-2">+234-7035786703</p>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <div className="flex justify-center lg:justify-start gap-3">
          <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
            <img src="./email.svg" alt="Email icon" />
          </div>
          <span className="font-inter text-sm lg:text-base text-blue-bayoux">Email</span>
        </div>
        <p className="font-inter text-sm lg:text-base text-blue-bayoux mt-2">info@supramontem.com</p>
      </div>

      {/* Location */}
      <div className="flex flex-col">
        <div className="flex justify-center lg:justify-start gap-3">
          <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
            <img src="./location.svg" alt="Location icon" />
          </div>
          <span className="font-inter text-sm lg:text-base text-blue-bayoux">Location</span>
        </div>
        <p className="font-inter text-sm lg:text-base text-blue-bayoux mt-2 whitespace-nowrap">
          1 Bende Road, Umu Obasi, Umuahia 440234, Abia
        </p>
      </div>

      {/* Appointment */}
      <div className="flex flex-col">
        <div className="flex justify-center lg:justify-start gap-3">
          <div className="w-4 h-4 lg:w-[16px] lg:h-[16px]">
            <img src="./calendar.svg" alt="Calendar icon" />
          </div>
          <span className="font-inter text-sm lg:text-base text-blue-bayoux">Appointment</span>
        </div>
        <p className="font-inter text-sm lg:text-base text-blue-bayoux mt-2">Monday - Friday (9am - 5pm)</p>
      </div>
    </div>

    {/* Map */}
    <div className="w-full lg:w-[500px] xl:w-[586px]">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[300px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.018438715037!2d7.474918229383868!3d5.529196173477403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042dd9cff0c03c5%3A0x6658ced895f7e49d!2sSupra%20Montem%20Attorneys!5e0!3m2!1sen!2sng!4v1758693900401!5m2!1sen!2sng"
          className="w-full h-full"
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