import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@kpv2004/quark-ui/styles';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
