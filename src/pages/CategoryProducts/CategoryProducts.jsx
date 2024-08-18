import { Link, useParams } from "react-router-dom";
import banner from "../../../public/banner/banner6.jpg";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Card from "../../components/Card";

const CategoryProducts = () => {
  const {categoryName}= useParams();

   const { data, isLoading, refetch, isError, error } = useQuery({
     queryKey: ["category-products"],
     queryFn: async () => {
       const { data } = await axios.get(
         `${
           import.meta.env.VITE_API_URL
         }/categoryProducts/${categoryName}`
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
      <h1 className="text-center font-bold text-2xl">{data[0].category}</h1>

      <div className="grid mt-16 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data?.length > 0 &&
          data?.map((product) => <Card product={product} key={product?._id} />)}
      </div>
    </div>
  );
};

export default CategoryProducts;
