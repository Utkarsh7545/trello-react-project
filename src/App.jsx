import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Navbar from './components/common/Navbar';
import BoardsPage from './pages/BoardsPage';
import ListPage from './pages/ListPage';
import NotFoundPage from './pages/NotFoundPage';
import theme from './theme';
import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<BoardsPage />} />
          <Route path="/boards" element={<BoardsPage />} />
          <Route path="/board/:id" element={<ListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
