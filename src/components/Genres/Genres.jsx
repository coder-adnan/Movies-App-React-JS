import Chip from "@mui/material/Chip";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = genre => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter(g => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = genre => {
    setSelectedGenres(
      selectedGenres.filter(selected => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );
    setGenres(data.genres);
  };
  console.log(genres);
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map(genre => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          color="secondary"
          onClick={() => handleRemove(genre)}
        />
      ))}
      {genres.map(genre => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          color="primary"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
