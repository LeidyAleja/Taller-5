import React, { useEffect, useState, memo } from 'react';
import '../assets/comments.css'; 
import { ACTIONS } from "../redux/slice/comments/types";
import { useDispatch } from 'react-redux';
import { thunks } from '../redux/slice/comments/thunks';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CommentsPost = memo(function CommentsPost({ postId, setNumberComments }) {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (postId) getCommentsInformation(postId);
  }, [postId]);

  const getCommentsInformation = async (id) => {
    try {
      const response = await dispatch(thunks[ACTIONS.FETCH_COMMENTS](id));
      setComments(response.payload);
      setNumberComments(response.payload.length);
    } catch (error) {
      console.error("Error obteniendo los comentarios:", error);
    }
  };

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div className="comments-container">
      <div className="comments-header" onClick={toggleAccordion}>
        <h3 className="comments-title">Comments</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {isOpen && (
        <div className="comments-content">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-header">
                <img
                  src={`https://i.pravatar.cc/40?u=${comment.email}`}
                  alt="user avatar"
                  className="comment-avatar"
                />
                <div className="comment-info">
                  <span className="comment-author">{comment.name}</span>
                  <span className="comment-email">{comment.email}</span>
                </div>
              </div>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default CommentsPost;
