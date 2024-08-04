

import React from 'react';
import BlogPost from './BlogPost';

const BlogPosts = ({ posts }) => {
  return (

      <div className="row ">
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>

  );
};

export default BlogPosts;
