import { useSelector } from "react-redux";
import { Analytics } from "../../components/analytics/Analytics";
import { JobUpdates } from "../../components/jobupdates/JobUpdates";
import { NotificationCard } from "../../components/notificationcard/NotificationCard";
import { ProfileCard } from "../../components/profilecard/ProfileCard";
import { Shortcuts } from "../../components/shortcuts/Shortcuts";
import { notifications } from "../../data/notifications";

export const Notifications = () => {
  const searchQuery = useSelector((state) => state?.search);
  const data = searchQuery
    ? notifications.filter((notification) =>
        notification.user.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : notifications;

  return (
    <>
      <div className="w-full"></div>
      <div className="flex gap-2 lg:gap-1 xl:gap-10 mt-2 xl:mx-48 lg:mx-auto md:pt-14    m-1">
        <div className="hidden md:flex flex-col gap-2">
          <ProfileCard />
          <Analytics />
          <Shortcuts />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <NotificationCard data={data} />
          </div>
        </div>

        <div className="hidden lg:block">
          <JobUpdates />
        </div>
      </div>
    </>
  );
};
