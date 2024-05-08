import HomeComponent, {
  AboutComponent,
  ContactComponent,
  ExperienceComponent,
  SkillsComponent
} from "@/components/HomeComponent";

const DIRECTORIES_LIST = {
  component: () => <HomeComponent />,
  subDirectories: ["Home", "About", "Experience", "Skills", "Contact"],
  about: {
    component: () => <AboutComponent />,
    subDirectories: [],
  },
  experience: {
    component: () => <ExperienceComponent />,
    subDirectories: [],
  },
  skills: {
    component: () => <SkillsComponent />,
    subDirectories: [],
  },
  contact: {
    component: () => <ContactComponent />,
    subDirectories: [],
  },
};
export const META_DATA = { 
  title: "Ali Alizada Portfolios Website"

}
export default DIRECTORIES_LIST;
