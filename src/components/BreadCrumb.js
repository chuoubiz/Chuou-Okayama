import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BreadCrumb = (props) => {
  const siteurl = "https://detective-okayama.biz/";
  return (
    <>
      <div id="breadcrumb">
        <ul
          className="breadcrumb__list"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            className="breadcrumb__item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <FontAwesomeIcon icon={faHouse} />
            <Link to={siteurl} itemProp="item">
              <span itemProp="name">ホーム</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li
            className="breadcrumb__item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <FontAwesomeIcon icon={faAngleRight} />

            <span>{props.title}</span>

            <meta itemProp="position" content="2" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default BreadCrumb;
