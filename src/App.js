import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber} from './actions/index'

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <div className='bg-dark col-md-3 d-flex justify-content-between  py-1 m-0 p-0'>
      <a  onClick={() => {dispatch(incNumber())}} className='bg-warning px-2' > <span> + </span> </a>
      <input className='text-center p-0 m-0' type="text" value = {myState} />
      <a className='bg-warning px-2' onClick={() => {dispatch(decNumber())}}> <span> - </span> </a>
      </div>
    </div>
    </>
  )
}

export default App

