
import './App.css';
import Navbar from './navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Questions from './questions/Questions';
import Responses from './responses/Responses';
function App() {
  return (
    <div >
      <Navbar/>

      <Routes>
        <Route exact path="/Questions" element={<Questions/>} ></Route>
        <Route exact path="/Responses" element={<Responses/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
