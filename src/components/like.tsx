import React, { useState } from "react";
import Movie from "../models/movie-view-mode";

export interface LikeProps {
  movie: Movie;
  onClick: any;
}
export default function Like(props: LikeProps) {
  const [_like, set_like] = useState(0);

  let classes = "fa fa-heart";
  if (!props.movie.liked) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={() => props.onClick()}
    ></i>
  );
}

/*
function Like(props: LikeProps) {
  let classes = "fa fa-heart";
  if (!props.movie.liked) classes += "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={() => props.onClick()}
    ></i>
  );
}
export default Like;
*/
