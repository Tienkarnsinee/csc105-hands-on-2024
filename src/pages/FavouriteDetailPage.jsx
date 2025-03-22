import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function FavouriteDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl text-center mt-4">Favourite Detail Page</h1>
      <p className="text-center mt-2">
        Your favourite post is <strong>{q}</strong>. 
        Post ID is <strong>{id}</strong>.
        Size is <strong>{size}</strong>.
      </p>
    </div>
  );
}

export default FavouriteDetailPage;
