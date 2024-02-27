import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'

import './index.css'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/add' element={<NewPlayerForm />} />
          <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  )
}

export default App
