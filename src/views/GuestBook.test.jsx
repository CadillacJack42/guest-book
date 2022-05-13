import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Should create new entry with user input', () => {
  it('Should login user and create a post', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const email = screen.getByPlaceholderText('Email');
    userEvent.type(email, 'testUser@user.com');

    const password = screen.getByPlaceholderText('Password');
    userEvent.type(password, '123456Aa');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await screen.findByText(/welcome testUser@user.com/i);

    const entry = await screen.findByPlaceholderText('Say something nice');

    userEvent.type(entry, 'This test post is amazing');

    const addEntry = await screen.findByRole('button', { name: 'Add Entry' });
    userEvent.click(addEntry);

    waitFor(() => {
      const res = screen.getByText(/this test post is amazing/i);
      screen.getByText('Created at');
      expect(res).toBeInTheDocument();
    });
  });
});
