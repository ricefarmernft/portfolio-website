import React from "react";
import {
  GlobalOutlined,
  GithubFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode";

const TargaryenFamilyTree = () => {
  return (
    <>
      <DarkMode />
      <div className="back-link">
        <Link className="link back" to="/">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div className="project-title" id="forgotten-apes">
        <h1>Targaryen Family Tree</h1>
      </div>
      <div className="project-logos">
        <a
          href="https://targaryen-family-tree.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <GlobalOutlined />
        </a>
        <a
          href="https://github.com/ricefarmernft/targaryen-family-tree"
          target="_blank"
          rel="noreferrer"
        >
          <GithubFilled />
        </a>
      </div>
    </>
  );
};

export default TargaryenFamilyTree;
