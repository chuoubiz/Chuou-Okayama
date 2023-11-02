import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div id="footer-inner">
          <div className="f_logo">
            <a href="/">
              <img
                src="/images/foot_logo.png"
                alt="総合探偵社 中央リサーチ岡山"
                className="opa"
              />
            </a>
          </div>
          <nav className="f_nav">
            <ul>
              <li>
                <a href="/">中央リサーチ岡山トップ</a>
              </li>
              <li>
                <a href="/reason/">当社が選ばれる理由</a>
              </li>
              <li>
                <a href="/company/">会社概要</a>
              </li>
              <li>
                <a href="/case/">事例紹介</a>
              </li>
              <li>
                <a href="/price/">料金表</a>
              </li>
              <li>
                <a href="/recruit/">採用情報</a>
              </li>
              <li>
                <a href="/toiawase/">お問い合わせ</a>
              </li>
              <li>
                <a href="/privacy/">プライバシーポリシー</a>
              </li>
              <li>
                <a href="/sitemap/">サイトマップ</a>
              </li>
              <li>
                <a href="/flow/">はじめての方</a>
              </li>
              <li>
                <a href="/unfaithful/">浮気・不倫調査</a>
              </li>
              <li>
                <a href="/spying/">素行調査</a>
              </li>
              <li>
                <a href="/evidence/">裁判証拠収集</a>
              </li>
              <li>
                <a href="/survey/">結婚・身上調査</a>
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
                <a href="/appraisal/">指紋・筆跡鑑定</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="address">
          Copyright &copy; 総合探偵社中央リサーチ岡山 rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
