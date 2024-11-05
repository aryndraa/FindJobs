import React from "react";
import ProjectHeader from "../components/molecules/ProjectHeader";
import SkillsList from "../components/molecules/SkillsList";
import ContactInfo from "../components/molecules/ContactInfo";
import RelatedProjects from "../components/molecules/RelatedProject";
import ProjectDetails from "../components/molecules/ProjectDetails";
import BreadCrumbs from "../components/molecules/BreadCrumbs";
const DetailsProject = () => {
  const breadLink = [
    {
      url: "/",
      name: "home",
    },
    {
      url: "/project",
      name: "project",
    },
    {
      url: "/project/details-project",
      name: "project details",
    },
  ]
  return (
    <div className="mx-7 lg:mx-16 px-4 py-[7rem]">
      <BreadCrumbs breadLink={breadLink} />
      <div className="md:flex md:space-x-8">
        <div className="md:w-2/3">
          <ProjectHeader />
          <SkillsList />
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0">
          <ProjectDetails />
          <ContactInfo />
        </div>
      </div>

      <div className="mt-8">
      <h1 className="text-2xl font-semibold">You May Also Like</h1>
      <p className="text-secondary text-[15px] mt-1">
        Let's find out more project!
      </p>
        <RelatedProjects />
      </div>
    </div>
  );
};

export default DetailsProject;
