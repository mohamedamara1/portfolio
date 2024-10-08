import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const projects = [
  {
    name: "El Kharja",
    description:
      "A simple web app for friends or small groups to coordinate their availabilities for events or gatherings.",
    slug: "elkharja",
    tags: ["react", "nextjs", "tailwindcss", "typescript", "Google Sheets API"],
  },
  {
    name: "Google Classroom Automater",
    description:
      "A tool to autoamte the process of downloading Google Classroom resources",
    slug: "google-classroom-automater",
    tags: ["python", "java", "Google Classroom API", "Google Drive API"],
  },
];
export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex-1 min-h-52  bg-gradient-to-b from-slate-700 to-gray-800 p-10 rounded-lg flex flex-col gap-4 "
        >
          {/*   <div className="relative transform transition duration-700 hover:scale-105 rounded">
            <Image
              src="/assets/project_thumbnail.jpg"
              width={500}
              height={250}
              alt="image"
              className="transform transition duration-700 hover:scale-105 rounded"
            />
            <Link
              className="absolute inset-0 flex items-center justify-center"
              href={{
                pathname: `/projects/${project.slug}`,
              }}
            >
              <GoLinkExternal className="text-white text-4xl opacity-75 hover:scale-110 duration-700" />
            </Link>
          </div> */}
          <Link
            className=""
            href={{
              pathname: `/projects/${project.slug}`,
            }}
          >
            <div className="flex flex-col flex-1 gap-4 transform transition duration-700 hover:scale-105 rounded">
              <div className="text-xl text-stone-100 font-semibold">
                {project.name}
              </div>
              <div className=" flex flex-col flex-1 justify-between  gap-4">
                <div className="text-base font-light text-zinc-200">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, index) => (
                    <div
                      className="rounded-xl border px-3 bg-blue-50 h-7"
                      key={index}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
