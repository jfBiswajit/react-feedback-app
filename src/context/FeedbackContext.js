import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This is the item 1', rating: 1 },
    { id: 2, text: 'This is the item 2', rating: 2 },
    { id: 3, text: 'This is the item 3', rating: 3 },
    { id: 4, text: 'This is the item 4', rating: 4 },
    { id: 5, text: 'This is the item 5', rating: 5 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
