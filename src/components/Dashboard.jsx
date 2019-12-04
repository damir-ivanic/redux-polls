import React, { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [showAnswered, setShowAnswered] = useState(false);
  const users = useSelector(state => state.users.users);
  const polls = useSelector(state => state.polls.polls);
  const user = useSelector(state => state.authUser.authUser);
  const answers = users[user].answers;
  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const list = showAnswered === true ? answered : unanswered;

  return (
    <div>
      <div className="dashboard-toggle">
        <button
          style={{
            textDecoration: showAnswered === false ? "underline" : null
          }}
          onClick={() => setShowAnswered(false)}
        >
          Unanswered
        </button>
        <span>|</span>
        <button
          style={{
            textDecoration: showAnswered === true ? "underline" : null
          }}
          onClick={() => setShowAnswered(true)}
        >
          Unanswered
        </button>
      </div>

      <ul className="dashboard-list">
        {list.map(poll => (
          <li key={poll.id}>{poll.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
