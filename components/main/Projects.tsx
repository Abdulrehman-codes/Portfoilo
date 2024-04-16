import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center gap-10 px-10">
        <ProjectCard
          src="/gesture.png"
          title="Gesturely"
          description="Gesturely is a cutting-edge mobile application designed to enhance user experience by allowing intuitive control of smartphones through hand gestures."
          link="https://github.com/Abdulrehman-codes/.Gesturely"
          
        />
        <ProjectCard
          src="/heart.jpeg"
          title="Arrthymia Detection"
          description="This project corresponds to the collecting,preprocessing,visualizing, and data analysis of ECG dataset."
          link="https://medium.com/stackademic/introduction-to-data-analysis-and-dimensionality-reduction-using-ecg-dataset-for-arrhythmia-21af0b41e295"
         
        />
        <ProjectCard
          src="/webscrapper.webp"
          title="Web Scrapper"
          description="Our web scraper is a versatile tool, developed in Python, that retrieves images, text, and videos from websites with ease."
          link="https://github.com/Abdulrehman-codes/Scrapper"
          
        />
        <ProjectCard
          src="/valo.png"
          title="Valorant Rank Predictor"
          description="This is an R/R Shiny Project based on Valorant Leaderboard Data 2021. Which predicts ranks based on stats"
          link="https://github.com/Mirxa08/Valorant-Rank-Predictor"
        
        />
        <ProjectCard
          src="/annotation.png"
          title="Data Annotation using LLM"
          description="This is an annotation project that uses Gemini API to annotate the text data"
          link="https://github.com/Abdulrehman-codes/Text-Annotator"
         
        />
        
      </div>
    </div>
  );
};

export default Projects;
