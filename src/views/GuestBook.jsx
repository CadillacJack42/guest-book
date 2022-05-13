import { useEffect, useState } from 'react';
import { EntryList } from '../components/EntryList';
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

  useEffect(() => {
    getEntries().then(setEntries);
  }, []);

  return (
    <>
      <h3>Welcome {auth.user.email}</h3>
      <button onClick={() => auth.logOut()}>Log Out</button>
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
        return <EntryList key={entry.id} entry={entry} />;
      })}
    </>
  );
};
