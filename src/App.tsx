import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// layout imports
import { RootLayout } from './layouts/RootLayout';
import { ThemeLayout } from './layouts/ThemeLayout';

// theme imports
import { ThemeTypography } from './pages/theme/typography/ThemeTypography';
import { ThemeButton } from './pages/theme/button/ThemeButton';
import { ThemeBadge } from './pages/theme/badge/ThemeBadge';
import { ThemeInput } from './pages/theme/input/ThemeInput';
import { ThemeTextarea } from './pages/theme/textarea/ThemeTextarea';
import { ThemeSelect } from './pages/theme/select/ThemeSelect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'theme',
        element: <ThemeLayout />,
        children: [
          {
            path: 'typography',
            element: <ThemeTypography />,
          },
          {
            path: 'button',
            element: <ThemeButton />,
          },
          {
            path: 'badge',
            element: <ThemeBadge />,
          },
          { path: 'input', element: <ThemeInput /> },
          { path: 'textarea', element: <ThemeTextarea /> },
          { path: 'select', element: <ThemeSelect /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className='App font-inter'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
