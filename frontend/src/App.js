import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Menu from './components/Menu/Menu.jsx';
import TaskList from './pages/TaskList/TaskList.jsx';

function App() {
  return (
    <div className="App">
            <Menu/>
             <TaskList/>
            <Footer/>
    </div>
  );
}

export default App;
