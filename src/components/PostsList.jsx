import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAndComments } from '../redux/slices/thunks';
import Post from './Post';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(fetchPostsAndComments());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <Post 
          key={post.id}
          user={post.user} 
          content={post.content} 
          comments={comments.filter(comment => comment.postId === post.id)} 
        />
      ))}
    </div>
  );
};

export default PostsList;






