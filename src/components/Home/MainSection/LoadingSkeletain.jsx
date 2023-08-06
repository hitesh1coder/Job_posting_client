import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeletain = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "1rem 0",
      }}
    >
      <Skeleton height={"20vh"} width={"85vw"} />
      <Skeleton height={"20vh"} width={"85vw"} />
      <Skeleton height={"20vh"} width={"85vw"} />
      <Skeleton height={"20vh"} width={"85vw"} />
    </div>
  );
};

export default LoadingSkeletain;
