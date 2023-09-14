import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart';


function App() {
  const [coursename, setCoursename] = useState([]);

  const countCourse = (card) =>{
    const isExist = coursename.find(data => data.courseTitle == card.courseTitle)

    if (isExist) {
      alert('This course is already added in the list')
  
    }
    else{
      setCoursename([...coursename, card]);
    }
  }
  

  return (
    <>
      <div className='headerContainer'>
        <Cards countCourse={countCourse}></Cards>
        <Cart coursename={coursename}></Cart>
      </div>
    </>
  )
}

export default App
