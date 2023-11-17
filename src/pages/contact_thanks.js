import React from 'react';
import { Link } from 'gatsby';

import 'modern-css-reset';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const ContactThanks = () => {
  return (
    <>
      <Layout id='toiawase' slug='toiawase' title='ご相談・お問合せありがとうございました。' parentTitle='ご相談・お問合せ'>
        <h2>ご相談・お問合せありがとうございました。</h2>

        <p className='center'>送信は正常に完了しました。</p>

        <p className='center'>
          お問い合わせフォームより確認メールを送信いたしましたのでご確認ください。
          <br />
          なお、メールが届かない場合は以下よりお問い合わせ下さい。
        </p>

        <p className='center'>
          TEL:0120-30-6630　もしくは　
          <a href='mailto:okayama@chuou.biz'>okayama@chuou.biz</a>
        </p>

        <p className='center'>までお問い合わせください。よろしくお願いいたします。</p>

        <p className='center'>数日中にご連絡させていただきます。</p>

        <p className='center'>
          <Link to='/' className='form_bt'>
            ホームへ戻る
          </Link>
        </p>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <body className='subpage' />
    <Seo />
  </>
);

export default ContactThanks;
