import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
      </BrowserRouter>
  );
}

export default App;


