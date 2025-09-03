import './App.css'
import { UserProvider } from './Context/UserContext'
import Header from './Components/Header'
import Login from './Components/Login'
import ContenidoPrivado from './Components/ContenidoPrivado'

function App() 
{

  return (
    <UserProvider>
      <Header />
      <Login />
      <ContenidoPrivado />
    </UserProvider>
  )
}

export default App