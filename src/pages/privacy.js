import React from "react";
import "modern-css-reset";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export const Head = () => (
  <>
    <body className="subpage" />
    <Seo />
  </>
);

const privacy = () => {
  return (
    <>
      <Layout id="privacy" title="プライバシーポリシー">
        <p>
          弊社では、ヤフー株式会社をはじめとする第三者から配信される広告が掲載される場合があり、これに関連して、当該第三者が、当ウェブサイトを訪問したユーザーのクッキー情報等を取得し、利用している場合があります。
        </p>

        <p>
          当該第三者によって取得されたクッキー情報等は、当該第三者のプライバシーポリシーに従って取り扱われます。ユーザーは、当該第三者のウェブサイト内に設けられたオプトアウトページにアクセスして、当該第三者によるクッキー情報等の広告配信への利用を停止することができます。
        </p>

        <p>
          クッキーとは、ウェブページを利用したときに、ブラウザーとサーバーとの間で送受信した利用履歴や入力内容などを、お客様のコンピューターにファイルとして保存しておく仕組みです。次回、同じページにアクセスすると、クッキーの情報を使って、ページの運営者はお客様ごとに表示を変えたりすることができます。お客様がブラウザーの設定でクッキーの送受信を許可している場合、ウェブサイトは、ユーザーのブラウザーからクッキーを取得できます。
        </p>

        <p>
          尚、お客様のブラウザーは、プライバシー保護のため、そのウェブサイトのサーバーが送受信したクッキーのみを送信します。お客様は、クッキーの送受信に関する設定を「すべてのクッキーを許可する」、「すべてのクッキーを拒否する」、「クッキーを受信したらユーザーに通知する」などから選択できます。設定方法は、ブラウザーにより異なります。クッキーに関する設定方法は、お使いのブラウザーの「ヘルプ」メニューでご確認ください。
        </p>

        <p>
          すべてのクッキーを拒否する設定を選択されますと、認証が必要なサービスを受けられなくなる等、インターネット上の各種サービスの利用上、制約を受ける場合がありますのでご注意ください。
        </p>
      </Layout>
    </>
  );
};

export default privacy;
