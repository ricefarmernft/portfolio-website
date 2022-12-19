import React from "react";
import {
  GlobalOutlined,
  GithubFilled,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode";

const OpenseaReimbursement = () => {
  return (
    <>
      <DarkMode />
      <div className="back-link">
        <Link className="link back" to="/">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div className="project-title" id="forgotten-apes">
        <h1>Opensea Reimbursement</h1>
      </div>
      <div className="project-logos">
        <a
          href="https://opensea-failed-transactions.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <GlobalOutlined />
        </a>
        <a
          href="https://github.com/ricefarmernft/opensea-failed-transactions"
          target="_blank"
          rel="noreferrer"
        >
          <GithubFilled />
        </a>
      </div>
    </>
  );
};

export default OpenseaReimbursement;
