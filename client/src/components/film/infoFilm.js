import { Link } from "react-router-dom";

function Film({ film }) {
  return (
    <>
      <div className="film">
        <div className="SoloFilm">
          <img className="imgFilm" src={film.img} />
          <div className="SoloFilmInfo">
            <div className="SoloFilmName">{film.name}</div>
            <div className="filmDescription">{film.description}</div>
            <div className="GenreFilm">Жанр: {film.genreId.name}</div>
            <div className="ratingFilm"> Оценка фильма: {film.rating}</div>
          </div>
        </div>
      </div>
      <div className="playDiv">
        <iframe
           className="play"
          src="https://www.youtube.com/embed/gbcVZgO4n4E"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen

        ></iframe>
      </div>
    </>
  );
}
export default Film;
