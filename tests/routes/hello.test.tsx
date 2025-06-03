import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Hello from '../../app/routes/hello';

const router = createBrowserRouter([
  { path: '/', element: <Hello /> },
]);

test('testing route rendering: /hello', async () => {
  render(<RouterProvider router={router} />);
  expect(screen.queryByText(/What's next\?/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Hello World/i)).toBeInTheDocument();
});
