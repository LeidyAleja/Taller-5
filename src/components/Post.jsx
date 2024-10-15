import React, { useEffect, useState } from 'react';
import '../assets/post.css';
import { FaThumbsUp, FaCommentAlt, FaShare, FaEllipsisH, FaHeart } from 'react-icons/fa'; // Importa el icono de corazón
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

  // Array de nombres aleatorios
  const randomNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Jack", "Liam"];

  // Función para obtener un nombre aleatorio
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomIndex];
  };

  return (
    <div className="post-container">
      {/* Header del post */}
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
    
      {/* Cuerpo del post */}
      <div className="post-content">
        <p>{getPostCompleteInformation?.body}</p>
      </div>

      <div className="post-reactions">
        <div className="reactions-left">
          <FaHeart className="reaction-icon" /> {/* Cambiado a icono de corazón */}
          <span>{getRandomName()} and {Math.floor(Math.random() * 5000)} others</span> {/* Nombre aleatorio */}
        </div>
        <div className="reactions-right">
          <span>{numberComments} comments</span> {" "}
          <span>{Math.floor(Math.random() * 20)} Shared</span>
        </div>
      </div>
    
      {/* Footer del post */}
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
