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
  const [courseCost, setCourseCost] = useState(0);

  const countCourse = (card) => {
    const isExist = coursename.find(data => data.courseTitle == card.courseTitle)
    let creditHour = card.courseCredit;
    let price = card.courseFee;
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
        price = price + data.courseFee;
      });
      const creditRemaining = 20 - creditHour;
      setCreditHr(creditHour);
      if (creditHour > 20) {
        return toast.error("You are not allowed to take more than 20 hours of credit.", {
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
        setHourRemaining(creditRemaining);
        setCoursename([...coursename, card]);
        setCourseCost(price);
      }

      return;
    }
  }


  return (
    <>
      <p className='headerName'>Course Registration</p>
      <div className='headerContainer'>
        <Cards countCourse={countCourse}></Cards>
        <Cart coursename={coursename} creditHr={creditHr} hourRemaining={hourRemaining} courseCost={courseCost}></Cart>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
