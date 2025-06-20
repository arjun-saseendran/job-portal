import {
  FaBookmark,
  FaRegCalendarAlt,
  FaRegNewspaper,
  FaUsers,
} from "react-icons/fa";

export const Shortcuts = () => {
  return (
    <div className="border flex flex-col gap-2 justify-center rounded-lg w-56 h-32 p-3 text-xs">
      <div className="flex gap-2 items-center">
        <FaBookmark />
        <p className="font-bold">Saved items</p>
      </div>
      <div className="flex gap-2  items-center">
        <FaUsers />
        <p className="font-bold">Groups</p>
      </div>
      <div className="flex gap-2  items-center">
        <FaRegNewspaper />
        <p className="font-bold">Newsletters</p>
      </div>
      <div className="flex gap-2  items-center">
        <FaRegCalendarAlt />
        <p className="font-bold">Events</p>
      </div>
    </div>
  );
};
