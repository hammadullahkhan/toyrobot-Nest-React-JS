import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('invokes callbacks on button clicks', () => {
  const onMove = jest.fn();
  const onLeft = jest.fn();
  const onRight = jest.fn();
  const onReport = jest.fn();

  render(<Controls onMove={onMove} onLeft={onLeft} onRight={onRight} onReport={onReport} />);

  fireEvent.click(screen.getByText(/LEFT/));
  fireEvent.click(screen.getByText(/RIGHT/));
  fireEvent.click(screen.getByText(/MOVE/));
  fireEvent.click(screen.getByText(/REPORT/));

  expect(onLeft).toHaveBeenCalled();
  expect(onRight).toHaveBeenCalled();
  expect(onMove).toHaveBeenCalled();
  expect(onReport).toHaveBeenCalled();
});


