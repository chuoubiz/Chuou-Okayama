import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import MainimageSub from "../components/MainimageSub";
import BreadCrumb from "../components/BreadCrumb";
const NotFound = () => {
  return (
    <>
      <Layout>
        <MainimageSub title="404 ページが見つかりません" />
        <BreadCrumb title="お探しの記事は見つかりませんでした。" />
        <section id="sub-page">
          <div className="main-content">
            <h3 className="page_title01 center mt0">
              お探しの記事は見つかりませんでした。
            </h3>
            <p className="center">
              総合探偵社中央リサーチ岡山のWEBサイトをご覧頂きありがとうございます。
              <br />
              大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。
              <br />
              お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。
            </p>
            <p className="center">
              <Link to="/" className="bt02">
                トップページへ戻る
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <Seo
      title="ページが見つかりません"
      description="お探しのページは、移動または削除された可能性があります。"
      article={true}
    />
  </>
);

export default NotFound;
