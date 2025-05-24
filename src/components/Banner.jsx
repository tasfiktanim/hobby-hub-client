import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Discover New Hobbies",
    description: "Explore your passion by joining hobby groups that match your interests.",
    image: "/assets/slide1.jpg", 
  },
  {
    id: 2,
    title: "Meet Like-Minded People",
    description: "Connect with others who share your favorite activities and grow together.",
    image: "/assets/slide2.jpg",
  },
  {
    id: 3,
    title: "Join Events & Activities",
    description: "Stay active and involved by participating in events organized by your groups.",
    image: "/assets/slide3.jpg",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const { title, description, image } = slides[currentIndex];

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-sm md:text-lg max-w-xl">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
