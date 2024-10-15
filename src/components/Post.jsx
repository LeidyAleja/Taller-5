import React, { useEffect, useState } from 'react';
import '../assets/post.css';
import { FaThumbsUp, FaCommentAlt, FaShare, FaEllipsisH, FaHeart } from 'react-icons/fa';
import { ACTIONS } from "../redux/slice/users/types";
import { useDispatch } from 'react-redux';
import { thunks } from '../redux/slice/users/thunks';
import CommentsPost from './CommentsPost';

function Post({ postInformation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersInformation();
  }, []);

  const [getPostCompleteInformation, setPostCompleteInformation] = useState();
  const [numberComments, setNumberComments] = useState(null);

  const getUsersInformation = async () => {
    try {
      const response = await dispatch(thunks[ACTIONS.FETCH_USERS]());
      const users = response.payload;
      const userPost = users.filter((user) => user?.id == postInformation?.userId);
      const completePostInfo = { ...postInformation, user: userPost };
      setPostCompleteInformation(completePostInfo);
      console.log(completePostInfo);
    } catch (error) {
      console.error("Error obteniendo los posts:", error);
    }
  };

  const randomNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Jack", "Liam"];

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomIndex];
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-user">
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="profile-pic"
          />
          <div className="user-info">
            <span className="user-name">{getPostCompleteInformation?.user[0]?.name}</span>
          </div>
        </div>
      </div>

      <div className="post-content">
        <p>{getPostCompleteInformation?.body}</p>
      </div>

      <div className="post-reactions">
        <div className="reactions-left">
          <FaHeart className="reaction-icon" />
          <span>{getRandomName()} and {Math.floor(Math.random() * 5000)} others</span>
        </div>
        <div className="reactions-right">
          <span>{numberComments} comments</span> {" "}
          <span>{Math.floor(Math.random() * 20)} Shared</span>
        </div>
      </div>

      <div className="post-footer">
        <CommentsPost
          postId={postInformation?.id}
          setNumberComments={setNumberComments}
        />
      </div>
    </div>
  );
}

export default Post;
