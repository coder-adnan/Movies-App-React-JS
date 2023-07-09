import axios from "axios";
import React, { useEffect, useState } from "react";
import "./trending.css";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrendingData = async () => {
    const { data } = await axios(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    );
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrendingData();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map(c => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
