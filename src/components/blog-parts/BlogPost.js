
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <article className="col-md-4">
      <img src={post.image} alt={post.title} />
      <p>{post.date}</p>
      <hr />
      <h5>{post.title}</h5>
      <p>{post.content}</p>
      <button><a href={post.link}>Pročitaj više</a></button>
    </article>
  );
};

export default BlogPost;

