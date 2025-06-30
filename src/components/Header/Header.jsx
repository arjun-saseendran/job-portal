import { useState } from "react";
import {
  FaSearch,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaAngleDown,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const [home, setHome] = useState(true);
  const [network, setNetwork] = useState(false);
  const [job, setJob] = useState(false);
  const [message, setMessage] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`w-full ${
        open ? "mb-80" : "mb-0"
      } md:flex items-center lg:justify-between bg-white px-2 py-1 md:py-0 xl:px-48  h-12 md:fixed md:z-50 shadow md:top-0 md:left-0 `}
    >
      <div className="flex justify-between items-center w-full md:w-1/2">
        <div className="flex items-center h-full">
          <div>
            <img
              width={32}
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="logo"
            />
          </div>
          <div className="relative md:w-[280px]">
            <input
              placeholder="Search"
              className="border-2 py-1.5 h-9 w-full pl-8 pr-2 placeholder:text-xs  border-gray-100 rounded-full ml-2 "
              type="text"
            />
            <FaSearch
              size={13}
              className="absolute  top-1/2 left-5 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="md:hidden">
          <IoMenu size={20} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div
        className={`flex w-full md:w-auto md:block justify-end ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-1 mt-4 md:mt-0 md:flex-row w-full   items-center md:gap-4 lg:gap-6">
          <li
            onClick={() => {
              setHome(true);
              setJob(false);
              setMessage(false);
              setNetwork(false);
              setNotifications(false);
            }}
            className={`flex flex-col justify-center ${
              home ? "border-b-2 border-gray-600" : "border-none"
            } text-xs text-gray-500 items-center cursor-pointer
            bg-gray-100 md:bg-white rounded md:rounded-none p-1 md:p-0
            w-full md:w-auto hover:text-gray-600`}
          >
            <Link className="flex flex-col items-center justify-center" to="/">
              {" "}
              <FaHome size={20} />
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setNetwork(true);
              setJob(false);
              setMessage(false);
              setHome(false);
              setNotifications(false);
            }}
            className={`flex flex-col justify-center ${
              network ? "border-b-2 border-gray-600" : "border-none"
            } text-xs text-gray-500 items-center cursor-pointer hover:text-gray-600 bg-gray-100 md:bg-white rounded md:rounded-none p-1 md:p-0
            w-full md:w-auto`}
          >
            <FaUsers size={20} />
            My Network
          </li>
          <li
            onClick={() => {
              setJob(true);
              setHome(false);
              setMessage(false);
              setNetwork(false);
              setNotifications(false);
              navigate("/jobs");
            }}
            className={`flex flex-col justify-center ${
              job ? "border-b-2 border-gray-600" : "border-none"
            } text-xs text-gray-500 items-center cursor-pointer hover:text-gray-600 bg-gray-100 md:bg-white rounded md:rounded-none p-1 md:p-0
            w-full md:w-auto`}
          >
            <FaBriefcase size={20} />
            Jobs
          </li>
          <li
            onClick={() => {
              setMessage(true);
              setJob(false);
              setHome(false);
              setNetwork(false);
              setNotifications(false);
            }}
            className={`flex flex-col justify-center ${
              message ? "border-b-2 border-gray-600" : "border-none"
            } text-xs text-gray-500 items-center cursor-pointer hover:text-gray-600 bg-gray-100 md:bg-white rounded md:rounded-none p-1 md:p-0
            w-full md:w-auto`}
          >
            <FaCommentDots size={20} />
            Messaging
          </li>
          <li
            onClick={() => {
              setNotifications(true);
              setHome(false);
              setJob(false);
              setMessage(false);
              setNetwork(false);
            }}
            className={`flex flex-col justify-center ${
              notifications ? "border-b-2 border-gray-600" : "border-none"
            } text-xs text-gray-500 items-center cursor-pointer hover:text-gray-600 bg-gray-100 md:bg-white rounded md:rounded-none p-1 md:p-0
            w-full md:w-auto`}
          >
            <Link className="flex flex-col items-center justify-center" to="/notifications">
            <FaBell size={20} />
            Notifications
            </Link>
          </li>
          <li
            className="flex flex-col justify-center items-center bg-gray-100 md:bg-white rounded md:rounded-none p-1 md:p-0
            w-full md:w-auto"
          >
            <img
              className="rounded-full w-6 h-6 "
              src="https://media.licdn.com/dms/image/v2/D5635AQEGAq4FamTp8g/profile-framedphoto-shrink_200_200/B56ZUzmS1pHQAc-/0/1740327431826?e=1751612400&v=beta&t=Mc9uQOFKy36vf7VhTcXF8BOqTMaj0aUtChX8f92Vbhg"
              alt="profile photo"
            />
            <span className="flex items-center text-xs text-gray-500">
              Me
              <FaAngleDown size={10} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
