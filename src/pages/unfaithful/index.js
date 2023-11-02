import React from "react";
import { Link } from "gatsby";

import "modern-css-reset";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <>
      <Layout id="unfaithful" title="浮気・不倫調査について" sections="true">
        <section id="unfaithful">
          <div className="main-content">
            <h3 className="subtitle">こんな時に浮気調査・不倫調査を･･･</h3>
            <ul className="list_check">
              <li>
                <FontAwesomeIcon icon={faCheck} />
                現在離婚を考えているので、裁判を有利に進める確実な証拠が欲しい。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                不倫・浮気の事実関係をはっきりさせて、しっかりと夫婦間で話し合いをしたい。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                夫（妻）の浮気の事実は知っているが、関係を元通りにしたい。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                最近行動が怪しい。浮気しているのではと思うが、聞き出せない。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                浮気相手についてどんな人物なのか詳しく知りたい。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                浮気しているようだが、言葉だけで追求しても事実を認めない。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                写真など撮って浮気を立証し、相手に慰謝料を請求したい。
              </li>
            </ul>
          </div>
        </section>

        <section id="mokuteki">
          <div className="main-content">
            <h3 className="subtitle">浮気調査の目的</h3>

            <div className="flex-wrap">
              <div className="mokuteki_box">
                <img src="/images/reason_img03.jpg" alt="" />
                <div className="mokuteki_txt">
                  <p className="center bold">01</p>
                  <h4>裁判用の証拠を作成する</h4>
                  <p>
                    裁判は証拠を基に審理をします。裁判時に、確固たる証拠として立証するための報告書を作成し、慰謝料の請求など、裁判を有利に進めるようサポートします。
                  </p>
                </div>
              </div>
              <div className="mokuteki_box">
                <img src="/images/reason_img02.jpg" alt="" />
                <div className="mokuteki_txt">
                  <p className="center bold">02</p>
                  <h4>慰謝料の請求をする</h4>
                  <p>
                    浮気相手を突き止め、慰謝料請求をし、合法的に浮気相手と別れてもらうことで、夫婦（恋人）間の修復をサポートします。
                  </p>
                </div>
              </div>
              <div className="mokuteki_box">
                <img src="/images/unfaithful_01.jpg" alt="" />
                <div className="mokuteki_txt">
                  <p className="center bold">03</p>
                  <h4>事実関係の確認をする</h4>
                  <p>
                    気になって夜も眠れない日々･･･何処までの関係なのか？不安材料を解消する為に詳細な調査して事実確認を行います。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="jirei">
          <div className="main-content">
            <h3 className="subtitle">浮気調査の事例</h3>

            <div className="white_box">
              <div className="txt_box">
                <h4>ケース１：夫婦（恋人）間の関係を修復したい</h4>
                <p>
                  事実関係（浮気の疑いがあるのかどうか等）を調査し、その事実を基に夫婦間で話し合いをし、関係を元に戻すためのお手伝いをいたします。
                  浮気の事実から、パートナーを責めたくなる気持ちが大きくなるのは当然ですが、これからの人生を共に歩んでいくためには、二人が話し合い、互いに努力をすることも必要です。
                  また、浮気相手に対して、二度と会う事のないよう、浮気の事実を立証し、慰謝料請求する際のサポートもいたします。
                </p>
              </div>
              <div className="img_box">
                <img src="/images/unfaithful_02.jpg" alt="" />
              </div>
            </div>

            <div className="white_box">
              <div className="txt_box">
                <h4>ケース2：離婚をしたい</h4>
                <p>
                  夫（妻）の浮気が原因で離婚となる場合、調停及び裁判では明らかな証拠がないと、こちらの主張が認められず不利な立場になってしまいます。（裁判は証拠を基に審理します）
                  ただ、調査をすることによって、浮気の事実を突き止め、明確な証拠となる調査報告書を提出できますので、裁判を有利に進める事ができます。そのお手伝いを全力でいたします。
                  <br />
                  妻（夫）だけが悲しい思いをする必要はありません。
                </p>
              </div>
              <div className="img_box">
                <img src="/images/unfaithful_03.jpg" alt="" />
              </div>
            </div>

            <p>
              <Link to="/unfaithful/type/" className="bt02">
                離婚の種類について
              </Link>
            </p>
          </div>
        </section>
        <section>
          <div className="main-content">
            <h2>浮気調査安心プラン</h2>
            <p className="center bold">（早朝･深夜料金一切不要で安心）</p>

            <h3 className="subtitle">必要なところにピンポイント調査　追加料金不要で任せて安心</h3>
            <p>
              お客様に合った調査プランを提案し、確実に問題解決いたします。
              <br />
              <span className="red bold">
                ※対象者の行動パターンを把握した上で、浮気の証拠撮り。
              </span>
            </p>

            <table className="table_plan">
              <tbody>
                <tr>
                  <th>浮気調査</th>
                  <td>
                    <span className="plan_price_s">
                      調査員
                      <br />
                      1名毎
                    </span>
                    <strong className="plan_price">5,000円</strong>(税込5,500円)
                    <br />
                    行動調査1時間あたりの基本料金
                  </td>
                </tr>
                <tr>
                  <th>20時間プラン</th>
                  <td>
                    19万円
                    <span style={{ fontSize: "13px" }}>(税込209,000円)</span>
                    、調査員2名体制（20時間を数日間にわけて調査致します）
                    <br />
                    <span className="red bold">※浮気の証拠取得率98.8%の実績</span>
                  </td>
                </tr>
                <tr>
                  <th>30時間プラン</th>
                  <td>
                    28万円
                    <span style={{ fontSize: "13px" }}>(税込308,000円)</span>
                    、調査員2名体制（30時間を数日間にわけて調査致します）
                    <br />
                    <span className="red bold">※浮気の証拠取得率99.3%の実績</span>
                  </td>
                </tr>
                <tr>
                  <th>成功報酬プラン</th>
                  <td>
                    30万円定額
                    <span style={{ fontSize: "13px" }}>(税込330,000円)</span>
                    （浮気の証拠取得時に適応）
                    <br />
                    調査期間　最大3ヶ月
                    <br />
                    ※ご契約につきましては内容に応じ弊社の基準にて適応致します。
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              <Link to="/price/" className="bt02">
                調査料金を見る
              </Link>
            </p>
          </div>
        </section>

        <section id="onayami">
          <div className="main-content">
            <h2>浮気・不倫でお悩みの方へ</h2>

            <h3 className="subtitle mt0">実は多くのお客様が既に浮気の事実を把握されています。</h3>

            <div className="onayami_box">
              <img src="/images/unfaithful_04.jpg" alt="" />
              <div className="onayami_txt">
                <p className="txt20">
                  必要なのは
                  <span className="bold red">より詳細な事実関係、浮気相手の情報などの証拠収集</span>
                  です｡
                </p>
                <p>
                  浮気は、通常３ヶ月から半年以上交際が継続した頃に発覚する事が多く、早い内に対処すれば、関係が深みにはまることなくパートナーと向き合う事も可能ですが、交際期間が長くなればなるほど情が移り、愛情や関係性もエスカレートしていきます。
                  <br />
                  そうなってしまうと、中々別れられない関係まで発展するどころか、浮気相手が妊娠してしまったという事も起きかねません。
                </p>
                <p>
                  現在、浮気・不倫でお悩みの方は、ひょっとして「このまま様子をみていようか？」
                  <br />
                  「私だけが我慢したらいいのかな？」などと思われていませんか？
                </p>
                <p className="bold red">それは大きな間違いです。</p>
              </div>
            </div>
            <div className="onayami_box">
              <img src="/images/unfaithful_05.jpg" alt="" />
              <div className="onayami_txt">
                <p>
                  できるだけ早く証拠をつかみ、事実関係を確認する事が、修復に向けて話し合いをする為のスタート地点となります。
                </p>
                <p>
                  通常、浮気をした本人は確固たる証拠がなければその事実を認めませんので、向き合って話し合う事もできません。
                </p>
                <p>
                  また、しつこく問いただす行為は、真実を話さないどころか、警戒を招いてしまう事にもなりかねませんので、むしろ逆効果です。
                  <br />
                  より気づかれないように、用意周到に浮気をするようになってしまいます。
                  <br />
                  気づいていないフリをしつつ、証拠収集のため調査をすることが、解決への一番の近道となります。
                </p>
              </div>
            </div>

            <div className="shoumei">
              <h3 className="blue bold">浮気調査に係わる内容証明について</h3>
              <p>
                内容証明とは浮気の証拠を基に弁護士等が作成し浮気相手に送付し慰謝料を請求するものです。
                <br />
                浮気相手と別れてもらう目的でも合法的に使用できます。
              </p>
              <p>
                <Link to="/unfaithful/prove/" className="bt02">
                  内容証明について
                </Link>
              </p>
            </div>

            <h4 className="bold txt20 center blue mt60">
              お悩みを早期に解決する為の優先順位は、まず調査を行うことをご検討ください。
              <br />
              きっと解決の糸口を見い出し、必ずお力になることをお約束いたします。
            </h4>
          </div>
        </section>
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

export default index;
