import { useState } from 'react';
import FeedbackList from './components/FeedbackList.jsx';
import Header from './components/Header.jsx';
import feedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  
  const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter(item => item.id !== id));
      }
  }
  
  return (
    <div className='container'>
      <Header />
      <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
    </div>
  );
}

export default App;
