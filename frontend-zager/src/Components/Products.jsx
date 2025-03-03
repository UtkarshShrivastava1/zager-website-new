import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    name: "Smart Technology Hub",
    description:
      "Advanced technology solution for seamless integration of your smart devices.f you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear",
    link: "/products/smart-hub",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1919&auto=format&fit=crop",
    name: "Digital Assistant Pro",
    description:
      "Next-generation digital assistant with voice recognition and task automation.",
    link: "/products/digital-assistant",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1928&auto=format&fit=crop",
    name: "Cloud Security Suite",
    description:
      "Comprehensive cloud security solution offering advanced threat detection. If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear",
    link: "/products/security-suite",
  },
];

const OurProducts = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(1);
  const totalProducts = products.length;

  const displayProducts = [
    products[totalProducts - 1],
    ...products,
    products[0],
  ];

  const slide = (direction) => {
    let newIndex = index + direction;

    // Handle wrap-around logic
    if (newIndex <= 0) {
      newIndex = totalProducts; // Go to the last product
      gsap.set(carouselRef.current, { x: -totalProducts * 100 + "%" }); // Reset position
    } else if (newIndex >= displayProducts.length - 1) {
      newIndex = 1; // Go to the first product
      gsap.set(carouselRef.current, { x: -100 + "%" }); // Reset position
    }

    setIndex(newIndex);

    // Smooth transition
    gsap.to(carouselRef.current, {
      x: -newIndex * 100 + "%",
      ease: "power2.out",
      duration: 0.6, // Adjusted duration for smoother transition
    });
  };

  const handleDotClick = (dotIndex) => {
    const direction = dotIndex - index;
    slide(direction);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      slide(1);
    }, 3500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className=" relative overflow-hidden min-h-[100vh]">
      <h4
        style={{
          fontWeight: "700",
          fontSize: "2.5rem",
          color: "#ffbe00",
          marginBottom: "20px",
        }}
        className="text-3xl font-bold text-center text-[#ffbe00] mb-4"
      >
        Our Products
      </h4>
      <div className="relative w-full overflow-hidden mb-10">
        <div
          ref={carouselRef}
          className="flex w-full transition-transform duration-1000"
        >
          {displayProducts.map((product, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center gap-10 px-5 md:px-10 lg:px-20 py-10"
            >
              <div className="w-full max-w-[300px] md:max-w-[40%] h-[200px] md:h-[300px] lg:w-[50%] lg:h-[400px] rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center w-full md:w-[50%] p-4 ">
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
                  {product.name}
                </h4>
                <p className="text-base md:text-lg text-gray-500 mb-6 overflow-hidden min-h-28 overflow-y-auto ">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="bg-[#ffbe00] w-[100px] md:w-[120px] py-2 px-4 rounded-md hover:scale-110 transition duration-300 !text-white"
                >
                  {" "}
                  See Product
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {products.map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex + 1)}
            className={`w-4 h-4 mx-2 rounded-full cursor-pointer hover:bg-amber-200 ${
              index === dotIndex + 1 ? "bg-[#ffbe00]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
