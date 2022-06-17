import React from "react";
import ProjectsSection from "../components/projects/ProjectsSection";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [0,1.1 ,1] }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 , type:"spring"}}
    >
      <ProjectsSection />
    </motion.div>
  );
}

export default Projects;
