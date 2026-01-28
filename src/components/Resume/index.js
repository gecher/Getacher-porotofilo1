import { Briefcase, Code, Star } from "lucide-react";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen px-6 py-12 bg-gray-900 text-white sm:ml-[25%]">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Resume 📄</h2>
        <p className="mt-3 text-gray-400 text-lg">My experience, expertise, and achievements</p>
      </div>

      {/* Resume Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 lg:max-w-5xl mx-auto">
        
        {/* Left: Work Experience & Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-2 text-blue-500" /> Work Experience
          </h3>
          <div className="space-y-6">
            {/* Experience Card */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold">Full Stack Developer</h4>
              <p className="text-sm text-gray-400">Ethiopian Airlines - Jan 2022 - Present</p>
              <p className="mt-3 text-gray-300">
                Designing and developing scalable enterprise applications, e-services, and workflow automation tools using .NET, React.js, and SQL Server. Implementing RESTful APIs, cloud solutions, and performance optimization strategies.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold">Backend Developer</h4>
              <p className="text-sm text-gray-400">Blue Vibe System Solution - 2020 - 2021</p>
              <p className="mt-3 text-gray-300">
                Developed and maintained RESTful APIs, implemented business logic, and integrated with databases using C#, .NET Core, and SQL Server. Focused on optimizing performance, ensuring scalability, and maintaining secure server-side architectures. 
              </p>
            </div>
          </div>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
            <Code className="mr-2 text-green-500" /> Technical Skills
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              "C# & .NET Core", "React.js & Next.js", "TypeScript & JavaScript",
              "SQL & NoSQL Databases", "Entity Framework Core", "REST & GraphQL APIs",
              "Microservices Architecture", "Cloud Deployment (Azure, AWS)", "Docker & Kubernetes",
              "CI/CD Pipelines", "Unit & Integration Testing", "Tailwind CSS & MUI",
              "Agile & Scrum", "Version Control (Git, GitHub, GitLab)", "Power Automate"
            ].map((skill, index) => (
              <li key={index} className="bg-gray-800 px-4 py-2 rounded-lg text-center hover:bg-gray-700 transition">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Star className="mr-2 text-yellow-500" /> Achievements
          </h3>
          <div className="space-y-6">
            {/* Achievement Card */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold">Power Automate Document Collaboration and Approval Process</h4>
              <p className="text-sm text-gray-400">2023</p>
              <p className="mt-3 text-gray-300">
                Implemented a document collaboration and approval workflow using Power Automate, SharePoint, and Microsoft Flow. This system automated document review, approval, and sharing processes, greatly improving team collaboration and operational efficiency.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold">Automated E-Procurement System for Ethiopian Airlines</h4>
              <p className="text-sm text-gray-400">2024</p>
              <p className="mt-3 text-gray-300">
                Led the automation of the E-Procurement system at Ethiopian Airlines, significantly improving procurement efficiency and reducing manual processes. This system enhanced transparency, reduced operational overhead, and streamlined procurement workflows.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold">Developed E-Service System for Ethiopian Civil Aviation</h4>
              <p className="text-sm text-gray-400">2025</p>
              <p className="mt-3 text-gray-300">
                Led the development of an innovative e-service platform for Ethiopian Civil Aviation, enabling seamless digital interactions and improving operational efficiency within the aviation sector.
              </p>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
}
