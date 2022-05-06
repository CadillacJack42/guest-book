import React, { useState } from 'react';

export const GuestBook = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newEntry);
  };

  const handleChange = (e) => {
    setNewEntry(e.target.value);
  };

  return (
    <>
      <h3>Welcome To Cadillac Jacks Guest Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Add Entry</label>
        <input
          type="text"
          name="comment"
          placeholder="Say something nice"
          onChange={handleChange}
        ></input>
        <button>Add Entry</button>
      </form>
      {entries.map((entry) => {
        return (
          <>
            <p>{entry}</p>
          </>
        );
      })}
    </>
  );
};
