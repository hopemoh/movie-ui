"use server";

import { revalidatePath } from "next/cache";

const BASE_URL = "https://bookapi-6soz.onrender.com/api";

export async function addComment(prevData: any, data: FormData) {
  const author = data.get("author");
  const comment = data.get("comment");
  const rating = data.get("rating");
  const movie_id = data.get("movie_id");

  if (!author || !comment || !rating || !movie_id) {
    return {
      type: "error",
      message: "All fields are required!",
    };
  }

  try {
    await fetch(`https://bookapi-6soz.onrender.com/api/reviews/${movie_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        comment,
        rating,
      }),
    });
    // If the fetch is successful, return a success message
    return {
      type: "success",
      message: "Review added successfully!rrrr",
    };
  } catch (error) {
    // If the fetch is unsuccessful, return an error message
    console.log(error);
    return {
      type: "error",
      message: "You can only review once!",
    };
  } finally {
    // Revalidate the page after the fetch is complete
    revalidatePath(`/reviews/${movie_id}`);
  }
}

export const getMoviesAction = async (itemType: string) => {
  try {
    const res = await fetch(
      `https://bookapi-6soz.onrender.com/api/movies?item_type=${itemType}`,
      { next: { revalidate: 5 } }
    );
    const data = res.json();
    return data;
  } catch (e) {
    return { message: "Failed to fetch!" };
  }
};

export const getLimitedMovies = async (itemType: string) => {
  try {
    const res = await fetch(
      `https://bookapi-6soz.onrender.com/api/movies/limited-movies?item_type=${itemType}`,
      { next: { revalidate: 5 } }
    );
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getMovieAction = async (movie_id: string) => {
  try {
    const res = await fetch(
      `https://bookapi-6soz.onrender.com/api/movies/${movie_id}`,
      { next: { revalidate: 5 } }
    );
    return res.json();
  } catch (e) {
    console.log(e);
  }
};
