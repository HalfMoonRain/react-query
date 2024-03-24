import React from "react";
import { usePostQuery } from "./hooks/usePosts";

const ReactQueryPage = () => {
  const { data, isLoading, isError, error, refetch } = usePostQuery();

  console.log(data);

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
      {data?.map((item) => (
        <div>
          <h2>{item.title}</h2>
        </div>
      ))}
      <button onClick={refetch}>post list 다시 들고오기</button>
    </div>
  );
};

export default ReactQueryPage;
