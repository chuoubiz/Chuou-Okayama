import React from "react";

import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const corporation = () => {
  return (
    <>
      <Layout id="corporation" title="法人様向けサービスについて">
        <div className="survey_box">
          <div className="survey_txt">
            <h3>企業信用調査</h3>
            <p>
              新しく取引を開始するにあたり、その会社の経営状態、業績、財務状況、規模、成長性、評価など会社の信用度を側面からお調べいたします。
              必要に応じて、代表者の人物性や風評、生活実態なども調査可能です。
            </p>
          </div>
          <img src="/images/corporation_01.jpg" alt="" />
        </div>

        <div className="survey_box">
          <div className="survey_txt">
            <h3>採用調査</h3>
            <p>
              新しく従業員を採用するにあたり、会社に損害を与えるような人物ではないか、面接や履歴書などの表面上では解りにくい、隠された本当の人物性や経歴、評価、思想などを側面からお調べいたします。
            </p>
          </div>
          <img src="/images/corporation_02.jpg" alt="" />
        </div>

        <div className="survey_box">
          <div className="survey_txt">
            <h3>市場調査</h3>
            <p>
              新しくお店を出店したり、開業を検討されておられる方など、交通量や場所、相乗効果などの市場性をプロの視点で情報収集し、成功するための参考資料にお役立ていただけます。
            </p>
          </div>
          <img src="/images/corporation_03.jpg" alt="" />
        </div>

        <div className="survey_box">
          <div className="survey_txt">
            <h3>従業員の素行</h3>
            <p>
              現在、雇用されている従業員の規約違反や不正などの疑いがある場合、該当の従業員の勤務実態などを、分単位で記録し証拠を撮る調査です。
              解雇の際に、不当解雇と主張する事を否定できます。
            </p>
          </div>
          <img src="/images/corporation_04.jpg" alt="" />
        </div>

        <div className="survey_box">
          <div className="survey_txt">
            <h3>危機管理</h3>
            <p>
              会社内での盗聴・盗撮・情報漏洩や不正アクセスなど、大きなトラブルに発展しないための危機管理を行います。
            </p>
          </div>
          <img src="/images/corporation_05.jpg" alt="" />
        </div>

        <div className="survey_box">
          <div className="survey_txt">
            <h3>交通事故調査</h3>
            <p>
              交通事故で双方の言い分の違いからトラブルになるケースをよく耳にします。
              目撃者探しなど、掘り下げて再調査し真実を追求いたします。
            </p>
          </div>
          <img src="/images/corporation_06.jpg" alt="" />
        </div>
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

export default corporation;
