import React from 'react';
import './App.css';

const App: React.FC = function () {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default App;
