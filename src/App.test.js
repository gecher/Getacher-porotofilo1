import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  // Just check that something renders
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});