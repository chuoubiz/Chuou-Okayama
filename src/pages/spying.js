import React from "react";

import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const spying = () => {
  return (
    <>
      <Layout id="spying" title="素行調査について">
        <h3 className="subtitle">素行調査</h3>

        <div class="flex-wrap">
          <div className="txt_box pr40">
            <p>
              対象人物の行動や身辺を詳しく調査する事によって、その人物に隠された真実を明らかにします。
            </p>
            <p>
              総合探偵社中央リサーチ岡山では、過去の素行・家族構成など、これまで知り得なかった真実を、客観的に側面から調査し、より正確な情報収集を行います。
            </p>
            <p>
              例えば、交際中のカップルの場合、交際相手のことを客観的に見ることができず、相手にとって都合の悪い情報をつかむ事は難しいものです。
            </p>
            <p>
              ただ、調査をすることで、その結果を基にこれからの交際、あるいは結婚を考える上での判断材料にしていただけます。真実を知る事は、トラブルを未然に防ぐことや、問題解決への有用な手段にもなります。
            </p>
          </div>
          <div className="img_box">
            <img src="/images/spying_01.jpg" alt="" />
          </div>
        </div>

        <h3 className="subtitle">こんなことでお悩みの方へ</h3>

        <ul className="list_check">
          <li>
            <FontAwesomeIcon icon={faCheck} />
            子供（息子、娘）が、どこで誰と会い何をしているのか気になる。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            交際相手の生活実態・職業・人物性などが知りたい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            交際相手（家族）のお金の使い道について知りたい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            交際相手が既婚者なのか知りたい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            不審・不安をもたらす特定の人物の所在や事実確認がしたい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            浮気相手の住所や連絡先が知りたい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            従業員の不正や、背任行為の事実確認がしたい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            取引する上で、信用できる相手（会社）なのか確認したい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            詐欺や金銭トラブルなど特定の人物（会社）の実態を解明したい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            債務者の現在の勤務先（収入源）が知りたい。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            遠方で暮らす高齢者の生活実態が気になる。
          </li>
        </ul>
        <div class="flex-wrap-center">
          <div className="txt_box pr40">
            <p>
              個人情報保護法の施行以来、過剰反応ともいえる対応の機関もあり、
              <br />
              たとえ正当な理由であっても情報が開示されにくくなりました。
            </p>
            <p>
              これにより被害者である方には問題解決に立ち塞がる、もう一つの壁があることも事実なのです。
            </p>
            <p>
              総合探偵社中央リサーチ岡山では正当な理由で問題解決に当たろうとする皆さまへ、合法的かつ正確な調査を行い、
              <br />
              事実究明のお力になりたいと考えております。
            </p>
          </div>
          <div className="img_box">
            <img src="/images/spying_02.jpg" alt="" />
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

export default spying;
