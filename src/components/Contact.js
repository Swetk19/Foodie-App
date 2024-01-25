import contactIllustration from "../assets/Contact-Us-Vector-Illustration-Part-02-1.jpg";
const Contact = () => {
  return (
    <div>
      <div className="flex justify-center h-48 mb-7">
        <h1
          className="py-16 px-0 w-full text-center bg-[#333] text-white font-bold tracking-[.19em] text-4xl leading-normal"
          style={{}}
        >
          We would love to hear from you!
        </h1>
      </div>
      <img
        src={contactIllustration}
        alt="illustration"
        style={{ width: "50%", padding: "0", marginLeft: "25%" }}
      />
    </div>
  );
};

export default Contact;