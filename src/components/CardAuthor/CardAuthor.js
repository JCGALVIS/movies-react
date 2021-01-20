import PropTypes from "prop-types";

import { Card } from "../Card/Card";
import { useFecthMovieCredits } from "../../hooks/useFecthMovieCredits";

import "./cardAuthor.scss";

export const CardAuthor = ({ movieId }) => {
  const { data: authors } = useFecthMovieCredits(movieId);

  console.log(authors);

  return (
    <div className="card-author-content">
      {authors.map((author) => (
        <Card key={author.id} {...author} />
      ))}
    </div>
  );
};

CardAuthor.protoTypes = {
  movieId: PropTypes.number.isRequired,
};
