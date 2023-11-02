import React from "react";

import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import TelNo from "../components/TelNo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export const Head = () => (
  <>
    <body className="subpage" />
    <Seo />
  </>
);

const toiawase = () => {
  return (
    <>
      <Layout id="toiawase" title="ご相談・お問合せ">
        <h3 className="subtitle">電話でのお問合せ</h3>
        <p>はじめての方も、お気軽にご相談ください！</p>
        <p>
          小さな問題でも丁寧に対応させていただきます。
          お電話でのご相談の場合、下記フリーダイアルまでお問い合わせください。
          年中無休・24時間対応いたしております。（携帯電話からもOK）
        </p>

        <TelNo />

        <p className="center">※営業、セールスのお電話は一切お断り致します。</p>

        <h3 className="subtitle">LINEでのご相談</h3>

        <p>
          LINEからお問い合わせできます！
          QRコードから「友だち登録」すると、LINEでお問い合わせができます。
          <br />
          LINEアプリの【友だち追加】で下記のQRコードを読み取って、トークからお問い合わせください。
        </p>

        <div className="line_contact_box">
          <h4>
            <FontAwesomeIcon icon={faComment} /> LINEでのご相談
          </h4>
          <figure className="md-txt_center">
            <a
              href="https://line.me/R/ti/p/65gpK3qcDs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                decoding="async"
                src="/images/contact_qr.png"
                alt="QRコード"
                width={185}
                height={185}
              />
            </a>
          </figure>
          <p>上のQRコードを読み取ってアクセスして下さい。</p>
        </div>

        <h3 className="subtitle">メールでのお問合せ</h3>

        <p>
          メールでのご相談の場合、下記の入力画面に必要事項をご記入いただき、入力画面の最後にある「お問い合わせ」ボタンよりお問い合わせください。
          <br />
          お電話、メールによりご対応させていただきます。
        </p>

        <p className="blue">
          メールのご相談は24時間年中無休で受け付けております。お急ぎの場合は直接お電話にてお問合せ下さい。
        </p>

        <form
          action="https://ssgform.com/s/IId20GYDz0FJ"
          method="post"
          id="mailform"
        >
          <div style={{ display: "none" }}>
            <input type="text" name="wana" />
          </div>
          <table className="table_form">
            <tr>
              <th>
                お名前<span className="must">必須</span>
              </th>
              <td>
                <input
                  type="text"
                  name="お名前"
                  size={30}
                  required="required"
                  placeholder="例：山田　太郎　ニックネームでも可"
                />
              </td>
            </tr>
            <tr>
              <th>お電話番号</th>
              <td>
                <input
                  type="text"
                  name="電話番号"
                  placeholder="例：090-0000-xxxxx"
                />
              </td>
            </tr>
            <tr>
              <th>
                メールアドレス<span className="must">必須</span>
              </th>
              <td>
                <input
                  type="email"
                  name="email"
                  required="required"
                  placeholder="例：sample@chuou.jp"
                />{" "}
              </td>
            </tr>
            <tr>
              <th>
                メールアドレス確認<span className="must">必須</span>
              </th>
              <td>
                <input
                  type="email"
                  name="email2"
                  required="required"
                  placeholder="例：sample@chuou.jp"
                />{" "}
              </td>
            </tr>
            <tr>
              <th>
                ご用件<span className="must">必須</span>
              </th>
              <td>
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="浮気・不倫調査に関するお問い合わせ"
                  />{" "}
                  浮気・不倫調査に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="素行調査に関するお問い合わせ"
                  />{" "}
                  素行調査に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="裁判証拠収集に関するお問い合わせ"
                  />{" "}
                  裁判証拠収集に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="結婚・身上調査に関するお問い合わせ"
                  />{" "}
                  結婚・身上調査に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="家出・所在調査に関するお問い合わせ"
                  />{" "}
                  家出・所在調査に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="嫌がらせ・ストーカー対策に関するお問い合わせ"
                  />{" "}
                  嫌がらせ・ストーカー対策に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="盗聴器発見に関するお問い合わせ"
                  />{" "}
                  盗聴器発見に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="指紋・声紋・筆跡鑑定に関するお問い合わせ"
                  />{" "}
                  指紋・声紋・筆跡鑑定に関するお問い合わせ
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="ご用件"
                    required="required"
                    defaultValue="その他、お問い合わせ"
                  />{" "}
                  その他、お問い合わせ
                </label>
              </td>
            </tr>
            <tr>
              <th>お問合せ内容</th>
              <td>
                <textarea
                  name="お問い合わせ内容"
                  cols={80}
                  rows={5}
                  placeholder="お問合せ内容をお書きください。その他の心配事などありましたらお気軽にご相談ください。"
                />
              </td>
            </tr>
          </table>

          <p className="center">
            <button type="submit" className="form_bt">
              送信する
            </button>
          </p>
        </form>

        <p>
          お客様の個人情報の漏洩を防ぐため、このページの情報は暗号化され、SSLモードで送信されます。
          <br />
          必要事項をご入力後「メールを送信」ボタンを押してください。
        </p>
      </Layout>
    </>
  );
};

export default toiawase;
