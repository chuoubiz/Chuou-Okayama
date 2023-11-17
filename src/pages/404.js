import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
const NotFound = () => {
  return (
    <>
      <Layout id='notfound' title='お探しの記事は見つかりませんでした。'>
        <h3 className='subtitle'>お探しのページは、移動または削除された可能性があります。</h3>
        <p>
          総合探偵社中央リサーチ岡山のWEBサイトをご覧頂きありがとうございます。
          <br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。
          <br />
          お手数をおかけしますが、もう一度目的のページをお探し下さい。
        </p>
        <p className='center'>
          <Link to='/' className='bt02'>
            トップページへ戻る
          </Link>
        </p>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <Seo title='ページが見つかりません' description='お探しのページは、移動または削除された可能性があります。' article={true} />
  </>
);

export default NotFound;
