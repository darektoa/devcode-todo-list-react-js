import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Activity from './pages/Activity';
import Header from './components/Header/Header';
import Initialize from './redux/initialize';

const App = () => {
  Initialize();

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Activity/>} />
    </Routes> 
  </main>
)

export default App;