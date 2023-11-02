import React from "react";

import "modern-css-reset";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const prove = () => {
  return (
    <>
      <Layout
        id="unfaithful-prove"
        slug="unfaithful"
        title="内容証明について"
        parentTitle="浮気・不倫調査について"
        sections={true}
      >
        <section id="unfaithful-prove">
          <div className="main-content">
            <h3 className="subtitle">内容証明について</h3>

            <div class="flex-wrap">
              <div className="w70p pr40">
                <h4 className="bold blue txt24">
                  内容証明と浮気による慰謝料請求について
                </h4>
                <p>
                  内容証明は、浮気相手（不倫相手）に対して慰謝料請求を行う際によく用いられます。
                  浮気による精神的苦痛、あるいは肉体的苦痛に対する賠償です。
                </p>
                <p>
                  民法では「夫婦の一方の配偶者と肉体関係を持った第三者は、故意または過失がある限り、右配偶者を誘惑するなどして肉体関係を持つに至らせたかどうか、両名の関係が自然の愛情によって生じたかどうかにかかわらず、他方の配偶者の夫又は妻としての権利を侵害し、その行為は違法性を帯び、右他方の配偶者の被った精神上の苦痛を慰謝すべき義務があるというべきである。」とあります。
                </p>
              </div>

              <div className="w30p">
                <img src="/images/prove_01.jpg" alt="" />
              </div>
            </div>

            <div className="white_box">
              <h4>内容証明とは</h4>

              <p>
                内容証明とは、郵便法により定められている制度により発送される特殊な郵便のことです。正式には「内容証明郵便」といいます。普通の手紙と違い、内容証明では、誰が誰あてにいつ手紙を出したか、そしてその内容までが公的に証明されます。
                ただ、内容証明だけでは相手方に手紙が到達したことを証明できないので、内容証明で手紙を出す場合は、配達証明付にするのが一般的です。配達証明付にすることにより、相手が手紙を受け取ったこと、そしてその日付までも証明することができます。
              </p>
            </div>

            <div className="white_box">
              <h4>配達証明（配達証明郵便）とは</h4>

              <p>
                配達証明とは、相手に何月何日に配達したのかを、手紙の差出人に証明してくれるものです。
              </p>
              <ol>
                <li>相手が手紙を受け取ったことを証明してくれます</li>
                <li>
                  手紙を受け取った日付を郵便局（郵便事業株式会社）が証明してくれます
                </li>
              </ol>
              <p>
                ※内容証明(郵便)だけでは、相手に手紙が到達したことを証明できないことに注意する。
                ※文書の場合は、内容証明と配達証明の両方を利用することが望ましい。
              </p>
            </div>

            <div className="white_box">
              <h4>内容証明の効果</h4>

              <ol>
                <li>
                  内容証明郵便の本来的効果、つまり、手紙の到達とその内容を証明する効果があります。
                </li>
                <li>
                  相手に精神的プレッシャー・心理的圧迫を与えるという効果があり、相手に対し、こちらが本気であることを、強烈に知らせることができます。
                </li>
                <li>確定日付を得るという効果があります。</li>
              </ol>

              <p>
                内容証明の本来の効果は、公的に証拠として残るということですが、内容証明を受け取った相手は、普通の手紙をもらう以上に「何とかしなければ」と思うものです。
                実際、公的な証拠がある以上、「そんな手紙知りません」と言って逃げることができなくなりますし、何とかしないと慰謝料請求など、本当にまずいことが起こる場合があるからです。
                今後のことを考え、相手は行動を起こさざるを得ないということになるのです。
                内容証明の証拠力という効果は、相手に行動を起こさせる効果をも生むのです。
              </p>
            </div>
          </div>
        </section>
        <section id="shomei">
          <div className="main-content">
            <h3 className="subtitle">内容証明に何を明記すればよいか？</h3>

            <ul className="list_check">
              <li>
                <FontAwesomeIcon icon={faCheck} />
                夫との間に不貞行為があったという事実の内容
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                夫との交際を辞めることを求める内容
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                慰謝料を請求する旨の内容（要求する慰謝料金額を明記）
              </li>
            </ul>

            <h4 className="subtitle">
              <FontAwesomeIcon icon={faCircleExclamation} />
              内容証明作成の際の注意点
            </h4>

            <ol className="bold">
              <li>事実のみを明記する</li>
              <li>脅迫めいた文章は一切明記しない</li>
            </ol>

            <p>
              ※内容証明は逆に相手に証拠として利用される可能性もあります。脅迫めいた文章を明記すると反対に慰謝料を請求されかねません。また、事実ではないことを明記してしまうと、「証拠はない」「事実と反する」と判断され、反対に相手が有利な立場になってしまう可能性もあります。
            </p>
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

export default prove;
