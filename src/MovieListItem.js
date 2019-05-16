import React, { Fragment, useState } from "react";
import { useSpring, animated } from "react-spring";

const MovieListItem = props => {
  const [focus, setFocus] = useState(false);

  const AnimatedImage = animated.img;
  const { width } = useSpring({
    width: focus ? 225 : 200
  });
  return (
    <AnimatedImage
      src={`${process.env.REACT_APP_POSTER_PATH}${props.poster}`}
      alt="foo"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={{ width: width.interpolate(w => w) }}
    />
  );
};

export default MovieListItem;
