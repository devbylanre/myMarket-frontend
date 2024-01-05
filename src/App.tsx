import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// layout imports
import { RootLayout } from './layouts/root/RootLayout';
import { ThemeLayout } from './layouts/theme/ThemeLayout';
import { AppLayout } from './layouts/app/AppLayout.tsx';

// components pages
import { TypographyPage } from './pages/components/typography/TypographyPage';
import { ButtonPage } from './pages/components/button/ButtonPage';
import { BadgePage } from './pages/components/badge/BadgePage';
import { InputPage } from './pages/components/input/InputPage';
import { TextareaPage } from './pages/components/textarea/TextareaPage';
import { SelectPage } from './pages/components/select/SelectPage';
import { SwitchPage } from './pages/components/switch/SwitchPage';
import { CheckboxPage } from './pages/components/checkbox/CheckboxPage';
import { ToastPage } from './pages/components/toast/ToastPage';
import { AvatarPage } from './pages/components/avatar/AvatarPage';
import { SeparatorPage } from './pages/components/separator/SeparatorPage';
import { AlertPage } from './pages/components/alert/AlertPage';
import { CardPage } from './pages/components/card/CardPage';
import { DropdownPage } from './pages/components/dropdown/DropdownPage';
import { AccordionPage } from './pages/components/accordion/AccordionPage';
import { SpinnerPage } from './pages/components/spinner/SpinnerPage';

// app pages
import { ShopPage } from './pages/app/shop/ShopPage';
import { SavedPage } from './pages/app/SavedPage';
import { ProfilePage } from './pages/app/profile/ProfilePage';
import { SellPage, SellPageLoader } from './pages/app/sell/SellPage';
import { SetupPage } from './pages/app/sell/SetupPage';
import { ProductPage } from './pages/app/product/ProductPage';
import { SettingsPage } from './pages/app/settings/SettingsPage';

// pages
import { IndexPage } from './pages/IndexPage';
import { AuthPage } from './pages/AuthPage';
import { Session } from './pages/Session';
import { VerifyEmailPage } from './pages/VerifyEmailPage';

// loaders
import { ShopPageLoader } from './pages/app/shop/Loader';
import { ProfilePageLoader } from './pages/app/profile/ProfilePageLoader';
import { ProductPageLoader } from './pages/app/product/Loader';

// routes error component
import { ShopPageError } from './pages/app/shop/Error';
import { ProfilePageError } from './pages/app/profile/ProfilePageError';
import { ProductPageError } from './pages/app/product/Error';

// contexts
import { UserContextProvider } from './contexts/user';
import { ProductContextProvider } from './contexts/product';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'auth', element: <AuthPage /> },
      { path: 'session', element: <Session /> },
      { path: 'email/verify', element: <VerifyEmailPage /> },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          { path: 'saved', element: <SavedPage /> },
          { path: 'settings', element: <SettingsPage /> },
          {
            path: 'shop',
            children: [
              {
                index: true,
                element: <ShopPage />,
                loader: ShopPageLoader,
                errorElement: <ShopPageError />,
              },
              {
                path: 'product/:id',
                element: <ProductPage />,
                errorElement: <ProductPageError />,
                loader: ProductPageLoader,
              },
            ],
          },
          {
            path: 'profile/:id',
            loader: ProfilePageLoader,
            element: <ProfilePage />,
            errorElement: <ProfilePageError />,
          },
          {
            path: 'sell',
            children: [
              { index: true, element: <SellPage /> },
              {
                path: ':id',
                element: <SellPage />,
                loader: SellPageLoader,
              },
              { path: 'setup', element: <SetupPage /> },
            ],
          },
        ],
      },

      {
        path: 'components',
        element: <ThemeLayout />,
        children: [
          { path: 'typography', element: <TypographyPage /> },
          { path: 'alert', element: <AlertPage /> },
          { path: 'button', element: <ButtonPage /> },
          { path: 'badge', element: <BadgePage /> },
          { path: 'input', element: <InputPage /> },
          { path: 'textarea', element: <TextareaPage /> },
          { path: 'select', element: <SelectPage /> },
          { path: 'switch', element: <SwitchPage /> },
          { path: 'checkbox', element: <CheckboxPage /> },
          { path: 'toast', element: <ToastPage /> },
          { path: 'avatar', element: <AvatarPage /> },
          { path: 'separator', element: <SeparatorPage /> },
          { path: 'card', element: <CardPage /> },
          { path: 'dropdown', element: <DropdownPage /> },
          { path: 'accordion', element: <AccordionPage /> },
          { path: 'spinner', element: <SpinnerPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className='App font-inter'>
      <HelmetProvider>
        <UserContextProvider>
          <ProductContextProvider>
            <RouterProvider router={router} />
          </ProductContextProvider>
        </UserContextProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
