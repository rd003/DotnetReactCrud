import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Person from './components/person/Person'
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="person" element={<Person />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App