import {BrowserRouter, Routes, Route} from 'react-router-dom';


import './App.css'
import ExpenseTracker from './Components/ExpenseTracker';
import ShowData from './Components/ShowList';


function App(){
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<ExpenseTracker />}></Route>
          <Route path='/' element={<ShowData />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;