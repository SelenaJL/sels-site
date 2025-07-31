import { render, screen } from '@testing-library/react';
import { Page } from '../pages/Page';

describe('Page', () => {
  const mockCardsContent = [
    { title: 'Card 1', text: 'Text 1' },
    { title: 'Card 2', text: 'Text 2' },
  ];

  it('renders the correct number of cards', () => {
    render(<Page cardsContent={mockCardsContent} />);
    expect(screen.getAllByText(/card/i)).toHaveLength(2);
    expect(screen.getByText('Text 1')).toBeInTheDocument();
    expect(screen.getByText('Text 2')).toBeInTheDocument();
  });

  it('renders the main card content if provided', () => {
    const mainCardContent = { title: 'Main Card Title', text: 'Main Card Text' };
    render(<Page cardsContent={[]} mainCardContent={mainCardContent} />);
    expect(screen.getByText('Main Card Title')).toBeInTheDocument();
    expect(screen.getByText('Main Card Text')).toBeInTheDocument();
  });
});