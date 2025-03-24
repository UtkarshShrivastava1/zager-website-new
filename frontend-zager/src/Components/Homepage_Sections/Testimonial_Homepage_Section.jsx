import AnimatedTestimonials from "../ui/animated-testimonials";

import img1 from "../../assets/testimonial_images/tbc.jpg";
import img2 from "../../assets/testimonial_images/jogira.jpg";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "Zager played a key role in increasing pass sales for the Gajendra Verma concert through Meta ads and social media management. Their strategies ensured the right audience was reached. Great work!",
      name: "Punit Lohani",
      designation: "The Bhilai Company",
      src: img1,
    },
    {
      quote:
        "Zager did a great job as our digital marketing partner for Jogira Pre-Holi Event, with their Meta ads & social media strategy ensuring maximum reach. Highly recommended!",
      name: "Abhishek Singh",
      designation: "Team Jogira",
      src: img2,
    },
  ];

  return (
    <>
      <h4 className="text-3xl font-bold text-center text-[#ffbe00] mb-4">
        Testimonials
      </h4>
      <AnimatedTestimonials
        testimonials={testimonials}
        autoScrollInterval={4000}
      />
    </>
  );
}

export default Testimonial;
