import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      className="p-4 transition-all duration-1000"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-4">
        About Our Developer Productivity Tool
      </h1>
      <p className="text-lg mb-4">
        Our Developer Productivity Tool is a platform meticulously crafted to
        boost efficiency and collaboration among developers and project
        managers. We strive to streamline the process of code development,
        collaboration, and project management.
      </p>
      <p className="text-lg mb-4">
        For developers, we offer a comprehensive set of features to enhance
        coding workflows. Whether you're working on frontend, backend, or
        full-stack projects, our tool provides the necessary resources to
        accelerate development.
      </p>
      <p className="text-lg mb-4">
        For project managers, we provide powerful tools to facilitate team
        coordination and project oversight. From task assignment to progress
        tracking, our platform empowers project managers to efficiently manage
        and monitor project timelines and milestones.
      </p>
      <p className="text-lg">
        Join us today and revolutionize the way you approach software
        development and project management!
      </p>
    </motion.div>
  );
}
