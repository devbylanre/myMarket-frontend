import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// layout imports
import { RootLayout } from './layouts/RootLayout';
import { ThemeLayout } from './layouts/ThemeLayout';
import { SettingsLayout } from './layouts/SettingsLayout';

// theme imports
import { ThemeTypography } from './pages/theme/typography/ThemeTypography';
import { ThemeButton } from './pages/theme/button/ThemeButton';
import { ThemeBadge } from './pages/theme/badge/ThemeBadge';
import { ThemeInput } from './pages/theme/input/ThemeInput';
import { ThemeTextarea } from './pages/theme/textarea/ThemeTextarea';
import { ThemeSelect } from './pages/theme/select/ThemeSelect';
import { ThemeSwitch } from './pages/theme/switch/ThemeSwitch';
import { ThemeCheckbox } from './pages/theme/checkbox/ThemeCheckbox';
import { ThemeToast } from './pages/theme/toast/ThemeToast';
import { ThemeAvatar } from './pages/theme/avatar/ThemeAvatar';
import { ThemeSeparator } from './pages/theme/separator/ThemeSeparator';
import { ThemeAlert } from './pages/theme/alert/ThemeAlert';
import { ThemeCardPage } from './pages/theme/card/ThemeCard';
import { ThemeDropdown } from './pages/theme/dropdown/ThemeDropdown';
import { ThemeAccordion } from './pages/theme/accordion/ThemeAccordion';
import { ThemeSpinner } from './pages/theme/spinner/ThemeSpinner';

// pages
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { HomePage } from './pages/HomePage';
import { Sell } from './pages/SellPage';
import { SavedPage } from './pages/SavedPage';
import { ProfilePage } from './pages/profile/ProfilePage';

// settings pages
import { PersonalPage } from './pages/settings/PersonalPage';

// contexts
import { UserContextProvider } from './contexts/user.context';
import { VerifyTokenPage } from './pages/VerifyTokenPage';
import { Session } from './pages/Session';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'session',
        element: <Session />,
      },
      {
        path: 'auth',
        children: [
          {
            index: true,
            element: <SignInPage />,
          },
          {
            path: 'verify/token/:token',
            element: <VerifyTokenPage />,
          },
        ],
      },
      {
        path: 'app',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'saved',
            element: <SavedPage />,
          },
          {
            path: 'sell',
            element: <Sell />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: 'app/settings',
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <PersonalPage />,
          },
        ],
      },
      {
        path: 'theme',
        element: <ThemeLayout />,
        children: [
          {
            path: 'typography',
            element: <ThemeTypography />,
          },
          {
            path: 'alert',
            element: <ThemeAlert />,
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
          { path: 'switch', element: <ThemeSwitch /> },
          { path: 'checkbox', element: <ThemeCheckbox /> },
          { path: 'toast', element: <ThemeToast /> },
          { path: 'avatar', element: <ThemeAvatar /> },
          { path: 'separator', element: <ThemeSeparator /> },
          { path: 'card', element: <ThemeCardPage /> },
          { path: 'dropdown', element: <ThemeDropdown /> },
          { path: 'accordion', element: <ThemeAccordion /> },
          { path: 'spinner', element: <ThemeSpinner /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className='App font-inter'>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
}

export default App;
