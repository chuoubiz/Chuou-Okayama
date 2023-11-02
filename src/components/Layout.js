import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTop from "./PageTop";
import FootBt from "./FootBt";
import MainimageSub from "./MainimageSub";
import BreadCrumb from "./BreadCrumb";
import ContactParts from "./ContactParts";
import BreadCrumbParent from "./BreadCrumbParent";

const Layout = ({ children, title, id, slug, parentTitle, sections }) => {
  return (
    <>
      <Header />
      <PageTop />
      <FootBt />
      <main role="main" id="subpage">
        {parentTitle ? (
          <MainimageSub parentTitle={parentTitle} />
        ) : (
          <MainimageSub title={title} />
        )}

        {parentTitle ? (
          <BreadCrumbParent
            title={title}
            slug={slug}
            parentTitle={parentTitle}
          /> // parentTitleが存在する場合
        ) : (
          <BreadCrumb title={title} /> // parentTitleが存在しない場合
        )}
        {sections ? (
          children // sectionsがある場合、childrenをそのまま表示
        ) : (
          <section id={id}>
            <div className="main-content">{children}</div>
          </section>
        )}

        <ContactParts />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
