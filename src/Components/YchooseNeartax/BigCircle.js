import React, { useState } from "react";
import CircleCard from "./CircleCard";
import Heading from "../Heading/Heading";

function BigCircle() {
  const [cardContent, setCardContent] = useState([
    {
      icon: "06c",
      heading: "Great Services",
      pera: "DhanTax is the team of experienced passionate and energetic professionals for providing high & reliable quality of professional services.",
      active: true,
    },
    {
      icon: "075",
      heading: "Highest Standards",
      pera: "With the combination of experience and young team we offer most cost-effective and high-technology services and facilities to its clients.",
      active: false,
    },
    {
      icon: "3c5",
      heading: "Professional Team",
      pera: "Present your content in an attractive Circle layout item 3. You can highlight key information with click or hover effects and style it as per your preference.",
      active: false,
    },
    {
      icon: "135",
      heading: "Creative Solutions",
      pera: "Present your content in an attractive Circle layout item 4. You can highlight key information with click or hover effects and style it as per your preference.",
      active: false,
    },
    {
      icon: "252",
      heading: "10+ Years Experience",
      pera: "Present your content in an attractive Circle layout item 5. You can highlight key information with click or hover effects and style it as per your preference.",
      active: false,
    },
    {
      icon: "02b",
      heading: "16+ Offices",
      pera: "Present your content in an attractive Circle layout item 6. You can highlight key information with click or hover effects and style it as per your preference.",
      active: false,
    },
  ]);

  const activeHeandler = (e) => {
    cardContent.map((content) => (content.active = false));
    let newCardContent = [...cardContent];
    newCardContent.splice(e.target.id, 1, {
      icon: cardContent[e.target.id].icon,
      heading: cardContent[e.target.id].heading,
      pera: cardContent[e.target.id].pera,
      active: true,
    });
    setCardContent(newCardContent);
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden pb-16">
      {/* main heading  */}
      <Heading heading={"Why Choose Karbhar"} />

      {/* Big Circle */}
      <div className="sm:border-4  sm:m-4 sm:rounded-full sm:h-[34rem] sm:w-[34rem] m-auto">
        {/* cards */}
        {cardContent.map((content, index) => (
          <CircleCard
            key={index}
            icon={content.icon}
            heading={content.heading}
            pera={content.pera}
            IsActive={content.active}
            activeHeandler={activeHeandler}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default BigCircle;
