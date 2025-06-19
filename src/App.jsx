import { PostBar } from "./components/PostBar/PostBar";
import { PostCard } from "./components/PostCard/PostCard";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

export const App = () => {
  return (
    <div className="flex gap-2 m-1 flex-wrap">
      <PostCard />
      <ProfileCard/>
      <PostBar/>
    </div>
  );
};
