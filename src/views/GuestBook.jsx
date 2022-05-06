import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getEntries, insertEntry } from '../utils/fetch-utils';

export const GuestBook = () => {
  const auth = useAuth();
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertEntry(auth.user.id, newEntry);
    await getEntries().then(setEntries);
  };

  const handleChange = (e) => {
    setNewEntry(e.target.value);
  };
  const parseDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toDateString();
  };

  useEffect(() => {
    getEntries().then(setEntries);
  }, []);

  return (
    <>
      <h3>Welcome {auth.user.email}</h3>
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
          <div key={entry.id}>
            <p>{entry.content}</p>
            <p>
              Created at: {parseDate(entry.created_at)} By: {auth.user.email}
            </p>
          </div>
        );
      })}
    </>
  );
};
