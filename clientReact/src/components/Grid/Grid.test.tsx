import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';

test('renders grid with robot icon at position', () => {
  render(<Grid robotPosition={{ x: 0, y: 0, facing: 'NORTH' }} onCellClick={() => {}} />);
  expect(screen.getByText('🤖')).toBeInTheDocument();
});


