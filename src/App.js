import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import RankPage from './pages/RankPage';
import UserPage from './pages/UserPage';
import { reset } from './styles/reset';

function App() {
  return (
    <AppComponent>
      <Global styles={reset} />
      <Header />
      <Routes>
        <Route path="/" element={<UserPage />} />{' '}
        <Route path="/rank" element={<RankPage />} />
      </Routes>
      <Footer />
    </AppComponent>
  );
}

export default App;

const AppComponent = styled.div``;
