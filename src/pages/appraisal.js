import React from "react";

import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const appraisal = () => {
  return (
    <>
      <Layout id="appraisal" title="指紋・声紋・筆跡鑑定について">
        <h3 className="subtitle">｢確かな事実｣を証明いたします。</h3>

        <p>
          科学調査を行い、親子関係の事実関係の確認や指紋・声紋・筆跡などを鑑定いたします。
          裁判等で証拠が必要な場合は、依頼者様の主張や事実の立証として、鑑定結果をご活用いただけます。
        </p>

        <h3 className="subtitle">指紋鑑定</h3>
        <div class="flex-wrap">
          <div className="txt_box pr40">
            <p>
              嫌がらせやストーカー被害にあった場合など、特定の人物が行ったという確実な証拠をとるために、
              <br />
              指紋鑑定を行います。
            </p>
            <p>人が触れた物から指紋を検出・鑑定し、事実の特定をいたします。</p>
            <p>
              ストーカー被害による誹謗・中傷が内容の郵便物が届く、車を物色したり傷をつけたりといった悪質な被害が多発しています。
            </p>
            <p>
              他にも何者かが自宅にある金庫を開錠し金品を盗むケースもあります。
            </p>
            <p>
              心あたりのある人物であればサンプルの指紋を検出し照合する事で対象者（犯人）を特定できる調査方法です。
            </p>
          </div>
          <div className="img_box">
            <img src="/images/appraisal_01.jpg" alt="" />
          </div>
        </div>

        <h4 className="bold blue txt20 mtb30">こんな場合に指紋鑑定を･･･</h4>
        <ul className="list_check">
          <li>
            <FontAwesomeIcon icon={faCheck} />
            嫌がらせ・ストーカー被害を受けている
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            車へのいたずら、ゴミの不法投棄等、嫌がらせを受けている
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            盗難・空き巣などの被害を受け、犯人を特定したい
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            警察が介入しにくい事件での犯人特定をしたい
          </li>
        </ul>

        <h3 className="subtitle">声紋鑑定</h3>
        <div class="flex-wrap">
          <div className="txt_box pr40">
            <p>
              電話でのストーカー被害や嫌がらせ被害にあった場合、残された音声から相手を特定します。
            </p>
            <p>
              証拠として立証するため、声の特徴や声を分析した波形から、人物を特定するための鑑定をおこないます。
            </p>
            <p>
              嫌がらせ被害が多発している中、昼夜を問わず、いたずら電話による被害が最も多くのご相談をいただいております。
              <br />
              （非通知によるいたずら電話撃退法は嫌がらせ・ストーカー対策ページに掲載しております）
            </p>
            <p>
              心あたりのある人物、または可能性のある人物の会話を録音し声紋を鑑定することで犯人を特定できる可能性がある調査です。
            </p>
          </div>
          <div className="img_box">
            <img src="/images/appraisal_02.jpg" alt="" />
          </div>
        </div>
        <h3 className="subtitle">筆跡鑑定</h3>
        <div class="flex-wrap">
          <div className="txt_box pr40">
            <p>
              複数の筆跡を比較・検査し、文字を書いた筆者が同一人物によるものかを特定するために行います。
            </p>
            <p>人は文字を書く際に、さまざまな特徴や固有の癖があります。</p>
            <p>
              この筆跡に現れる個人の特徴をを科学的に分析し、書かれた文書が同一人によるものなのか否かを識別します。
            </p>
            <p>
              文章を客観的に分析することで、遺言書の筆跡が本人によって書かれたものかどうか、その真偽を鑑定いたします。
            </p>
          </div>
          <div className="img_box">
            <img src="/images/appraisal_03.jpg" alt="" />
          </div>
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

export default appraisal;
