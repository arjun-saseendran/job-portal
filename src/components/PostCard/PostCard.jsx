import {
  FaGlobeAmericas,
  FaEllipsisH,
  FaTimes,
  FaHeart,
  FaThumbsUp,
  FaRegPaperPlane,
  FaRegThumbsUp,
} from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { MdOutlineModeComment, MdRepeat } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { useState } from "react";

export const PostCard = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`w-full md:w-[500px]  ${
        show ? "h-[760px]" : "h-[735px] "
      } border  rounded-md shadow p-4`}
    >
      <div className="flex justify-between">
        <div className="grid grid-cols-12">
          <div className="col-span-2 w-16  flex items-center justify-center">
            <img
              className="rounded-full "
              width={50}
              src="https://media.licdn.com/dms/image/v2/D5635AQE5M9wYGBPmcQ/profile-framedphoto-shrink_100_100/B56Zar.1_RGkAs-/0/1746642100718?e=1750820400&v=beta&t=69k37c_ecTmt3OAq_574uqMCm-CJvOJbO7-1LQ5tHFs"
              alt="profile photo"
            />
          </div>
          <div className="col-span-10 ms-6 md:ms-0 w-48 ">
            <h1 className="flex items-center gap-1 font-bold">
              Neetha Naveen
              <BsDot className="text-xs text-gray-500" />{" "}
              <p className="text-gray-500 text-xs font-normal"> 1st</p>
            </h1>
            <p className="text-gray-500 text-xs">
              Btech CSE | Data analyst | DSML
            </p>
            <p className="flex items-center gap-1 text-gray-500 text-xs">
              20h <BsDot /> <FaGlobeAmericas />
            </p>
          </div>
        </div>
        <div></div>
        <div className="flex gap-4">
          <FaEllipsisH className="text-gray-500" />
          <FaTimes className="text-gray-500" />
        </div>
      </div>
      <div className="mt-4">
        <p>
          When all the programming languages unite… Except that one friend who
          refuses to use semicolons. 👀 Shoutout to JavaScript & Python for
          always marching to the beat of its own{" "}
          <span>
            {!show && <span
              onClick={() => setShow(!show)}
              className="hover:text-blue-600 cursor-pointer"
            >
              more..{" "}
            </span>}
            {show && <span>sarcastic, or more professional tone!</span>}
          </span>
        </p>
      </div>
      <div>
        <img
          src="https://media.licdn.com/dms/image/v2/D4E22AQGzdwFPF_HJvA/feedshare-shrink_800/B4EZd07dtcHIAo-/0/1750013435577?e=1753315200&v=beta&t=nT64i52Jwur_krzOPc6WutE2jVZ05WcSNAGaZOBzzMU"
          alt=""
        />
      </div>
      <div className="flex items-center gap-3 mt-2 p-2 border-b">
        <span className="flex items-center">
          <FaHeart className="text-red-500" />{" "}
          <FaThumbsUp className="text-blue-500" />{" "}
          <FaHandsClapping className="text-green-500" />
        </span>
        <a href="">Fathima Beevi T and 3 others</a>
      </div>
      <div className="flex items-center justify-around p-2">
        <div className="flex items-center hover:bg-gray-100 gap-1 cursor-pointer p-2 rounded ">
          <FaRegThumbsUp />
          Like
        </div>
        <div className="flex items-center hover:bg-gray-100 gap-1 cursor-pointer p-2 rounded">
          <MdOutlineModeComment />
          Comment
        </div>
        <div className="flex items-center hover:bg-gray-100 gap-1 p-2 cursor-pointer rounded">
          <MdRepeat />
          Repost
        </div>
        <div className="flex items-center gap-1 hover:bg-gray-100 p-2 cursor-pointer rounded">
          <FaRegPaperPlane />
          Send
        </div>
      </div>
    </div>
  );
};
