import './App.css';
import '@fontsource/roboto';
import React from 'react';
import NavBar from './components/Navbar';
import FilmGrid from './components/FilmGrid';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { DarkModeContext } from './context/DarkModeContext';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Footer from './components/Footer';

const App = () => {
  const { theme } = React.useContext(DarkModeContext);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<FilmGrid />} />
          <Route path="/home" element={<FilmGrid />} />
          <Route path="/news" element={<News />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
