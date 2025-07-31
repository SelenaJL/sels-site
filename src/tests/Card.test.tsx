import { render, screen } from '@testing-library/react';
import { Card } from '../components/Card';

describe('Card', () => {
  it('renders with title and text', () => {
    render(<Card title="Test Title" text="Test Text" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('renders an image if provided', () => {
    render(<Card title="Test Title" text="Test Text" image="test-image.jpg" />);
    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
    expect(screen.getByAltText('Test Title')).toHaveAttribute('src', 'test-image.jpg');
  });

  it('renders a link if provided', () => {
    render(<Card title="Test Title" text="Test Text" link="https://example.com" />);
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', 'https://example.com');
  });
});
