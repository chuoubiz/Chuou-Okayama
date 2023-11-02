import React from "react";
import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export const Head = () => (
  <>
    <body className="subpage" />
    <Seo />
  </>
);

const price = () => {
  return (
    <>
      <Layout id="price" title="調査料金">
        <div className="white_box">
          <div className="txt_box">
            <h3>
              「迅速」「適正」「確実」をモットーに
              <br />
              安心できる真心調査を行います。
            </h3>
            <p>
              総合探偵社中央リサーチ岡山ではお客様を不安にさせる様なあいまいな料金表示や
              <br />
              請求方法は一切行いません。
            </p>
            <p>まずはお気軽にご相談ください。</p>
          </div>
          <div className="img_box">
            <img src="/images/price_img01.jpg" alt="" />
          </div>
        </div>

        <h2 className="mt60">料金表</h2>

        <p className="txt_r">※表示は本体（税込）価格</p>

        <p className="smp center mb0">
          <FontAwesomeIcon icon={faCaretLeft} />
          左右にスライドできます
          <FontAwesomeIcon icon={faCaretRight} />
        </p>
        <div class="slide_table">
          <table className="table_price">
            <thead>
              <tr>
                <th colSpan={2}>項目</th>
                <th>金額</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={4}>浮気・不倫・素行調査</th>
              </tr>
              <tr>
                <td rowSpan={3}>
                  調査員2名
                  <br />
                  車両1～2台
                </td>
                <td>
                  基本単価
                  <br />
                  （1時間毎）
                </td>
                <td>
                  1万円
                  <br />
                  <span className="txt12">(税込11,000円)</span>
                </td>
                <td>
                  延長単価　1万2千円
                  <span className="txt12">(税込13,200円)</span>（1時間毎）
                </td>
              </tr>
              <tr>
                <td>20時間プラン</td>
                <td>
                  19万円
                  <br />
                  <span className="txt12">(税込209,000円)</span>
                </td>
                <td>行動調査実働3～7日目安</td>
              </tr>
              <tr>
                <td>30時間プラン</td>
                <td>
                  28万円
                  <br />
                  <span className="txt12">(税込308,000円)</span>
                </td>
                <td>行動調査実働5～10日目安</td>
              </tr>
              <tr>
                <td rowSpan={3}>
                  調査員3名
                  <br />
                  車両2～3台
                </td>
                <td>
                  基本単価
                  <br />
                  （1時間毎）
                </td>
                <td>
                  1万5千円
                  <br />
                  <span className="txt12">(税込16,500円)</span>
                </td>
                <td>
                  延長単価　1万7千円
                  <br />
                  <span className="txt12">(税込18,700円)</span>（1時間毎）
                </td>
              </tr>
              <tr>
                <td>20時間プラン</td>
                <td>
                  28万円
                  <br />
                  <span className="txt12">(税込308,000円)</span>
                </td>
                <td>行動調査実働3～7日目安</td>
              </tr>
              <tr>
                <td>30時間プラン</td>
                <td>
                  42万円
                  <br />
                  <span className="txt12">(税込462,000円)</span>
                </td>
                <td>行動調査実働5～10日目安</td>
              </tr>
              <tr>
                <td>
                  成功報酬
                  <br />
                  プラン
                </td>
                <td>
                  不貞の証拠
                  <br />
                  取得時に適応
                </td>
                <td style={{ whiteSpace: "nowrap" }}>別途お見積り</td>
                <td>
                  調査期間 最大3ヶ月
                  <br />
                  ※ご契約につきましては内容に応じ弊社の基準にて適応致します。
                </td>
              </tr>
              <tr>
                <th colSpan={4}>結婚・身上調査</th>
              </tr>
              <tr>
                <td>家族事項</td>
                <td>１家族につき</td>
                <td>
                  20万円
                  <br />
                  <span className="txt12">(税込220,000円)</span>
                </td>
                <td rowSpan={3}>
                  人物性・風評・生活実態・職業・資産・健康・思想等。
                  <br />
                  調査期間1～2週間程度。
                </td>
              </tr>
              <tr>
                <td>父方事項</td>
                <td>１家族につき</td>
                <td>
                  10万円
                  <br />
                  <span className="txt12">(税込110,000円)</span>
                </td>
              </tr>
              <tr>
                <td>母方事項</td>
                <td>１家族につき</td>
                <td>
                  10万円
                  <br />
                  <span className="txt12">(税込110,000円)</span>
                </td>
              </tr>
              <tr>
                <th colSpan={4}>家出・所在調査</th>
              </tr>
              <tr>
                <td>所在調査</td>
                <td>対象者1名につき</td>
                <td>
                  15万円
                  <br />
                  <span className="txt12">(税込165,000円)</span>
                </td>
                <td rowSpan={2}>調査期間２週間程度。</td>
              </tr>
              <tr>
                <td>家出調査</td>
                <td>対象者1名につき</td>
                <td>
                  25万円
                  <br />
                  <span className="txt12">(税込275,000円)</span>
                </td>
              </tr>
              <tr>
                <td>
                  成功報酬
                  <br />
                  プラン
                </td>
                <td>本人発見時適応</td>
                <td>別途お見積り</td>
                <td>
                  調査期間 最大3ヶ月
                  <br />
                  ※ご契約につきましては内容に応じ弊社の基準にて適応致します。
                </td>
              </tr>
              <tr>
                <th colSpan={4}>盗聴・盗撮器発見</th>
              </tr>
              <tr>
                <td>宅内及び周辺の盗聴器等有無確認</td>
                <td>1回につき</td>
                <td>
                  6万円
                  <br />
                  <span className="txt12">(税込66,000円)</span>
                </td>
                <td>規模により別途見積り。</td>
              </tr>
              <tr>
                <td>
                  車両のGPS発信機
                  <br />
                  盗聴器等有無確認
                </td>
                <td>1回につき</td>
                <td>
                  3万円
                  <br />
                  <span className="txt12">(税込33,000円)</span>
                </td>
                <td>自家用車及び社用車を対象とする。</td>
              </tr>
              <tr>
                <th colSpan={4}>その他の調査</th>
              </tr>
              <tr>
                <td>嫌がらせ対策</td>
                <td>１事案につき</td>
                <td>
                  20万円
                  <br />
                  <span className="txt12">(税込220,000円)</span>
                </td>
                <td>調査期間２週間程度。</td>
              </tr>
              <tr>
                <td>いじめ問題</td>
                <td>１事案につき</td>
                <td>
                  20万円
                  <br />
                  <span className="txt12">(税込220,000円)</span>
                </td>
                <td>調査期間２週間程度。</td>
              </tr>
              <tr>
                <td>科学的調査</td>
                <td>１鑑定につき</td>
                <td>
                  20万円
                  <br />
                  <span className="txt12">(税込220,000円)</span>
                </td>
                <td>指紋・声紋・筆跡鑑定等。</td>
              </tr>
              <tr>
                <td>特殊な調査</td>
                <td>１事案につき</td>
                <td>別途お見積り</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default price;
