import { HiOutlineShieldCheck } from "react-icons/hi";
import { FaApple } from 'react-icons/fa';


export const ProfileCard = () => {
  return (
    <div className="border rounded-lg w-56 h-[215px]">
      <div className="relative">
        <img
          className="object-contain rounded-t-lg"
          src="https://media.licdn.com/dms/image/v2/D5616AQFNLUPNgxGFRQ/profile-displaybackgroundimage-shrink_350_1400/B56ZZ9R6WJHgAY-/0/1745858572468?e=1755734400&v=beta&t=5fLeJmxrvBAyVH0Shv9GBDtj_Zku_uuoxgNRX9dPnlY"
          alt="cover image"
        />
        <img
          className="rounded-full w-16 h-16 absolute top-8 left-4"
          src="https://media.licdn.com/dms/image/v2/D5635AQEGAq4FamTp8g/profile-framedphoto-shrink_200_200/B56ZUzmS1pHQAc-/0/1740327431826?e=1750928400&v=beta&t=AcUJldCHp1U4n0kVJoT0jBlVGlH8DhbseNAlbpGC4t4"
          alt="profile photo"
        />
      </div>
      <div className="mt-11 font-bold ps-4 flex items-center gap-1">
        <h1 className="font-bold ">Arjun S</h1> <HiOutlineShieldCheck className="font-bold" />
      </div>
      <div>
        <p className="text-xs w-50 px-4">Aspiring MERN Full Stack Developer | Proficient in HTML,...</p>
      </div>
      <div className="mt-1">
        <p className="text-xs text-gray-500 w-50 px-4">
            Alappuzha, Kerala
        </p>
      </div>
      <div className="flex gap-1 px-4 mt-1">
        <FaApple/> <span className="text-xs font-semibold">Apple.inc</span>
      </div>
    </div>
  );
};
