import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  let content = <p>No feedback yet.</p>;

  if (feedback.length) {
    content = (
      <AnimatePresence>
        {feedback.map((feedbackItem) => (
          <motion.div
            key={feedbackItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feedbackItem.id}
              item={feedbackItem}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    );
  }

  return <div className='feedback-list'> {content} </div>;
}

export default FeedbackList;
