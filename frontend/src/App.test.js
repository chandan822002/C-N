import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar component', () => {
  render(<App />);
  const navbarElement = screen.getByRole('navigation');  // Assuming your Navbar uses <nav> or a similar role
  expect(navbarElement).toBeInTheDocument();
});

test('renders AllRoutes component', () => {
  render(<App />);
  const allRoutesElement = screen.getByText(/home/i);  // You can adjust this text based on your actual component rendering
  expect(allRoutesElement).toBeInTheDocument();
});
