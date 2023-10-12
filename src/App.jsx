import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Cards from './Cards.jsx'

function App() {
  // const [count, setCount] = useState(0)

  let data = [
    {
      strMeal: "CBI-5",
      strMealThumb:
        "https://static.toiimg.com/photo/msid-90637724/90637724.jpg",
      idMeal: "Mammooty",
    },
    {
      strMeal: "Master piece",
      strMealThumb:
        "https://static.toiimg.com/photo/msid-90637724/90637724.jpg",
      idMeal: "Mammooty",
    },
    {
      strMeal: "Parole",
      strMealThumb:
        "https://static.toiimg.com/photo/msid-90637724/90637724.jpg",
      idMeal: "Mammooty",
    },
    {
      strMeal: "Aarat",
      strMealThumb:
        "https://www.pinkvilla.com/pics/480x480/566049375_spadikam-7-things_1280*720_202301.jpg",
      idMeal: "Mohanlal",
    },
    {
      strMeal: "Lucifer",
      strMealThumb:
        "https://www.pinkvilla.com/pics/480x480/566049375_spadikam-7-things_1280*720_202301.jpg",
      idMeal: "Mohanlal",
    },
    {
      strMeal: "Spadikam",
      strMealThumb:
        "https://www.pinkvilla.com/pics/480x480/566049375_spadikam-7-things_1280*720_202301.jpg",
      idMeal: "Mohanlal",
    },
    {
      strMeal: "Malayamkunj",
      strMealThumb:
        "https://i.ytimg.com/vi/9CisoE853Mw/maxresdefault.jpg",
      idMeal: "Fahad Fasil",
    },
    {
      strMeal: "Malik",
      strMealThumb:
        "https://i.ytimg.com/vi/9CisoE853Mw/maxresdefault.jpg",
      idMeal: "Fahad Fasil",
    },
    {
      strMeal: "Athiran",
      strMealThumb:
        "https://i.ytimg.com/vi/9CisoE853Mw/maxresdefault.jpg",
      idMeal: "Fahad Fasil",
    },
    
  ];

  return (
    
    <>
      <Header/>
      <div className='div1'>
       <input type="text" placeholder='Search Movies' />
      </div>
      <div className='div2'>
        {
          data.map(({strMeal,idMeal,strMealThumb})=>{
            return(
          <Cards image={strMealThumb} title= {strMeal} para={idMeal}/>
           ) })
        }
      </div>
      <Footer/>
    </>
  )
}

export default App
