import { useState } from "react";
import bannerImage from "../assets/cv.jpg";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Android Developer",
    desc1: `As a dedicated Java and Android developer, I build high-quality mobile apps and backend solutions. With strong knowledge of Java, Android SDK, and APIs, I aim to deliver smooth and engaging user experiences. I’m always ready to take on new challenges and bring innovative ideas to life.

`,
    desc2: ` My skills also include working with SQLite and MySQL to manage local and remote databases, ensuring efficient data handling. I enjoy crafting user-friendly interfaces, optimizing app performance, and solving complex development challenges.

Always eager to learn and grow, I am committed to delivering innovative and high-quality solutions that meet user needs and business goals.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full h-100 flex justify-center">
            <img
              className="w-fit rounded-full"
              src={data.image}
              alt="durgesh kumar tiwari"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
