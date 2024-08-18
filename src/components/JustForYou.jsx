




import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "./Spinner";
import Card from "./Card";

const JustForYou = () => {

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["just-for-you"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/just-for-you`
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Just For You</h1>

      <div className="grid mt-16 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data?.length > 0 &&
          data?.map((product) => <Card product={product} key={product?._id} />)}
      </div>
    </div>
  );
};

export default JustForYou;
