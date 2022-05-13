import { useAuth } from '../hooks/useAuth';

export const EntryList = (entry) => {
  const auth = useAuth();

  const parseDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toDateString();
  };
  return (
    <div>
      <p>{entry.entry.content}</p>
      <p>
        Created at: {parseDate(entry.entry.created_at)} By: {auth.user.email}
      </p>
    </div>
  );
};
