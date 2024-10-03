import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store.ts';
import './GlobalSyles/animatons.scss';
import './index.scss';
import { ReceiptPage } from './Pages/ReceiptPage/ReceiptPage.tsx';

const Home = lazy(() => import('./Pages/Home.tsx'));
const Cart = lazy(() => import('./Pages/Cart/Cart.tsx'));
const Root = lazy(() => import('./Pages/Root.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Suspense>
          <Routes>
            <Route path="*" element={<Navigate to={'/'} />} />
            <Route path="/" element={<Root />}>
              <Route
                index
                element={
                  <Suspense>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="cart"
                element={
                  <Suspense>
                    <Cart />
                  </Suspense>
                }
              />
            </Route>
            <Route path="receipt" element={<ReceiptPage />} />
          </Routes>
        </Suspense>
      </Router>
    </PersistGate>
  </Provider>,
);
