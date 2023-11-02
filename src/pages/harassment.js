import React from "react";

import "modern-css-reset";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const harassment = () => {
  return (
    <>
      <Layout id="harassment" title="嫌がらせ対策について" sections={true}>
        <section id="harassment-iyagarase">
          <div className="main-content">
            <h3 className="subtitle">
              嫌がらせ・ストーカー行為の立証する証拠収集をいたします。
            </h3>

            <p>
              現在、嫌がらせ・ストーカー被害にお悩みの方、またはその不安がある方は遠慮なくご相談ください。
              怖くて何をどうしていいかわからない場合でも、総合探偵社中央リサーチ岡山がお力になりますのでご安心ください。
            </p>

            <h3 className="subtitle">嫌がらせ対策</h3>

            <div class="flex-wrap">
              <div className="txt_box pr40">
                <p>
                  嫌がらせ対策のご相談は年々増加しています。
                  <br />
                  無言電話、不法侵入、器物破損など多様な嫌がらせを受けたお客様からのご相談を多数いただいております。
                </p>
                <p>
                  その原因となる人間関係、近隣トラブル、会社内のトラブル、いじめ等について、そのサイクルを把握し、嫌がらせ行為を行う人物への問題解決を目的に事実確認及び、しっかりとした証拠収集を行います。
                </p>
                <p>
                  嫌がらせに被害者が直接対応すると、更なる関係の悪化や更なる被害に進展させる危険性も高くあります。
                  <br />
                  万が一の場合にも備え警察・弁護士に動いてもらう為にも、客観的に事実を証明出来る証拠が必要なのです。
                </p>
                <p>
                  総合探偵社中央リサーチ岡山では速やかに調査し対象者へ気付かれる事なく嫌がらせ行為の証拠収集をいたします。
                  <br />
                  対象者の嫌がらせがエスカレートしたり、継続しないために問題解決に繋がるお手伝いをいたします。
                </p>
              </div>
              <div className="img_box">
                <img src="/images/harassment_01.jpg" alt="" />
              </div>
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>家庭のトラブル</h4>
                <p>
                  家庭内での暴力や虐待にお悩みの方はご相談ください。
                  ドメスティックバイオレンスは、「夫婦・恋人間で起こる暴力行為」のことで、隔離されている家庭内や生活空間で発生するため、調査が困難とされている項目のひとつです。
                </p>
              </div>
              <img src="/images/harassment_02.jpg" alt="" />
            </div>
            <div className="survey_box">
              <div className="survey_txt">
                <h4>近隣トラブル</h4>

                <p>
                  継続的な自宅敷地内へのゴミの不法投棄や迷惑駐車・車への被害、庭木が折られたり、外壁への落書きなど近隣からの嫌がらせを受けてお困りの方。
                  嫌がらせを終わらせるために証拠を抑えることがまず大事です。証拠撮りが必要な方は一度ご相談ください。
                </p>
              </div>
              <img src="/images/harassment_03.jpg" alt="" />
            </div>
            <div className="survey_box">
              <div className="survey_txt">
                <h4>学校</h4>

                <p>
                  いじめ問題は深刻になると、恐喝や傷害、殺人や自殺に繋がる場合もあります。
                  生徒間のいじめ問題や教師によるセクハラなどご相談いただく被害は様々です。
                  お子さんの様子や行動が今までと違い、不審に感じる。確信は持てないが、心配なので調べて欲しい方はご相談ください。
                </p>
              </div>
              <img src="/images/harassment_04.jpg" alt="" />
            </div>
            <div className="survey_box">
              <div className="survey_txt">
                <h4>無言電話・いたずら電話</h4>

                <p>
                  無言・いたずら電話、ファックスでの嫌がらせにお困りの方、一人で悩まずご相談ください。無言電話での嫌がらせは精神的にも苦痛となります。
                  無言電話といっても、その種類によって対策方法も変わってきますので、まずはご相談いただき最善の解決策をご提案いたします。
                </p>
              </div>
              <img src="/images/harassment_05.jpg" alt="" />
            </div>
            <div className="survey_box">
              <div className="survey_txt">
                <h4>インターネットでの被害</h4>

                <p>
                  近年ではインターネットでの嫌がらせ行為も増加しています。
                  SNSを悪用した嫌がらせ被害や実名登録の多いFacebookによるネットストーカーの被害も増加傾向にあります。インターネット上にある情報はいつでも誰でも閲覧できるため、大きな被害に繋がることもあります。
                </p>
              </div>
              <img src="/images/harassment_06.jpg" alt="" />
            </div>
            <div className="survey_box">
              <div className="survey_txt">
                <h4>職場</h4>

                <p>
                  上司や同僚によるセクハラ・パワハラなどの嫌がらせ行為にお困りの方、一人で悩まずにご相談ください。
                  問題解決にむけて事実・状況確認を行ない慎重に嫌がらせ行為の証拠収集をいたします。
                </p>
              </div>
              <img src="/images/harassment_07.jpg" alt="" />
            </div>
          </div>
        </section>
        <section id="harassment-stalker">
          <div className="main-content">
            <h3 className="subtitle">ストーカー対策</h3>

            <div class="flex-wrap">
              <div className="txt_box pr40">
                <p>
                  平成12年に、ストーカー行為から被害者を守るため「ストーカー規制法」が制定されました。しかし、いくら警察に相談してもストーカー行為を行っていることが分かる証拠がないと、なかなか警察は動いてくれないのが実態です。
                </p>
                <p>
                  警察が対応できるのは被害者に直接危害を及ぼす可能性のある極めて事件性の高い事例となりますが、やはり警察に動いてもらうには、被害を証明するための証拠が必要となります。
                  総合探偵社中央リサーチ岡山ではストーカー被害にお悩みの方のお力になります。
                </p>
                <p>
                  お客様の被害状況に応じて早急に最善の解決策をご提案し調査をいたします。
                  まずは対象者の特定を行ない、ストーカー行為を行っている事実の証拠収集し、いざと言う時に警察に動いてもらう為の、具体的な証拠資料をもって未然にストーカー被害を防げるようお手伝いいたします。
                </p>
                <p>
                  私たちは、迅速に調査し対象者を刺激せず慎重に調査を進めていことができます。
                  問題をエスカレートさせず大きな被害や事件を未然に防ぎ解決する様に進めて行きたいと考えております。
                </p>
              </div>
              <div className="img_box">
                <img src="/images/harassment_08.jpg" alt="" />
              </div>
            </div>

            <h3 className="subtitle">こんな時にストーカー対策を･･･</h3>

            <ul className="list_check">
              <li>
                <FontAwesomeIcon icon={faCheck} />
                つきまといや会社・自宅で待ち伏せされる。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                日々の行動を監視していることを告げられる。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                面会・交際を何度も要求される。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                乱暴な言葉・行動により被害を受けている。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                無言電話などのいたずら電話や迷惑メールを送られる。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                一方的に不快感を抱く手紙 ・汚物・動物の死体など送付される。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                名誉を害する行為をされる。
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                性的羞恥心を害する行為をされる。
              </li>
            </ul>
          </div>
        </section>
        <section id="harassment-tel">
          <div className="main-content">
            <h3 className="subtitle">いたずら電話撃退法</h3>

            <div class="flex-wrap">
              <div className="txt_box pr40">
                <p>
                  近年では一般電話・携帯電話からの非通知による、いたずら電話被害のご相談を多くいただいております。
                </p>
                <p>
                  電話会社の迷惑電話防止サービスといったものも有り、一度かかってきた非通知のいたずら電話に対して登録作業をすれば、その回線からは解除しない限り着信しないシステムなどがあります。
                </p>
                <p>
                  他にも携帯電話会社もそう言ったサービスを取り入れています。
                  今では、いたずら電話の犯人を特定できる時代に変化してきています。
                </p>
                <p>
                  アナログ回線からデジタル回線の時代となり一般電話・携帯電話から非通知で発信した端末は電話会社の交換器側までは開示されているのです。
                  交換器から、非通知に切り替わり相手に非通知設定と表示されているだけなのです。
                </p>
              </div>
              <div className="img_box mb30">
                <img src="/images/harassment_09.jpg" alt="" />
              </div>
            </div>

            <p>
              よって、事件性のある内容で警察などが電話会社に開示を求めればその不審者の番号の発信記録は開示されている事になります。
            </p>
            <p>
              事件性の高い内容であれば警察は相手の番号から契約者を特定することも可能となります。また公衆電話からのいたずら電話でも同様に拒否設定可能となっており、
              <br />
              警察は公衆電話の設置場所も特定することができ、そこで張り込みし逮捕するケースもあります。
            </p>
            <p>
              警察に被害届けを出す場合は、いたずら電話の日時や回数など記録しておく必要があります。
              （※通話録音もあれば尚、良いと思います）
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

export default harassment;
