import { BrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/root';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </BrowserRouter>
  );
}