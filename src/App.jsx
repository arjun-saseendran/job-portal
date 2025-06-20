import { PostBar } from "./components/PostBar/PostBar";
import { PostCard } from "./components/PostCard/PostCard";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
    <div className="w-full">

    <Header />
    </div>
    <div className="flex gap-2 xl:gap-10 mt-5  xl:px-72 m-1">
      <div className="hidden md:block">
        <ProfileCard/>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <PostBar/>
        </div>
        <div>
          <PostCard/>
        </div>
      </div>
     
    </div>
    </>
  );
};
