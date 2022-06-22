
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Student from './components/Student'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import AddStud from './components/AddStud';
import EditStudent from './components/EditStudent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/home' element = {<Home/>}/>
        <Route path = '/student' element = {<Student/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/EditStudent' element = {<EditStudent/>}/>
        <Route path = '/AddStud' element = {<AddStud/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
