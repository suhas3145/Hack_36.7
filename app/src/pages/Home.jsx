import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Homebg from "/home_bg.jpg";
import calendarbg from "/CalendarView.jpg";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      className="transition-all duration-1000 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="welcome-section">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our Developer Productivity Tool!
        </h1>
        <p className="text-lg mb-4">
          Our platform is your gateway to enhancing productivity and
          collaboration in your development projects. Whether you're a seasoned
          developer or just starting out, we're here to support your journey.
        </p>
        <p className="text-lg mb-4">
          With our tool, you can streamline your coding workflows, manage tasks
          efficiently, and collaborate seamlessly with your team members.
          Whether you're working on frontend, backend, or full-stack projects,
          we've got you covered.
        </p>
        <p className="text-lg">
          Start exploring our features today and elevate your development
          experience to new heights!
        </p>
      </div>
    </motion.div>
  );
}
