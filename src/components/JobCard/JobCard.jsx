import { HiOutlineShieldCheck } from "react-icons/hi";

export const JobCard = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="border w-[500px] h-[500px] rounded-md p-5">
        <div className="border-b pb-4">
          <div className="flex gap-1">
            <div className="flex items-center justify-center gap-1">
              <img
                className="w-14 h-14"
                src="https://media.licdn.com/dms/image/v2/C4D0BAQHPYzYaRLYvJg/company-logo_100_100/company-logo_100_100/0/1653291417459/litmus7inc_logo?e=1756339200&v=beta&t=4g2I0K_L9vUe9i12yTxUHmm6UlOnxcOmC4dlT3Hhwvg"
                alt="company logo"
              />
            </div>
            <div>
              <h1 className="text-blue-600 font-bold flex gap-1 items-center">
                Mern Stack Developer
                <HiOutlineShieldCheck className="text-gray-600" />
              </h1>{" "}
              <p className="text-sm">
                Litmus7 • Kochi, Kerala, India (On-site)
              </p>
              <p className="text-xs text-gray-500">7 days ago</p>
              <p className="text-xs font-bold cursor-pointer hover:text-blue-600 text-blue-500">
                Easy Apply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
