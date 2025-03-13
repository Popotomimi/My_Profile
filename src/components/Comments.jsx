import axios from "axios";
import { useState, useEffect } from "react";

const Comments = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          "https://commentsnest.onrender.com/comments"
        );
        setComments(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newComment = {
        name: name,
        text: comment,
      };

      const req = await axios.post(
        "https://commentsnest.onrender.com/comments",
        newComment
      );

      setComments((prevComments) => [...prevComments, newComment]);

      setName("");
      setComment("");

      console.log(req);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="comments-container">
      <h2>Deixe seu comentário</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comentário..."></textarea>
        <input
          className="btn"
          type="submit"
          value={isSubmitting ? "Carregando..." : "Comentar"}
          disabled={isSubmitting}
        />
      </form>
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="comments">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <h3>{comment.name}</h3>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
