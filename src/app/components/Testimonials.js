import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Boyz Aura has the best streetwear collection I've ever seen. The quality is top-notch!",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I love the unique designs and attention to detail in every piece. Highly recommended!",
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "The customer service is excellent, and the clothes fit perfectly. I'm a loyal customer now.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="bg-gray-100 p-8 rounded-lg text-center"
                data-aos="fade-up"
              >
                <p className="text-xl mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
