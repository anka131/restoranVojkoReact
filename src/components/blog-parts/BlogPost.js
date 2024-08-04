
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <article className="col-md-4">
      <img src={post.image} alt={post.title} />
      <div>
      <p>{post.date}</p>
      <hr />
      <h5>{post.title}</h5>
      <p>{post.content}</p>
      <a href={post.link}> <button>Pročitaj više</button></a>
      </div>

      
    </article>
  );
};

export default BlogPost;

