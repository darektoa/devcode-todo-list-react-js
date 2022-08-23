import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Activity from './pages/Activity';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Activity/>} />
    </Routes>
  );
}

export default App;