import HomeComponent, {
  AboutComponent,
  ContactComponent,
  ExperienceComponent,
  SkillsComponent
} from "@/components/HomeComponent";
import React, { ComponentType } from 'react';
export interface BaseDirectory {
  component:  ComponentType<any>;
  subDirectories: string[];
}
export interface RootDirectory extends BaseDirectory {
  about: BaseDirectory;
  experience: BaseDirectory;
  skills: BaseDirectory;
  contact: BaseDirectory;
}
export const DIRECTORIES_LIST: RootDirectory = {
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
