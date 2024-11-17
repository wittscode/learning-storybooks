import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Rating.css";

const Star = ({ selected, onSelect = (f) => f }) => {
  return (
    <FaStar
      className="star"
      color={selected ? "#FFCB45" : "#F2f2f2"}
      onClick={onSelect}
    />
  );
};

const Rating = ({ number = 5 }) => {
  const [selected, setSelected] = useState(0);

  return [...Array(number)].map((n, i) => (
    <Star key={i} onSelect={() => setSelected(i + 1)} selected={i < selected} />
  ));
};

Rating.propTypes = {
  number: PropTypes.number,
};

export default Rating;
