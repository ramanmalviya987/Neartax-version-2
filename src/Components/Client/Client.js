import avatar from "../public/avatar.png";
import Card from "./Card";
import Heading from '../Heading/Heading'
const Client = () => {
  const clientData = [
    {
      text: "Previously, I have used multiple offline & online CAs/ Lawyers.but DhanTax clearly provided me the best service with reasonable price and fast. Annual Company compliance service provided to mycompany is awesome.",
      image: avatar,
      name: "Ritesh Kumar",
      content:
        "Electrowain Technologies Private Limited- CEO And Managing Director",
    },
    {
      text: "They picked up and organised us, to the level that astounded me. Today we are experiencing a 24% growth and world wide coverage. We don’t have stress regarding company legal & Taxation compliance. DhanTax is providing us best services. ",
      image: avatar,
      name: "Raman Kumar",
      content: "CEO and Director - Growstair Technology Private Limited",
    },
    {
      text: "I will highly recommend Dhantax for newly startups given its quality support & best Services with reasonable cost and easily understanding for non-accounting Background Personally thanks to whole. Dhantax Team. ",
      image: avatar,
      name: "Nandi Kumar",
      content: "Managing Director - NMR INFOTECH Privite Limited",
    },
    {
        text: "I will highly recommend Dhantax for newly startups given its quality support & best Services with reasonable cost and easily understanding for non-accounting Background Personally thanks to whole. Dhantax Team. ",
        image: avatar,
        name: "Nandi Kumar",
        content: "Managing Director - NMR INFOTECH Privite Limited",
      },
      {
        text: "I will highly recommend Dhantax for newly startups given its quality support & best Services with reasonable cost and easily understanding for non-accounting Background Personally thanks to whole. Dhantax Team. ",
        image: avatar,
        name: "Nandi Kumar",
        content: "Managing Director - NMR INFOTECH Privite Limited",
      },
      {
        text: "I will highly recommend Dhantax for newly startups given its quality support & best Services with reasonable cost and easily understanding for non-accounting Background Personally thanks to whole. Dhantax Team. ",
        image: avatar,
        name: "Nandi Kumar",
        content: "Managing Director - NMR INFOTECH Privite Limited",
      },
   
    ]
  return (
    <div className="text-center">
      <div className="flex flex-col justify-center items-center">
        {/* <h2 className="text-3xl text-[#041D49] mb-8">Clients Testimonial</h2> */}
        <Heading heading="Client Testimonial" />
        <div className=" flex flex-col gap-4 md:flex-row flex-wrap  justify-evenly  ">
          {clientData.map((data,index)=>{
            return   <Card
            key={index}
            text={data.text}
            image={data.image}
            name={data.name}
            content={data.content}
          />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
