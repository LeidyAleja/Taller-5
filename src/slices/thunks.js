import { setPosts } from './postsSlice';
import { setComments } from './commentsSlice';

export const fetchPostsAndComments = () => async (dispatch) => {
  const [postsResponse, commentsResponse] = await Promise.all([
    // fetch('https://api1.com/posts'),
    fetch('https://api2.com/comments'),
  ]);
  const posts = await postsResponse.json();
  const comments = await commentsResponse.json();
  dispatch(setPosts(posts));
  dispatch(setComments(comments));
};
