import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../slices/commentsSlice';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(addComment({ text: comment }));
      setComment(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe un comentario"
      />
      <button type="submit">Agregar Comentario</button>
    </form>
  );
};

export default CommentForm;
