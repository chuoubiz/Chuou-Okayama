import React from "react";

import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const wiretap = () => {
  return (
    <>
      <Layout id="wiretap" title="盗聴器発見について">
        <h3 className="subtitle">
          盗聴・盗撮器等を最新の機器を使って確実に探査します。
        </h3>

        <p>
          最近では、盗聴・盗撮器はインターネット等で誰でも簡単に入手することができるため、盗聴・盗撮による危険は、私たちの身近に潜んでいます。
          しかし入念な捜索と特殊機材のデジタル電波式盗聴器発見器（使用シェア7割）及びアナログ電波式盗聴器発見器（使用シェア3割）等がないと正確な探査は出来ない為、個人での発見は難しいのが現状です。
          中にはアナログ電波式盗聴器発見器のみ探査し、盗聴器はないものと誤認される方がたくさんいらっしゃいます。
        </p>

        <p>
          総合探偵社中央リサーチ岡山では、一戸建て及びマンション・ビル等に設置されている盗聴・盗撮器等を最新の機器を使って確実に探査し、お客様の不安を取り除きます。
        </p>

        <h3 className="subtitle">盗聴器の種類</h3>

        <div className="survey_box">
          <div className="survey_txt">
            <h4>電話を盗聴される場合</h4>

            <p>
              盗聴器には電話器に設置する方法とコネクター部に設置する方法、ヒューズBOXに設置する方法、屋外の電線に設置する方法が一般的です。
              見た目では全く普通のヒューズボックスであって外見からはNTTなどと書いている部品であるため、見分けがつきにくいのが現状です。（発見には電波及び電磁波測定器が必要です）
              昔テレビドラマでも放映された、受話器が上がり会話が始まれば電波が発信され自動で録音開始する盗聴器の自動録音タイプはよく使われています。
            </p>
          </div>
          <img src="/images/wiretap_01.jpg" alt="" />
        </div>
        <div className="survey_box">
          <div className="survey_txt">
            <h4>部屋・社内・車内を盗聴・盗撮される場合</h4>
            <p>
              ITの時代と共にインターネットを利用したパソコンへの侵入で情報を読み取ったり、遠隔操作で室内を盗聴・盗撮したりも簡単に出来る時代となりました。
              簡易的な盗聴器は携帯電話の改造型が多いです。
              盗聴したいときだけ外から電話をかけ、着信音がならずに受話器が自動で上がるシステムで室内の会話など簡単に聞くことができるのです。
              盗撮にはトイレ・バスルーム・寝室などにCCD（レンズ直径１ミリ）がよく使われます。
              またコンクリートマイクと言われる盗聴器は聴診器に似たタイプのもので、マンションなどのコンクリート厚さ約2メートル越しにも盗聴できてしまうのです。
              他、コンセント型盗聴器・ペン型盗聴器・電卓型盗聴器・マウス型盗聴器・時計型盗聴器ボタン型盗聴器等約50種類以上の盗聴・盗撮器がインターネット等でも販売されています。
              上記を参考に気になる箇所をご自分でできる範囲、簡単にチェックしてみてください。
            </p>
          </div>
          <img src="/images/wiretap_02.jpg" alt="" />
        </div>

        <p>
          情報が漏れているなど不審・不安・疑問・ご心配事がございましたら、盗聴器発見のスペシャリスト総合探偵社中央リサーチ岡山にお任せください。
        </p>

        <h3 className="subtitle">盗聴・盗撮器発見</h3>

        <p>
          盗聴・盗撮器の多くは一般家庭への設置がほとんどです。
          会社経営者・会社役員の方や一人暮らしの女性、異性間・家族間等でトラブルを抱えている方など、プライバシーの保護・安心のためにご活用いただけます。
        </p>

        <h4 className="bold blue txt20 mb30">
          心当たりはありませんか？盗聴・盗撮器が仕掛けられている可能性があります
        </h4>

        <ul className="list_check">
          <li>
            <FontAwesomeIcon icon={faCheck} />
            電話中に雑音が入る
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            知るはずがない人が、その情報を知っている
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            間違い電話や悪戯電話が増えた
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            誰かに尾行されているような気がする
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            部屋の近くに不審な人物や車をよく見かける
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            電話中、TVをつけている時に雑音・映像の乱れがある
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            誰かに監視されているような気がする
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            知らない間に家の物が動いていたり、なくなっていた
          </li>
        </ul>

        <h4 className="subtitle">
          <FontAwesomeIcon icon={faCircleExclamation} />
          ご依頼時の注意
        </h4>

        <p>
          すでに、ご自宅に盗聴・盗撮器が仕掛けられている場合がありますので、ご依頼の際は、自宅外から（公衆電話等）周りに誰もいないことを確認してお電話ください。
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

export default wiretap;
