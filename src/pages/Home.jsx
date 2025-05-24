import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Zoom } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import animationData from "../assets/hobbyAnimation.json";

const allGroups = [
  {
    id: 1,
    groupName: "Nature Photography",
    category: "Photography",
    startDate: "2025-06-10",
    imageUrl: "https://i.ibb.co/3wFy8Rj/nguyen-thu-hoai-SJ3m-MFF2-Qeg-unsplash.jpg",
  },
  {
    id: 2,
    groupName: "DIY Crafts Club",
    category: "Crafting",
    startDate: "2025-07-01",
    imageUrl: "https://i.ibb.co/YB6Qyjpj/2149391106.jpg",
  },
  {
    id: 3,
    groupName: "Cultural Cooking",
    category: "Cooking",
    startDate: "2025-05-30",
    imageUrl: "https://i.ibb.co/C31CLs4w/45672.jpg",
  },
  {
    id: 4,
    groupName: "Urban Sketchers",
    category: "Art",
    startDate: "2025-08-01",
    imageUrl: "https://i.ibb.co/PZRyWXNX/erin-with-Xv-mkq-d-MY-unsplash.jpg",
  },
  {
    id: 5,
    groupName: "Gardening Gurus",
    category: "Gardening",
    startDate: "2025-06-15",
    imageUrl: "https://i.ibb.co/hRLPd8R0/26620.jpg",
  },
  {
    id: 6,
    groupName: "Tech Tinkerers",
    category: "Electronics",
    startDate: "2025-06-20",
    imageUrl: "https://i.ibb.co/TMTf0xJR/2147883724.jpg",
  },
  {
    id: 7,
    groupName: "History Buffs",
    category: "Discussion",
    startDate: "2024-12-01",
    imageUrl: "https://i.ibb.co/d0bC72zv/6822658-27233.jpg",
  }
];

const Home = () => {
  const [featuredGroups, setFeaturedGroups] = useState([]);

  useEffect(() => {
    const today = new Date();
    const ongoing = allGroups
      .filter(group => new Date(group.startDate) > today)
      .slice(0, 6);
    setFeaturedGroups(ongoing);
  }, []);

  return (
    <div className="bg-gradient-to-br from-amber-50 to-lime-100 text-gray-900 min-h-screen p-6">
      {/* Hero Section */}
      <Fade triggerOnce>
        <div className="flex flex-col items-center mt-10">
          <div 
            className="w-60 h-60 bg-white rounded-full flex items-center justify-center shadow-md"
            data-tooltip-id="animation-tooltip"
            data-tooltip-content="Interactive Hobby Animation"
          >
            <Lottie animationData={animationData} loop className="w-40 h-40" />
          </div>
          <Tooltip id="animation-tooltip" />

          <h1 className="text-4xl font-bold text-green-800 mt-4">
            Welcome to <span className="text-orange-600">HobbyHub</span>
          </h1>

          <h2 className="text-xl mt-2 text-gray-700 h-8">
            <Typewriter
              words={[
                "Explore New Hobbies",
                "Join Communities",
                "Share Your Passion",
                "Discover Hidden Talents"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
      </Fade>

      {/* Features Section */}
      <Zoom triggerOnce cascade damping={0.1}>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: "Crafting", color: "orange-500", tooltip: "Weekly crafting workshops available", text: "Join DIY projects and learn fun, hands-on crafts." },
            { title: "Photography", color: "green-500", tooltip: "Monthly photo walks in scenic locations", text: "Capture and share beautiful moments with fellow enthusiasts." },
            { title: "Cooking", color: "purple-500", tooltip: "International cuisine focus this month", text: "Discover delicious recipes and cooking classes." },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
              data-tooltip-id={`${feature.title.toLowerCase()}-tooltip`}
            >
              <h3 className={`text-xl font-semibold text-${feature.color}`}>{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.text}</p>
              <Tooltip id={`${feature.title.toLowerCase()}-tooltip`} content={feature.tooltip} />
            </div>
          ))}
        </div>
      </Zoom>

      {/* Featured Groups Section */}
      <Fade triggerOnce delay={200}>
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Featured Groups
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredGroups.map(group => (
              <div key={group.id} className="bg-white rounded-xl shadow p-4 transition hover:shadow-lg">
                <img
                  src={group.imageUrl}
                  alt={group.groupName}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{group.groupName}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> {group.category}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Starts:</strong> {group.startDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* CTA Section */}
      <Fade delay={300} triggerOnce>
        <div className="mt-20 max-w-2xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            <Typewriter
              words={["Ready to start your hobby journey?", "Find your perfect hobby match today!"]}
              loop
              cursor
              typeSpeed={60}
              deleteSpeed={40}
            />
          </h3>
          <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-green-500 text-white rounded-full font-medium hover:shadow-lg transition-all">
            Browse All Hobbies
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
