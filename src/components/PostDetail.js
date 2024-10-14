import React from 'react';
import { FaComments } from 'react-icons/fa';  

const PostDetail = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <FaComments /> {post.comments.length} Comments {/* Muestra el ícono y número de comentarios */}
      </div>
    </div>
  );
};

export default PostDetail;
