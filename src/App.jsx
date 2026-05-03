import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/layout/Index'
import Shop from './pages/Shop'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path='/about' element={<About />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
 
}

export default App;
