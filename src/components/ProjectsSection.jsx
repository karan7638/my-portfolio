import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TechZNews - Live Tech News Website",
    description: "Developed a responsive web app using HTML, CSS, JavaScript and React to fetch live tech news from NewsAPI. Integrated loading spinners, error handling, and dynamic rendering to enhance UX.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript","React", "NewsAPI"],
    // demoUrl: "https://hiring-search.careerflow.ai/",
    githubUrl: "https://github.com/karan7638/TECHzNEWS",
  },
  {
    id: 2,
    title: "Trackonomy - MERN Stack App",
    description: "Trackonomy is a full-stack MERN application developed to provide users with a comprehensive expense tracking and management solution. The platform enables seamless recording, categorization, and analysis of financial transactions, empowering users to gain deeper insights into their spending patterns and make informed budgeting decisions. Its robust architecture ensures scalability, responsiveness, and an intuitive user experience.",
    image: "/projects/project2.png",
    tags: ["MERN Stack", "JWT", "React Router", "MongoDB"],
    // demoUrl: "#",
    githubUrl: "https://github.com/karan7638/Trackonomy",
  },
  {
    id: 3,
    title: "CareerLynk - Full Stack Project",
    description: "CareerLynk is a job portal with separate dashboards for recruiters and students. Recruiters can post jobs and manage applicants, while students can search and apply for jobs tailored to their skills and preferences. It’s designed to simplify the hiring process and help users find the perfect match quickly.",
    image: "/projects/project3.png",
    tags: ["MERN Stack", "Role-Based Access", "RESTful APIs", "React"],
    // demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in full-stack development,
          user interface design, and problem-solving abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/karan7638"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
