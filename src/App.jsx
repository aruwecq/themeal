
import './App.css'
import myRouter from './router'
import { RouterProvider } from 'react-router-dom'
function App() {

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
