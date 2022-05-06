import React from 'react';

export const GuestBook = () => {
  return (
    <>
      <h3>Welcome To Cadillac Jacks Guest Book</h3>
      <label htmlFor="comment">Add Entry</label>
      <input
        type="text"
        name="comment"
        placeholder="Say something nice"
      ></input>
    </>
  );
};
