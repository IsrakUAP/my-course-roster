import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [coursename, setCoursename] = useState([]);

  const countCourse = (card) =>{
    const isExist = coursename.find(data => data.courseTitle == card.courseTitle)

    if (isExist) {
     return toast.error('This course is already added in the list', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      setCoursename([...coursename, card]);
      return;
    }
  }
  

  return (
    <>
      <div className='headerContainer'>
        <Cards countCourse={countCourse}></Cards>
        <Cart coursename={coursename}></Cart>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
