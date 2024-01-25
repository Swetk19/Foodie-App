import Illustration1 from "../assets/Order food-pana.svg";
import Illustration2 from "../assets/Take Away-pana.svg";

const AboutUs = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl mx-0 my-8 leading-none font-bold">About Us</h1>
      <p className="text-lg leading-normal my-5 mx-0 font-semibold font-montser">
        We are a food delivery company that connects customers with their
        favorite restaurants. We strive to provide a seamless and convenient
        experience for both customers and restaurants.
      </p>
      <img
        src={Illustration1}
        alt="illustration of a person ordering food"
        className="w-72 my-5 mx-auto"
      />
      <p className="text-lg leading-normal my-5 mx-0 font-semibold font-montser">
        Our team is dedicated to ensuring that every order is delivered on time
        and to the satisfaction of our customers.
      </p>
      <img
        src={Illustration2}
        alt="illustration of a delivery person"
        className="w-72 my-5 mx-auto"
      />
    </div>
  );
};

export default AboutUs;
