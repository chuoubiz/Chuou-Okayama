import React from "react";

import "modern-css-reset";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const type = () => {
  return (
    <>
      <Layout
        id="unfaithful-type"
        slug="unfaithful"
        title=" 離婚の種類について"
        parentTitle="浮気・不倫調査について"
      >
        <h3 className="subtitle">離婚の種類について</h3>
        <dl>
          <dt>協議離婚</dt>
          <dd>
            裁判所が介入しない離婚。夫婦間の合意により離婚届に署名押印し、市区役所・町村役場へ提出することで離婚が成立します。
          </dd>
          <dt>調停離婚</dt>
          <dd>
            話し合いで解決できない場合、家庭裁判所にて家事調停官・調停委員が夫婦の間に入り調停が行われ、夫婦が条件に同意することで離婚が成立する。
          </dd>
          <dt>審判離婚</dt>
          <dd>
            調停が成立しない場合などに、家庭裁判所の判断で審判によって離婚を成立させる。
          </dd>
          <dt>判決離婚</dt>
          <dd>
            調停が不成立の場合に、夫婦一方の側から家庭裁判所に訴えを提起し、裁判所の判決により離婚問題を解決する。
          </dd>
        </dl>

        <h3 className="subtitle">
          協議離婚について（夫婦が話し合いで同意する）
        </h3>
        <div className="white_box">
          <div className="txt_box">
            <p className="bold blue txt20">
              日本の離婚の90%をこの協議離婚が占めています。
            </p>
            <p>
              お金や親権などの条件について夫婦間の合意さえあれば離婚が成立するので、時間的にも手続費用の面でも負担が少なく済みます。相手に非がある場合は、ただ感情的に責めるのではなく証拠を突きつけることで納得させることができます。確かな証拠があれば、「言い逃れしても無駄だ」ということで、相場に基づいた条件で早めの決着が望めるでしょう。
            </p>
          </div>
          <div class="img_box">
            <img src="/images/type_01.jpg" alt="" />
          </div>
        </div>
        <h3 className="subtitle">
          調停離婚について（家庭裁判所の調停で互いに条件に合意する）
        </h3>

        <div className="white_box">
          <div className="txt_box">
            <p className="bold blue txt20">
              話し合いでは条件がまとまらない、または話し合いが出来ない場合、
              <br />
              家庭裁判所に申し立て、離婚調停をすることができます。
            </p>
            <p>
              日本の離婚の約10％は調停離婚です。調停委員は夫婦の間に入って中立的な立場で話し合いがまとまるよう調停します。離婚調停では、調停委員に「申立て書」・それまでのいきさつを記載した付属書類、そして写真などの証拠を提出します。調停委員は夫婦の主張を聞いて公平に話がまとまるよう促しますが、弁護士ではないので、一方に肩入れしたり有利なアドバイスをしてくれるわけではありません。調停離婚をスムーズに進めるには、これ以上夫婦関係を続けられないと調停委員に納得してもらえるよう、「いつ、どのようなことがあったか」具体的な事実がわかる証拠を集めておくことが大切です。
            </p>
          </div>
          <div class="img_box">
            <img src="/images/type_02.jpg" alt="" />
          </div>
        </div>
        <h3 className="subtitle">
          審判離婚について（家庭裁判所の判断によって審判を行う）
        </h3>

        <div className="white_box">
          <div className="txt_box">
            <p className="bold blue txt20">
              家庭裁判所での調停が成立する見込みがないとされた場合、
              <br />
              家庭裁判所が調停委員の意見を聞いて強制的に離婚を成立させる場合があります。
            </p>
            <p>
              審判離婚は例が少なく、非常に稀なケースです。
              繰り返し調停を重ねおおむね合意しているにも関わらず些細な点で折り合わない場合や、条件の上で合意が得られた後に一方的に出頭を拒否した場合などに行われることがあります。家庭裁判所が強制的に離婚を成立させたほうが当事者のためになると判断すれば、それまでの調停の内容を受けて双方に公平な内容となるよう審判を下します。
              離婚調停同様、具体的な事実にもとづく客観的な証拠があれば有利な審判を受けることができます。
            </p>
          </div>
          <div class="img_box">
            <img src="/images/type_03.jpg" alt="" />
          </div>
        </div>
        <h3 className="subtitle">
          裁判離婚について（調停が不成立の場合に訴訟を行う）
        </h3>

        <div className="white_box">
          <div className="txt_box">
            <p className="bold blue txt20">
              協議でも調停でも合意できず、離婚が不成立となった場合、夫婦どちらかの訴えにより裁判を起こすことができます。
            </p>
            <p>
              これは全体の1%程度です。時間がかかり金銭的な負担も大きいため、どうしても合意できない場合の最終手段です。
              裁判離婚は法の手続きに則って進められるため、客観的な証拠が特に重要となります。自身の主張に応じた、効力のある証拠を用意しなければなりません。
              一般的に、裁判離婚の場合は弁護士を立てて専門的な手続きを行うことになります。
            </p>
          </div>
          <div class="img_box">
            <img src="/images/type_04.jpg" alt="" />
          </div>
        </div>

        <p className="bold blue txt24 center">
          ご依頼のお客様に対し総合探偵社中央リサーチ岡山では良識ある
          <br />
          優良弁護士のご紹介も無料で行っております。
        </p>
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

export default type;
