import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const ReactQueryPage = () => {
  const fetchPost = () => {
    return axios.get("http://localhost:3004/posts");
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
    retry: 2,
    select: (data) => {
      return data.data;
    },
  });
  console.log("data:");
  console.log(data);
  console.log(isLoading, isError, error);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      {data.map((item) => (
        <div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ReactQueryPage;
