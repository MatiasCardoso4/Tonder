import { CardProps } from "../../types/CardProps";
import './SearchingCard.css'

export const SearchingCard= ({ profile, swipe}: CardProps )=> {
  return (
    <section className="card-container">
      <div className={`card ${swipe}`}>
        <h3>Looking for more users ...</h3>
        <div className="row-btn-container">
          <button className="reject-btn" disabled={!profile}>
            Reject
          </button>
          <button className="like-btn" disabled={!profile}>
            Like
          </button>
        </div>
      </div>
    </section>
  );
};
