import { useState } from 'react';
import FeedbackList from './components/FeedbackList.jsx';
import Header from './components/Header.jsx';
import feedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  
  return (
    <div className='container'>
      <Header />
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
