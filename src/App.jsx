import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './components/Intro'
import { Navbar } from './components/common/Navbar'
import Home from './pages/Home'


function App() {
  

  return (
    <BrowserRouter>
    <Intro />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
