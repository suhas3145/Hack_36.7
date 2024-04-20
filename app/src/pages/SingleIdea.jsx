import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import { Card } from "flowbite-react";

const SingleIdea = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [developer, setDeveloper] = useState();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const { ideaId } = useParams();

  const getSingleIdea = async (e) => {
    e.preventDefault();

    const res = await axios.get(`/api/ideas/single-idea/${ideaId}}`);
    if (res?.data?.success) {
      setHeading(res?.data?.idea?.heading);
      setContent(res?.data?.idea?.content);
      setDeveloper(res?.data?.reatedBy?.username);
      setEmail(res?.data?.createdBy?.email);
      console.log(res?.data);
    }
  };

  useEffect(() => {
    setLoading(true);
    getSingleIdea();
    setLoading(false);
  }, [loading]);
  console.log(developer);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h5>
      <h2>Name : {developer}</h2>
      <h2>Email: {email}</h2>
      <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
    </Card>
  );
};

export default SingleIdea;
