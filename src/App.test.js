import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the data entry form', () => {
  render(<App />);
  expect(screen.getByText(/data entry form/i)).toBeInTheDocument();
});

test('shows entered information after submit', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'pritesh.patel2@georgebrown.ca' } });
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Pritesh Patel' } });
  fireEvent.change(screen.getByLabelText('Address'), { target: { value: '160 Kendal Ave' } });
  fireEvent.change(screen.getByLabelText('City'), { target: { value: 'Toronto' } });
  fireEvent.change(screen.getByLabelText('Province'), { target: { value: 'Ontario' } });
  fireEvent.change(screen.getByLabelText('Postal Code'), { target: { value: 'M5R 1M3' } });
  fireEvent.click(screen.getByLabelText(/agree terms/i));
  fireEvent.click(screen.getByText('Submit'));

  expect(screen.getByText('Full Name:')).toBeInTheDocument();
  expect(screen.getByText('Pritesh Patel')).toBeInTheDocument();
  expect(screen.getByText('M5R 1M3')).toBeInTheDocument();
});
