import Image from "next/image";

const projects = [
  {
    name: "Dolor irure ut ad irure Lorem ut et nulla.",
    description:
      "Lorem aliqua et dolore ex labore anim cillum non fugiat. Mollit aliqua pariatur mollit in sit pariatur consectetur duis tempor occaecat mollit est ad sunt. Velit amet consectetur et voluptate reprehenderit irure fugiat eiusmod aliquip.",
    tags: ["react", "react", "react", "react", "react", "react", "typescript"],
  },
  {
    name: "Cillum esse magna elit reprehenderit.",
    description:
      "Sit consequat nulla ut velit minim velit irure enim aliqua. Sit minim quis consectetur aliquip voluptate nisi duis consectetur excepteur enim mollit ad. Consectetur eiusmod esse in ut velit fugiat anim minim excepteur duis in.",
    tags: ["react", "typescript"],
  },
  { name: "Project 3", description: "This is project 3", tags: ["react"] },
];
export default function Projects() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="min-h-60  bg-gradient-to-b from-slate-700 to-gray-800 p-10 rounded-lg flex flex-col gap-4"
        >
          <Image
            src="/assets/project_thumbnail.jpg"
            width={500}
            height={250}
            alt="image"
            className="transform transition duration-700 hover:scale-105 rounded"
          />

          <div className="flex flex-col gap-4">
            <div className="text-3xl text-stone-100 font-semibold">
              {project.name}
            </div>
            <div className="text-xl font-medium text-zinc-200">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <div className="rounded-xl border px-3 bg-blue-50" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
