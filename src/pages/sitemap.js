import React from 'react';
import { Link } from 'gatsby';

import 'modern-css-reset';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const sitemap = () => {
  return (
    <>
      <Layout id='sitemap' title='サイトマップ'>
        <div className='sitemap_box'>
          <ul>
            <li>
              <Link to='/'>ホーム</Link>
            </li>
            <li>
              調査項目
              <ul>
                <li>
                  <Link to='/unfaithful/'>浮気・不倫・素行調査</Link>
                  <ul>
                    <li>
                      <Link to='/unfaithful/type/'>離婚の種類について</Link>
                    </li>
                    <li>
                      <Link to='/unfaithful/prove/'>内容証明について</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/evidence/'>裁判証拠収集</Link>
                </li>
                <li>
                  <Link to='/survey/'>結婚・身上調査</Link>
                </li>
                <li>
                  <Link to='/spying/'>素行・内偵調査</Link>
                </li>
                <li>
                  <Link to='/whereabouts/'>家出・所在調査</Link>
                </li>
                <li>
                  <Link to='/harassment/'>嫌がらせ対策</Link>
                </li>
                <li>
                  <Link to='/wiretap/'>盗聴・盗撮器発見</Link>
                </li>
                <li>
                  <Link to='/appraisal/'>指紋・声紋・筆跡鑑定</Link>
                </li>
                <li>
                  <Link to='/corporation/'>法人様向けサービス</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/flow/'>ご利用の流れ</Link>
            </li>
            <li>
              <Link to='/price/'>料金表</Link>
            </li>
            <li>
              <Link to='/case/'>調査事例のご紹介</Link>
              <ul>
                <li>
                  <Link to='/case/#faq'>よくある質問</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/company/'>会社概要</Link>
              <ul>
                <li>
                  <Link to='/company/#office'>事業所一覧</Link>
                </li>
                <li>
                  <Link to='/company/#access'>アクセス</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/toiawase/'>お問合せ</Link>
            </li>
            <li>
              <Link to='/recruit/'>採用情報</Link>
            </li>
            <li>
              <Link to='/category/blog/'>探偵ブログ</Link>
            </li>
            <li>
              <Link to='/sitemap/'>サイトマップ</Link>
            </li>
            <li>
              <Link to='/privacy/'>プライバシーポリシー</Link>
            </li>
          </ul>
        </div>
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

export default sitemap;
