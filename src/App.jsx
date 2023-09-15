import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [coursename, setCoursename] = useState([]);
  const [creditHr, setCreditHr] = useState(0);
  const [hourRemaining, setHourRemaining] = useState(20);

  const countCourse = (card) =>{
    const isExist = coursename.find(data => data.courseTitle == card.courseTitle)
    let creditHour = card.courseCredit;
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
    else {
      coursename.forEach((data) => {
        creditHour = creditHour + data.courseCredit;
      });
      const creditRemaining = 20 - creditHour;
      setCreditHr(creditHour);
      if(creditHour>20){
        return toast.error("You cann't take more than 20 hours credit", {
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
      setHourRemaining(creditRemaining);}
      setCoursename([...coursename, card]);
      return;
    }
  }
  

  return (
    <>
      <div className='headerContainer'>
        <Cards countCourse={countCourse}></Cards>
        <Cart coursename={coursename} creditHr={creditHr} hourRemaining={hourRemaining}></Cart>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
