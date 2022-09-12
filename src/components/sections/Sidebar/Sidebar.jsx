import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.png";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/vazmonserrat13/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/Adamari14",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/vazmonserrat13/",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    link: "#0",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Adamari López</h1>
        <p className="text-sm text-gray-400 mb-3">
          Mechatronics engineering student
          <a href="https://www.utm.mx/" className="text-purple-600 pl-1">
          Universidad Tecnológica de la Mixteca
          </a>
        </p>
        <a
          href="#0"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          My name is Adamari Lopez. I am a Mechatronics Engineering student at the Mixteca Technological University   (UTM). Currently I finished the sixth semester.
          I have a lot of interest in the area of ​​robotics, some specific areas are medicine, industrial manufacturing, education, aerospace, etc.
          In my free time I watch series, movies or just play video games.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
