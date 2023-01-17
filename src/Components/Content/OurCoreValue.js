import Heading from "../Heading/Heading";
import CoreValueCard from "./CoreValueCard";

function OurCoreValue() {
  const coreValues = [
    {
      icon: "",
      heading: "Vision",
      pera: "To establish a one roof professional platform for clients for all their business needs with the motive to provide reliable and fast professional services and to serve for nation.",
    },
    {
      icon: "",
      heading: "Mission",
      pera: "To provide reliable and fast professional services with integrity, excellence and confidentiality to meet our customer’s individual needs of business.",
    },
    {
      icon: "",
      heading: "Integrity",
      pera: "In order to create a partnership with our clients and create a sense of mutual trust, we are open, honest and approachable in all our dealings.",
    },
    {
      icon: "",
      heading: "Quality",
      pera: "Our experience allows us to evaluate challenges with a discerning mind. Passion is intrinsic to all that we do – it helps us innovate, thus allowing us to deliver high quality service and products.",
    },
    {
      icon: "",
      heading: "360° approach",
      pera: "Our strong conviction is that a business is to be optimised in a full cycle manner giving an overall perspective from all laws. We are 360° solutions providing partner.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* main heading  */}
      <Heading heading={"Our Core Values"} />

      <div className="gap-4 w-[90%] flex flex-col">
        {coreValues.map((values,index) => {
          return (
            <CoreValueCard
            key={index}
              icon={values.icon}
              heading={values.heading}
              pera={values.pera}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurCoreValue;
