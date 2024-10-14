import React, { useEffect, useState } from 'react';
import Post from './Post';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPostsAndComments = async () => {
      const [postsResponse, commentsResponse] = await Promise.all([
        fetch('https://api1.com/posts'),
        fetch('https://api2.com/comments')
      ]);
      const posts = await postsResponse.json();
      const comments = await commentsResponse.json();
      setPosts(posts);
      setComments(comments);
    };

    fetchPostsAndComments();
  }, []);

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





