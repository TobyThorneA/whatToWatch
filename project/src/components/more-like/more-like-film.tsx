import { Link } from 'react-router-dom';
import { FilmCard } from '../../types';

function MoreLikeFilm(dataFilm: FilmCard) {
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={`/films/${dataFilm.id}`}>
        <div className="small-film-card__image">
          <img src={dataFilm.img} alt={dataFilm.name} width="280" height="175" />
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link"
          to={`/films/${dataFilm.id}`}
        >{dataFilm.name}
        </Link>
      </h3>
    </article>
  );
}

export default MoreLikeFilm;
