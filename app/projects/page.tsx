const projects = [
  { name: "Project 1", description: "This is project 1" },
  { name: "Project 2", description: "This is project 2" },
  { name: "Project 3", description: "This is project 3" },
];
export default function Projects() {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>{project.name}</div>
      ))}
    </div>
  );
}
