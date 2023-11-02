import React from "react";
import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ReasonParts from "../components/ReasonParts";

const reason = () => {
  return (
    <>
      <Layout id="reason" title="当探偵社が選ばれる理由">
        <ReasonParts />
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <body className="subpage" />
    <Seo />
  </>
);

export default reason;
