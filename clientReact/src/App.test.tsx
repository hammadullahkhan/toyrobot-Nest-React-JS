import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Toy Robot Simulator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Toy Robot Simulator/i);
  expect(titleElement).toBeInTheDocument();
});

// test('renders instructions', () => {
//   render(<App />);
//   expect(screen.getByText(/Click on the grid to place the robot/i)).toBeInTheDocument();
// });