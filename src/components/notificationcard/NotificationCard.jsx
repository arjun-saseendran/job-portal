import { BiDotsHorizontalRounded } from "react-icons/bi";

export const NotificationCard = ({ data }) => {
  return (
    <div className="border md:w-[500px]  rounded-md p-5">
      {data?.map((d) => (
        <div className="flex items-center justify-between gap-2 p-3 border-b cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-2">

         
          <img className="w-10 rounded-full" src={d?.profileImage} alt="profile photo" />
          <p><span className="font-semibold">{d?.user}</span> <span>{d?.type}ed</span>
          
          <span className="font-bold"> {d?.repostedUser}</span> post
          
          </p>
           </div>
          <div className="flex flex-col justify-center items-center">
           <span className="text-gray-500 text-xs">{d?.time}</span> 
            <BiDotsHorizontalRounded size={20}/>
          </div>
        </div>
      ))}
    </div>
  );
};
