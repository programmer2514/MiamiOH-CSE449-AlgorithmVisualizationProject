import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from '../../app/routes/home';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
]);

test('testing route rendering: /', async () => {
  render(<RouterProvider router={router} />);
  expect(screen.queryByText(/What's next\?/i)).toBeInTheDocument();
});
