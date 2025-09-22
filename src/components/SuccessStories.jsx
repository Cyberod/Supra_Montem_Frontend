import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "Supra Montem guided me through a complex property transaction with remarkable clarity and professionalism. Their attention to detail and prompt communication made the entire process seamless. I felt fully supported every step of the way.",
    name: "Sir O'Kelly",
    position: "CEO, Venoxe Inc.",
    image: "/Client_image.png"
  },
  {
    id: 2,
    text: "The team at Supra Montem provided exceptional legal counsel during our merger process. Their strategic approach saved us both time and resources while ensuring all regulatory requirements were met flawlessly.",
    name: "Jennifer Lawson",
    position: "CFO, TechGrowth Solutions",
    image: "/Client_image2.png"
  },
  {
    id: 3,
    text: "I was facing a challenging litigation case, and Supra Montem's expertise made all the difference. Their thorough preparation and courtroom expertise resulted in a favorable outcome that exceeded my expectations.",
    name: "Michael Torres",
    position: "Entrepreneur",
    image: "/Client_image3.png"
  }
];

export default function SuccessStories() {
  return (
    <div className="max-w-full container relative py-8 md:py-14 xl:py-20 2xl:py-[104px]">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h5 className="section-name uppercase mb-[10px]">
            SUCCESS STORIES
          </h5>
          <h2 className="text-midnight font-inter font-normal text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight">
            Legal Journeys, Real Results
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className=" h-auto flex flex-col justify-center items-center  lg:items-start pb-5 sm:pb-8">
                {/* Quote Icon */}
                <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-7">
                  <img
                    src="/Quote.png"
                    alt="Quote icon"
                    className="w-10 h-8 sm:w-12 sm:h-10 md:w-14 md:h-12 lg:w-16 lg:h-14"
                  />
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-inter text-blue-bayoux text-center lg:text-left  text-[28px]  xl:text-[28px]  font-medium mb-6">
                  {testimonial.text}
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="mr-4 sm:mr-5">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="text-midnight font-inter font-semibold text-base sm:text-lg md:text-xl">
                      {testimonial.name}
                    </h5>
                    <p className="text-blue-bayoux font-inter text-sm sm:text-base md:text-lg">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
