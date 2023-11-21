import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Tokyo');

const TopHeadBlog = () => {
  dayjs.locale('ja');
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsPosts(filter: { category: { id: { eq: "blog" } } }, sort: { date: DESC }, limit: 1) {
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
      {posts.map((post) => (
        <div key={post.postsId} className='post'>
          <Link to={`/posts/${post.postsId}`}>{post.title}</Link>
        </div>
      ))}
    </>
  );
};

export default TopHeadBlog;
