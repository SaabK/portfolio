export interface experience {
  heading: string;
  sub_heading: string;
  icon: string;
  experienceList: string[];
}

export interface project {
  name: string;
  image: string;
  description: string;
  tags: string[];
}

export interface social {
  name: string;
  href: string;
  icon: string;
}

export interface IExperienceCard {
  key: number;
  experience: experience;
}

export interface IProject {
  project: project;
}

export interface ISocialIcon {
  social: social;
}
