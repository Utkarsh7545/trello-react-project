import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';

function App() {
  return (
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Homepage />
      </BrowserRouter>
  );
}

export default App;


