import { CardProps } from "../../types/CardProps";
import "./Card.css";

export function Card({ profile, swipe, onHandleSwipe }: CardProps) {
  return (
    <section className="card-container">
      <div className={`card ${swipe}`}>
        <h3>
          {profile?.name?.first} {profile?.name?.last}{" "}
        </h3>
        <img src={profile?.picture?.large} alt={profile?.name?.first} />
        <div className="row-btn-container">
          <button
            onClick={() => onHandleSwipe("reject", profile?.id)}
            className="reject-btn"
          >
            Reject
          </button>
          <button
            onClick={() => onHandleSwipe("like", profile?.id)}
            className="like-btn"
          >
            Like
          </button>
        </div>
      </div>
    </section>
  );
}
