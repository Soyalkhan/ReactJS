import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function AnnouncementBar() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("up");
  const offer = [
    "Buy 2 Get 20% Off!",
    "7 Days Replacement!",
    "1 Year Warranty",
    "Use BOHO flat 200"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("down");
      setTimeout(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % offer.length);
        setSlideDirection("up");
      }, 500); // Change the delay time as needed
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevMessage = () => {
    setMessageIndex((prevIndex) =>
      prevIndex === 0 ? offer.length - 1 : prevIndex - 1
    );
  };

  const handleNextMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % offer.length);
  };

  return (
    <>
      <div className="main bg-white h-100 flex space-x-20 cursor-pointer justify-center p-2">
        <FontAwesomeIcon onClick={handlePrevMessage} className="text-blue-800" icon={faArrowLeft} />
        <p
          style={{
            opacity: slideDirection === "down" ? 0 : 1,
            transform:
              slideDirection === "down" ? "translateY(0)" : "translateY(-20%)",
            transition: "opacity 0.5s ease, transform 0.5s ease"
          }}
          className="text-blue-800"
        >
          {offer[messageIndex]}
        </p>
        <FontAwesomeIcon onClick={handleNextMessage} className="text-blue-800" icon={faArrowRight} />
      </div>
    </>
  );
}

export default AnnouncementBar;
