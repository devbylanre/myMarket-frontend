import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// layout imports
import { RootLayout } from './layouts/root/RootLayout';

// theme layout
import { ThemeLayout } from './layouts/theme/ThemeLayout';

// theme layout pages
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

// settings layout
import { SettingsLayout } from './layouts/settings/SettingsLayout';

// settings layout pages
import { PersonalPage } from './pages/app/settings/personal/PersonalPage';
import { AuthenticationPage } from './pages/app/settings/authentication/AuthenticationPage';
import { SocialPage } from './pages/app/settings/social/SocialPage';
import { StorePage } from './pages/app/settings/store/StorePage';

// app layout
import { AppLayout } from './layouts/app/AppLayout.tsx';

// app layout pages
import { HomePage } from './pages/app/HomePage';
import { SavedPage } from './pages/app/SavedPage';
import { ProfilePage } from './pages/app/profile/ProfilePage';
import { SellPage } from './pages/app/sell/SellPage';
import { SetupPage } from './pages/app/sell/SetupPage';

// pages
import { SignUpPage } from './pages/SignUpPage';
import { AuthPage } from './pages/AuthPage';
import { Session } from './pages/Session';
import { VerifyTokenPage } from './pages/VerifyTokenPage';

// contexts
import { UserContextProvider } from './contexts/user.context';
import { ProductContextProvider } from './contexts/product.context';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'sign-up', element: <SignUpPage /> },
      { path: 'session', element: <Session /> },
      {
        path: 'auth',
        children: [
          { index: true, element: <AuthPage /> },
          { path: 'verify/:token', element: <VerifyTokenPage /> },
        ],
      },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'saved', element: <SavedPage /> },
          {
            path: 'sell',
            children: [
              { index: true, element: <SellPage /> },
              { path: 'setup', element: <SetupPage /> },
            ],
          },
          { path: 'profile', element: <ProfilePage /> },
        ],
      },
      {
        path: 'app/settings',
        element: <SettingsLayout />,
        children: [
          { index: true, element: <PersonalPage /> },
          { path: 'auth', element: <AuthenticationPage /> },
          { path: 'social', element: <SocialPage /> },
          { path: 'store', element: <StorePage /> },
        ],
      },
      {
        path: 'theme',
        element: <ThemeLayout />,
        children: [
          { path: 'typography', element: <ThemeTypography /> },
          { path: 'alert', element: <ThemeAlert /> },
          { path: 'button', element: <ThemeButton /> },
          { path: 'badge', element: <ThemeBadge /> },
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
        <ProductContextProvider>
          <RouterProvider router={router} />
        </ProductContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
