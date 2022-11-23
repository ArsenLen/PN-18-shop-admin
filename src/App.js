import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
