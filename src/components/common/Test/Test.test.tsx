import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Test from './Test';
import sum from './sum';

// util sum funciton test
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// component test
describe('Test Component', () => {
  const text = 'test text';
  it('render component', () => {
    render(<Test text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
