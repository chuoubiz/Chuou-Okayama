import React from "react";

const MainimageSub = (props) => {
  return (
    <>
      <div id="mainimage_sub">
        {props.parentTitle ? (
          <h2>{props.parentTitle}</h2> // parentTitleが存在する場合
        ) : (
          <h2>{props.title}</h2> // parentTitleが存在しない場合
        )}
      </div>
    </>
  );
};

export default MainimageSub;
