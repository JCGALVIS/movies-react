import React, { useState } from "react";

import { CardMovies } from "../../components/CardMovies/CardMovies";
import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import { useWindowSize } from "../../hooks/useWindowSize";

export const MoviesList = () => {
  const { height } = useWindowSize();
  const [stateInfinitiScroll, setStateInfinitiScroll] = useState(false);
  const page = 1;

  return (
    <>
      <CardMovies page={stateInfinitiScroll ? page + 1: null} />
      <InfiniteScroll
        height={height}
        setStateInfinitiScroll={setStateInfinitiScroll}
      />
    </>
  );
};
