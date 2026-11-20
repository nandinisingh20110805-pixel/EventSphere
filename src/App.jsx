import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'
import { Button } from './components/ui/button'
import EventDetailsPage from './pages/EventDetailsPage'
import { Toaster } from 'sonner'
import SavedPage from './pages/SavedPage'

function ScrollToTop(){
  const {pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(top);
  },[pathname]);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-orange-100 selection:text-amber-800">
      <ScrollToTop/>
      <Navbar/> 
      <div className='flex-1'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events/:slug' element={<EventDetailsPage/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/favorites' element={<SavedPage/>}/>
      </Routes>
      </div>
      <Footer/>
      <Toaster richColors
      toastOptions={{
        style : {
          borderRadius: "1rem",
          border: "1px solid #EBE8DF",
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: "13px",
        }
      }}
      />
    </div>
  )
}

export default App
