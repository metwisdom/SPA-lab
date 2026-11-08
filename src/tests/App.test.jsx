import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('project showcase', () => {
  it('adds a project and clears the form', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText('Title'), 'Portfolio');
    await user.type(screen.getByLabelText('Description'), 'A personal site');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument();
    expect(screen.getByText('A personal site')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toHaveValue('');
    expect(screen.getByLabelText('Description')).toHaveValue('');
  });

  it('filters projects by title', async () => {
    const user = userEvent.setup();
    render(<App />);

    const search = screen.getByRole('textbox', { name: 'Search Projects' });
    await user.type(search, 'Project 2');

    expect(screen.getByRole('heading', { name: 'Project 2' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Project 1' })).not.toBeInTheDocument();
  });
});