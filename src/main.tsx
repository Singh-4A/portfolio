import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById("root")!).render(<SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
    <App />
</SnackbarProvider>);
