import './App.css';
import 'tw-elements';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Completed from './Pages/CompletedTask/Completed';
import ToDo from './Pages/ToDos/ToDo';
import Calender from './Pages/Calender/Calender';
import Header from './Components/Header';
import AddToDo from './Components/AddToDo/AddToDo';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedtask' element={<Completed></Completed>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='/adtodo' element={<AddToDo></AddToDo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
