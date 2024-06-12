
import './App.css'
import Browse from './components/Browse'
import Collab from './components/Collab'
import Footer from './components/Footer'
import Learning from './components/Learning'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'
import Topselling from './components/Topselling'

function App() {

  return (
    <>
      <Navbar/>
      <Main/>
      <Topselling/>
      <Browse/>
      <Collab/>
      <Learning/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
