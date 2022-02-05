import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FindMoviesByKeywords } from "../components/Movies/FindByKeyWords";
import { getKeywords } from "../services/MoviesApi";
import { Loader } from "../components/Loader/Loader";

export const FindMovie = () => {
  
  
    return (
        <main>
          <FindMoviesByKeywords />
          <Outlet />
        </main>
    )
}