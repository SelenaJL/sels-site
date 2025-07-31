import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TopBar } from '../components/TopBar';

describe('TopBar', () => {
  it('renders the title and navigation links', () => {
    render(
      <Router>
        <TopBar />
      </Router>
    );

    expect(screen.getByText('Selena Lourenco')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });
});
