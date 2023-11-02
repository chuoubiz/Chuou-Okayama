import React, { useState } from "react";

const Nav = ({ navClicked }) => {
  const [hasChildActive, setHasChildActive] = useState(false);
  const hNavClassName = navClicked ? "h_nav panelactive" : "h_nav";
  const handleHasChildClick = () => {
    setHasChildActive(!hasChildActive);
  };

  return (
    <>
      <nav className={hNavClassName} id="g-nav">
        <ul className="nav">
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/reason/">選ばれる理由</a>
          </li>
          <li
            className={`has-child ${hasChildActive ? "active" : ""}`}
            onClick={handleHasChildClick}
          >
            <a>調査項目</a>
            <ul>
              <li>
                <a href="/unfaithful/">浮気･不倫調査</a>
              </li>
              <li>
                <a href="/evidence/">裁判証拠収集</a>
              </li>
              <li>
                <a href="/survey/">結婚・身上調査</a>
              </li>
              <li>
                <a href="/spying/">素行調査</a>
              </li>
              <li>
                <a href="/whereabouts/">家出・所在調査</a>
              </li>
              <li>
                <a href="/harassment/">嫌がらせ対策</a>
              </li>
              <li>
                <a href="/wiretap/">盗聴器発見</a>
              </li>
              <li>
                <a href="/appraisal/">指紋･声紋･筆跡鑑定</a>
              </li>
              <li>
                <a href="/corporation/">法人様向けサービス</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/flow/#nagare">ご依頼の流れ</a>
          </li>
          <li>
            <a href="/price/">料金表</a>
          </li>
          <li>
            <a href="/case/">調査事例</a>
          </li>
          <li>
            <a href="/company/">会社概要</a>
          </li>
          <li>
            <a href="/toiawase/">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
