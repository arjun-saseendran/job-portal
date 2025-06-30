import { PostBar } from "../../components/postbar/PostBar";
import { PostCard } from "../../components/postcard/PostCard";
import { ProfileCard } from "../../components/profilecard/ProfileCard";
import { JobUpdates } from "../../components/jobupdates/JobUpdates";
import { Analytics } from "../../components/analytics/Analytics";
import { Shortcuts } from "../../components/shortcuts/Shortcuts";

export const Home = () => {
  return (
    <>
    
      <div className="flex gap-2 lg:gap-1 xl:gap-10 mt-2 xl:mx-48 lg:mx-auto md:pt-14    m-1">
        <div className="hidden md:flex flex-col gap-2">
          <ProfileCard />
          <Analytics />
          <Shortcuts />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <PostBar />
          </div>
          <div>
            <PostCard />
          </div>
        </div>

        <div className="hidden lg:block">
          <JobUpdates />
        </div>
      </div>
    </>
  );
};
