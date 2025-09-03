import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'

function App() 
{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostList />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App