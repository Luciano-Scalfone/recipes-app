import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const appComponent = render(<App />);
  
  expect(appComponent).toBeDefined();
});
