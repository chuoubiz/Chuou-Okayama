import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

const MAX_CONTENT_LENGTH = 100; // 最大文字数を設定してください

const TopBlog = () => {
  dayjs.locale('ja');
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(filter: { category: { id: { eq: "blog" } } }, sort: { date: DESC }, limit: 5) {
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
      <section id='topblog'>
        <div className='main-content'>
          <h2>探偵ブログ</h2>

          {posts.map((post) => (
            <div key={post.postsId} className='blog_list'>
              {post.eyecatch ? (
                <div className='blog_img'>
                  <a href={'/posts/' + post.postsId + '/'}>
                    <img src={post.eyecatch.url + '?fm=webp'} width={370} height={277} alt={post.title + 'サムネイル画像'} loading='lazy' />
                  </a>
                </div>
              ) : (
                <div className='blog_img'>
                  <a href={'/posts/' + post.postsId + '/'}>
                    <img src='/images/alternative-image.png' width={370} height={277} alt={post.title + 'の代替画像'} loading='lazy' />
                  </a>
                </div>
              )}

              <div className='blog_txt'>
                <Link to={`/posts/${post.postsId}`}>{post.title}</Link>
                <br />
                <time dateTime={dayjs.utc(post.date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ss')}>{dayjs.utc(post.date).tz('Asia/Tokyo').format('YYYY/MM/DD')}</time>
                <br />
                {stripHTML(post.content).length > MAX_CONTENT_LENGTH ? stripHTML(post.content).substring(0, MAX_CONTENT_LENGTH) + '...' : stripHTML(post.content)}
              </div>
            </div>
          ))}

          <p className='center'>
            <Link to='/category/blog/' className='bt02'>
              一覧はこちら »
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

// HTMLタグを削除する関数
function stripHTML(html) {
  if (html) {
    return html.replace(/<[^>]*>/g, '');
  }
  return '';
}

export default TopBlog;
