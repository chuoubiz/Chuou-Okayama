import React from "react";

import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const survey = () => {
  return (
    <>
      <Layout id="survey" title="結婚・身上調査について" sections={true}>
        <section id="marriage-survey">
          <div className="main-content">
            <h3 className="subtitle">結婚調査は何のための調査</h3>

            <div class="flex-wrap">
              <div class="txt_box pr40">
                <p>
                  結婚・身上調査は、結婚前に相手の素性や素行、経歴などを調査し、結婚にあたって問題がないか調べる調査です。
                </p>
                <p>
                  暴力癖やギャンブル癖など、後ろめたいことは誰しも言いたがりません。聞く方も、交際相手が隠していることを深く追及しづらいものです。
                </p>
                <p>
                  調査によって、将来の結婚生活を破綻させるかもしれないことがわかり、事前に対処することが出来れば、
                  <br />
                  結婚した後に後悔することを防げます。
                  <br />
                  また、お相手に何の問題もないことがわかれば、安心して結婚話を進めることができます。
                </p>
                <p>
                  結婚という人生の一大事を安心して、曇りなく進めるためにあるのが結婚調査です。
                </p>
              </div>
              <div className="img_box mb30">
                <img src="/images/survey_01.jpg" alt="" />
              </div>
            </div>

            <h4 className="bold blue txt20">調査は丁寧かつ内密に行います</h4>

            <p>
              総合探偵社中央リサーチ岡山の調査は細かい懸念点まで丁寧に洗い出します。第三者の目で厳しくチェックすることで、これまで見えてこなかった新たな懸念点が浮かび上がってくることもあります。また、調査は内密に行い、お相手や周りの方に知られることはありません。もちろん親御様からご依頼いただいた場合も、娘さんや息子さんに知られることなくお調べすることが可能です。
            </p>
          </div>
        </section>
        <section id="marriage-survey-person">
          <div className="main-content">
            <h3 className="subtitle">結婚・身上調査（本人事項）</h3>
            <p>
              結婚しようとしている相手について、結婚生活を破綻させるような問題がないか調査します。
              「結婚するまで本性がわからなかった、騙された」と後々思うことのないよう、丁寧に調査すれば結婚前でも多くのことがわかります。ギャンブル依存などの経済面での不安や、暴力癖や浮気性など性格面での不安、その他、普段の生活状況、趣味嗜好、交友関係など、結婚生活を脅かす要素がないか事前に確かめておけば、安心して結婚できるでしょう。
            </p>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>学歴・経歴・職業</h4>
                <p>
                  本人が話している経歴や離婚歴の有無について、詐称がないかの事実確認をします。
                  学歴や転職歴、現在の勤め先などがわかれば、安定した家庭を築けるかどうかの将来性を判断する手がかりになります。逆に詐称が判明した場合は、背景に後ろめたい隠し事が考えられますので、さらに事実を追求することになります。
                </p>
              </div>
              <img src="/images/survey_02.jpg" alt="" />
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>趣味やプライベート</h4>
                <p>
                  大金を注ぎ込んだり、人付き合いや仕事をないがしろにしてまでのめり込むような趣味がある場合は、結婚生活を脅かす不安材料となります。
                  ギャンブルや性風俗など、収入の範囲内での楽しみであっても、夫婦それぞれの価値観によっては問題になる場合もあるでしょう。
                </p>
              </div>
              <img src="/images/survey_03.jpg" alt="" />
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>人格・評判</h4>
                <p>
                  結婚相手が周りからどう見られているか、周囲の評価を調べます。交際中に相手を客観的に見るのは難しいものです。周りの人が彼・彼女をどう見ているかの評判がわかれば、冷静に判断できるでしょう。
                </p>
              </div>
              <img src="/images/survey_04.jpg" alt="" />
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>素行・生活態度</h4>
                <p>
                  普段どのような行動をしているか、また過去の素行に問題がなかったかを調べます。
                  浮気していないか、不適切な場所に出入りしていないか、暴力的な態度をとっていないかなど、普段の行動から人物像をうかがい知ることができます。聞き込みなどで過去の非行行為が明らかになる場合もあります。
                </p>
              </div>
              <img src="/images/survey_05.jpg" alt="" />
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>交友関係</h4>
                <p>
                  普段の素行と合わせ、どのような人と付き合いがあるかを調べます。付き合う人間関係が悪いと、金銭トラブルや犯罪などを招きやすくなります。また、人付き合いを通してその人の実態が見えてくる場合もあります。
                </p>
              </div>
              <img src="/images/survey_06.jpg" alt="" />
            </div>
          </div>
        </section>
        <section id="marriage-survey-relatives">
          <div className="main-content">
            <h3 className="subtitle">結婚・身上調査（家族・親族）</h3>

            <p>
              一昔前であれば、結婚は家同士のものということで、事前に両家が話し合っての結婚が主流でした。それが近年では、本人たちが結婚の決意を固めるまでお互いの両親は顔も知らないのが当たり前になっています。いくら結婚は当人同士のものとはいえ、結婚すれば相手の家族・親族との付き合いは避けられません。結婚調査では相手の家族・親族についても調査いたします。
            </p>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>人柄・周囲の評判について</h4>
                <p>
                  両親や親族がどのような方か、周りからどのように見られているのかを調査します。嫁姑問題や親族トラブルにつながるような、性格的な問題がないか確かめることができます。近隣と深刻なトラブルを起こしていないか、悪評は立っていないかも確認します。
                  <br />
                  また、自称している家柄が真実かどうか、事実関係の調査をします。
                </p>
              </div>
              <img src="/images/survey_07.jpg" alt="" />
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>生活実態・職業について</h4>
                <p>
                  相手の両親がどのような仕事をしているか、暮らしぶりはどうかについて調査をします。
                  <br />
                  不安定な職業の場合、後々経済的な問題が出てくる可能性があります。また、両親の生活態度に問題がある場合、結婚相手にも影響を及ぼすことが少なくありません。
                </p>
              </div>
              <img src="/images/survey_08.jpg" alt="" />
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>病気・健康状態</h4>
                <p>
                  相手の両親の病気は、介護問題として関わってくることになります。また、精神面での病気は家族・親族としての付き合いに影響を及ぼします。
                  <br />
                  直接は聞きにくいことですが、事前に知っておくことで準備や心構えをすることができます。
                </p>
              </div>
              <img src="/images/survey_09.jpg" alt="" />
            </div>

            <div className="survey_box">
              <div className="survey_txt">
                <h4>思想や信条などについて</h4>
                <p>
                  信条的なことは、思い入れが強すぎるとトラブルにつながる場合もあります。強引に勧誘されたり、思想を押し付けられることがあっては安心して結婚生活を送ることができません。
                  相手の両親の思想について、事前に知って対応を考えておくことで、結婚してからの問題を防ぐことができるでしょう。
                </p>
              </div>
              <img src="/images/survey_10.jpg" alt="" />
            </div>
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

export default survey;
