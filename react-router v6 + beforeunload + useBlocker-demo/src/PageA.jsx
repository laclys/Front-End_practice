import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCustomPrompt from "./hooks/useCustomPrompt";

const PageA = () => {
  useCustomPrompt({
    when: true,
    message: "Are you sure you want to leave this page?",
  });
  return (
    <div>
      <h1>PageA</h1>
      <Link to={"/B"}>Go to Page B</Link>
    </div>
  );
};

export default PageA;
