import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import UserPage from './pages/UserPage';
import { getUserData } from './redux/reducers/userDataReducer';
import { reset } from './styles/reset';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData('dd'));
  }, [dispatch]);

  return (
    <AppComponent>
      <Global styles={reset} />
      <Header />
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
      <Footer />
    </AppComponent>
  );
}

export default App;

const AppComponent = styled.div``;
