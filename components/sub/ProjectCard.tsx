import React from "react";
import Image from "next/image";
import { Content } from "next/font/google";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
 
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <a href={link} className="project-card-link">
      <div className="project-card-container">
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#e7df8e] hover:shadow-xl transition-shadow duration-300">
          <div  className="image-container">
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              layout="responsive"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="project-text absolute inset-0 p-4 flex flex-col justify-end bg-black bg-opacity-50">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
