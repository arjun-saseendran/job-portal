import { PostBar } from "./components/PostBar/PostBar";
import { PostCard } from "./components/PostCard/PostCard";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { Header } from "./components/Header/Header";
import { JobUpdates } from "./components/JobUpdates/JobUpdates";
import { Analytics } from "./components/Analytics/Analytics";

export const App = () => {
  return (
    <>
    <div className="w-full">

    <Header />
    </div>
    <div className="flex gap-2 lg:gap-1 xl:gap-10 mt-2 xl:mx-48 lg:mx-auto md:pt-14    m-1">
      <div className="hidden md:flex flex-col gap-2">
        <ProfileCard/>
        <Analytics/>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <PostBar/>
        </div>
        <div>
          <PostCard/>
        </div>
      </div>

      <div className="hidden lg:block">
        <JobUpdates/>
      </div>
     
    </div>
    </>
  );
};
