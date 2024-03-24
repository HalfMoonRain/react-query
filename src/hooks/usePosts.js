import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPost = () => {
  return axios.get(`http://localhost:3004/posts`);
};

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
    retry: 2,
    select: (data) => {
      return data.data;
    },
    enabled: false,
  });
};
