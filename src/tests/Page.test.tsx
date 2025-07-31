import { render, screen } from '@testing-library/react';
import { Page } from '../pages/Page';

describe('Page', () => {
  const mockItems = [
    { title: 'Card 1', text: 'Text 1' },
    { title: 'Card 2', text: 'Text 2' },
  ];

  it('renders the page title', () => {
    render(<Page title="Test Page Title" items={[]} />);
    expect(screen.getByRole('heading', { name: /test page title/i })).toBeInTheDocument();
  });

  it('renders the correct number of cards', () => {
    render(<Page title="Test Page Title" items={mockItems} />);
    expect(screen.getAllByText(/card/i)).toHaveLength(2);
    expect(screen.getByText('Text 1')).toBeInTheDocument();
    expect(screen.getByText('Text 2')).toBeInTheDocument();
  });
});
