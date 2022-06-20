
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Student from './components/Student'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/student' element = {<Student/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
