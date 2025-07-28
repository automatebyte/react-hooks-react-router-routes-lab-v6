import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { movies } from "../data";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </>
  );
};

export default Home;
