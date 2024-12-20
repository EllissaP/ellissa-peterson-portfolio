import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Art1 from './components/Art1'
import ContactBox from './components/ContactBox'
import HackBox from './components/HackBox'
import ResumeBox from './components/ResumeBox'
import ImageBox from './components/ImageBox'
import SkillsBox from './components/SkillsBox'

function App() {

  return (
    <>
      <h1>
        Ellissa Peterson
      </h1>
      <h2>
      🚧PAGE CURRENTLY UNDER CONSTRUCTION🚧
      </h2>
      <h4>
        Check back soon for updates
      </h4>
      <div className="row">
        <SkillsBox/>
        <ResumeBox/>
        <ContactBox/>
      </div>
      <div className="row">
        <Art1/>
        <HackBox/>
        <ImageBox/>
      </div>
    </>
  )
}

export default App
