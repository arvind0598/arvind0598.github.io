export type Experience = {
  jobTitle: string;
  employmentType: 'Full Time' | 'Internship',
  companyName: string;
  companyLocation: string;
  currentlyWorking: boolean;
  startDate: string;
  endDate?: string;
  description: string[];
  techStack: string[];
};
