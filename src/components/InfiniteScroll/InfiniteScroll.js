import React, { useEffect, useState } from "react";

export const InfiniteScroll = ({ height, setStateInfinitiScroll }) => {
  const [stateLoading, setStateLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= height) {
        setStateInfinitiScroll(true);
        setStateLoading(true);
      } else {
        setStateInfinitiScroll(false);
        setStateLoading(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [height, setStateInfinitiScroll]);

  return <div className="loading-content">{stateLoading ? <span>Loading...</span> : null}</div>;
};
