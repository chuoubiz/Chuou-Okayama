import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

const PostAside = () => {
  dayjs.locale('ja');
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(limit: 5, sort: { date: DESC }) {
        nodes {
          date
          title
          postsId
          content
          eyecatch {
            url
          }
        }
      }
    }
  `);
  const posts = data.allMicrocmsPosts.nodes;
  return (
    <>
      <aside>
        <div className='aside-inner'>
          <h3>最近の記事一覧</h3>
          <ul className='blog_list'>
            {posts.map((post) => (
              <li key={post.postsId}>
                <time className='txt12' dateTime={dayjs.utc(post.date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ss')}>
                  {dayjs.utc(post.date).tz('Asia/Tokyo').format('YYYY/MM/DD')}
                </time>
                <br />
                <Link to={`/posts/${post.postsId}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <div className='side_line'>
            <img src='/images/linea_logo.png' width='150' height='41' alt='LINE@' />
            LINEからお問い合わせできます！
            <div className='side_line_inner'>
              <div className='line_l'>
                QRコードから
                <br />「
                <a href='https://line.me/R/ti/p/65gpK3qcDs' target=''>
                  友だち登録
                </a>
                」すると、LINEでお問い合わせができます。
              </div>
              <img src='/images/line_qr.gif' width='93' height='93' alt='QRコード' className='pc' />
            </div>
            <a href='https://line.me/R/ti/p/65gpK3qcDs' target='_blank' className='smp'>
              <img src='/images/line_btn.png' width='139' height='24' alt='友だち追加' />
            </a>
          </div>
          <p>
            <a href='http://www.ncia-research.or.jp/' target='_blank'>
              <img src='/images/side_bn01.png' alt='全国調査業協同組合' />
            </a>
          </p>
          <p>
            <a href='http://www.pref.okayama.jp/kenkei/kenkei.htm' target='_blank'>
              <img src='/images/side_bn02.png' alt='岡山県警察' />
            </a>
          </p>
        </div>
      </aside>
    </>
  );
};

export default PostAside;
