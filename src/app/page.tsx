"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/komarika1.jpg", // Replace with your actual image paths
  "/komarika2.jpg",
  "/komarika3.jpg",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fading
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
        setIsFading(false); // End fading
      }, 1000); // Duration of the fade effect
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full bg-green-50 text-gray-800">
      {/* Background Image */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
          isFading ? "opacity-15" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentImageIndex]} // Replace with your image path
          alt="Komarika Plant Poster"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>

      {/* Poster Content */}
      <div className="relative z-10 text-center p-12 mb-10 bg-white bg-opacity-70 rounded-lg shadow-lg max-w-xl">
        <h1 className="text-4xl font-bold text-green-500 mb-4">
          Let's Plant Komarika
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Nature's Miracle for Healing and Wellness
        </h2>
        <p className="text-2xl font-bold">
          <span className="inline-block mt-2 text-xl italic text-gray-800 px-4 py-2">
            One Plastic Pot of Komarika is Rs.150 only
          </span>
        </p>
      </div>
      <footer className="relative z-10 w-full bg-white bg-opacity-90 p-6 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-green-700">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Have questions or want to learn more about Komarika? Reach out to
            us!
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href="mailto:info@komarika.com"
              className="text-green-600 hover:text-green-800"
            >
              Email: info@komarika.com
            </a>
            <span>|</span>
            <a
              href="tel:+123456789"
              className="text-green-600 hover:text-green-800"
            >
              Phone: 0715377088
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
