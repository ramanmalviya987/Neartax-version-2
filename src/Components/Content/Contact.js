import React from "react";
// import about from "../../../public/logo192.png";

const Contact = () => {
  return (
    <div
      className="my-4 w-full md:h-[50vh] h-[70vh] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col text-center "
      style={{
        backgroundImage:
          "url(https://dhantax.com/wp-content/uploads/2022/04/about-bg.jpg)",
      }}
    >
      {/* <div >
        <img className=" w-screen  h-96  " src="https://dhantax.com/wp-content/uploads/2022/04/about-bg.jpg" alt="about" />
        <div className=" relative bottom-[23rem]  text-center lg:bottom-[20rem]">
          <h2  className="text-2xl text-white  p-8 ">
            DON'T <span className="text-2xl text-green-500">THINK </span> START{" "}
            <span className="text-2xl text-green-500">TODAY</span> AND GROW YOUR{" "}
            <span  className="text-2xl text-green-500">BUSINESS</span>
          </h2>
          <p className="text-white p-8   leading-6">
            Feel Free To Talk To Our Representative At Any Time You Please Use
            Our Contact F orm On Our Website Or One Of Our Contact Numbers. Let
            Us Work On Your Future Together.
          </p>
          <button className=" bg-green-500 rounded-2xl p-2 mx-auto	">Contact us</button>
        </div>
      </div> */}

      <h2 className="md:text-3xl text-white  px-8 ">
        DON'T <span className="md:text-4xl text-green-500">THINK </span> START{" "}
        <span className="md:text-4xl text-green-500">TODAY</span> AND GROW YOUR{" "}
        <span className="md:text-4xl text-green-500">BUSINESS</span>
      </h2>
      <p className="text-white p-8 md:text-xl  leading-6">
        Feel Free To Talk To Our Representative At Any Time You Please Use Our
        Contact F orm On Our Website Or One Of Our Contact Numbers. Let Us Work
        On Your Future Together.
      </p>
      <button className=" bg-green-500 rounded-2xl p-2 mx-auto	">
        Contact us
      </button>
    </div>
  );
};

export default Contact;
