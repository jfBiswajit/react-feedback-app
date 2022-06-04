import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  let content = <p>No feedback yet.</p>;

  if (feedback.length) {
    content = feedback.map((feedbackItem) => (
      <FeedbackItem
        key={feedbackItem.id}
        item={feedbackItem}
        handleDelete={handleDelete}
      />
    ));
  }

  return <div className='feedback-list'> {content} </div>;
}

export default FeedbackList;
