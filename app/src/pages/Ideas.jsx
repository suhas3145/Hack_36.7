import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "flowbite-react";

import axios from "axios";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const navigate = useNavigate();

  const getAllIdeas = async () => {
    const ideas = await axios.get("/api/ideas/get-all-ideas");
    if (ideas?.data?.success) {
      setIdeas(ideas?.data?.ideas);
    }
  };

  useEffect(() => {
    getAllIdeas();
  }, []);

  const handleClick = ({ ideaId }) => {
    navigate(`/idea/${ideaId}`);
  };

  console.log(ideas);

  return (
    <>
      <div className="flex justify-center ">
        {ideas.map((data) => (
          <>
            <div className="  px-4 mb-4 mt-6">
              <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data?.heading}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {data?.content}
                </p>
                <Button onClick={() => handleClick({ ideaId: data?._id })}>
                  See More About the Idea
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Card>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Ideas;
