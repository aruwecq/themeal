import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
function Header() {
  const [text, setText]= useState ("");
  const navigate = useNavigate()

  function HadleKeydown(e) {
    if(e.keyCode == 13){
      navigate(`/search/${text}`)
      setText("")
    }
  }
  return (
  
    <header className='header'>
    <nav className='nav'>
    <img src="https://www.themealdb.com/images/logo.svg" alt="" />
    <div className="nav-right">
    <Link className='active' to='/'>Home</Link>
    <Link to='/api'>Api</Link>
    <input value={text} onChange={(e)=> setText (e.target.value)} placeholder='Search'
    onKeyDown={HadleKeydown} type="text" />
    </div>
    </nav>
    </header> 
  )
}

export default Header