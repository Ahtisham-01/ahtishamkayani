import userData from "./constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-transparent  p-4">
      <div className="w-full max-w-[1280px] mx-auto  md:h-48 bg-transparent ">
        <h1 className=" text-5xl md:text-8xl  font-bold md:py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-transparent  -mt-4">
        <div className="grid grid-cols-1  max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 pointer rounded-full relative z-10">
                    <div className="w-4 h-4 pointer rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className=" text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
    <div className="relative experience-card border p-4 rounded-md shadow-xl bd  z-10 mx-4">
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
    </div>
  );
};
