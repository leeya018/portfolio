import { Project } from "@/interfaces/Project";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Project | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) return;
  return (
    <div className="p-6   duration-300 relative">
      <h2 className="text-2xl font-semibold">{project.name}</h2>
      <p className="mt-2">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-2 mt-4">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={project.name}
            className="w-full h-auto rounded hover:scale-110 duration-1000"
          />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href={project.link}
          target="_blank"
          className=" text-blue-500 hover:text-blue-600 text-xl hover:underline"
        >
          <span>Go to site</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
