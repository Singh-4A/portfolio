import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SnackbarProvider, useSnackbar } from 'notistack';
import { ShieldCloseIcon } from 'lucide-react';
function CloseButton({ snackbarKey }) {
  const { closeSnackbar } = useSnackbar();
  return <p style={{
    cursor:'pointer'
  }} onClick={() => closeSnackbar(snackbarKey)}><ShieldCloseIcon/></p>;
}
createRoot(document.getElementById("root")!).render(<SnackbarProvider   action={key => <CloseButton snackbarKey={key} />} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
    <App />
</SnackbarProvider>);
