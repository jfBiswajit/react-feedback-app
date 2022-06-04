import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  let content = <p>No feedback yet.</p>;

  if (feedback.length) {
    content = feedback.map((feedbackItem) => (
      <FeedbackItem
        key={feedbackItem.id}
        text={feedbackItem.text}
        rating={feedbackItem.rating}
      />
    ));
  }

  return <div className='feedback-list'> {content} </div>;
}

export default FeedbackList;
