import { useState } from "react";
import { Experience } from "../models";

const useExperienceState = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      Company: "Amity Solutions Co., Ltd",
      JobName: "Full Stack Engineer",
      StartDate: "August 2024",
      EndDate: "February 2025",
      Detail: `- Developed a real-time chatbot system with scalable backend architecture using Node.js and TypeScript, enabling seamless AI-user communication via streaming chat with efficient data processing and responsive user experiences.
- Designed system architectures and created technical specifications for projects, focusing on scalability, efficiency, and clear implementation guidelines while continuously improving technical skills.

- Designed and fine-tuned advanced AI prompts while creating scalable and efficient knowledge bases using OpenAI GPT, improving accuracy and enhancing user interactions.

- Architected and deployed cloud-based solutions with Azure services, leveraging Function Apps for serverless workflows, Queues for message handling, Cosmos DB for scalable databases, and monitoring tools for diagnostics and system health.`,
    },
    {
      Company: "Choco Card Enterprise Co., Ltd.",
      JobName: "Back End Developer",
      StartDate: "April 2024",
      EndDate: "August 2024",
      Detail: `- Developing RESTful APIs using C# ASP.NET Core framework to facilitate communication between the frontend and backend components.

- Developing and managing CRM web applications on the LINE OA incorporating features like campaign management, point redemption, and reward collection into the platform.`,
    },
    {
      Company: "Ascend Group Co., Ltd.",
      JobName: "Software Engineer Intern",
      StartDate: "June 2023",
      EndDate: "February 2024",
      Detail: `- Interned as a Software Engineer, actively contributing to the development of a mutual fund application on the True Money Wallet platform.
- Contributed to the establishment of automated tests using the Robot Framework, ensuring the application's reliability and performance.
- Enhanced testing coverage through the incorporation of unit tests with Jest and Gotest.
- Contributed significantly to the development of API functionalities using RestFulAPI to support microservices architecture.`
    },
    
  ]);

  return [experiences, setExperiences] as const;
};

export default useExperienceState;
