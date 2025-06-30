import { Analytics } from "../../components/analytics/Analytics";
import { JobCard } from "../../components/jobcard/JobCard";
import { JobUpdates } from "../../components/jobupdates/JobUpdates";
import { ProfileCard } from "../../components/profilecard/ProfileCard";
import { Shortcuts } from "../../components/shortcuts/Shortcuts";
import { jobList } from "../../data/jobs";

export const Jobs = () => {
  return (
    <>
     <div className="w-full">
       
          </div>
          <div className="flex gap-2 lg:gap-1 xl:gap-10 mt-2 xl:mx-48 lg:mx-auto md:pt-14    m-1">
            <div className="hidden md:flex flex-col gap-2">
              <ProfileCard />
              <Analytics />
              <Shortcuts />
            </div>
            <div className="flex flex-col gap-4">
              
              <div>
               <JobCard jobs={jobList} />
              </div>
            </div>
    
            <div className="hidden lg:block">
              <JobUpdates />
            </div>
          </div>
      
    </>
  );
};
