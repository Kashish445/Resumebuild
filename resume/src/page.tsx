import NavBar from './pages/NavBar';
import Features from './pages/features';
import Temp from './pages/templates';
import Content from './pages/footer';
import Faq from './pages/faqs'
import Testi from './pages/testi';
import { Link} from 'react-router-dom';
import './styles/p.css'
export default function Homee() {
  return (
    <div>
    <NavBar />
        <div>
        <section id="tt" className="h-screen bg-white-900 text-black">
            <div className="container">
                <div className="wrapper">
                <div className="textContainer" >
                    <h2 >Online CV Builder With Creative Templates.</h2>
                    <p>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>
                    <button>
                      <Link to="/App">
                      Create Resume
                      </Link>
                      </button>
                </div>
                    <div className="imageContainer">
                  
                    <img
            src="/resume.jpg" 
            alt="About Image"
          />
                    </div>
                </div>
            </div>
        </section>
        <Features/>
        <Faq/>
        <section id="about" className=" min-h-screen flex flex-col text-center justify-center items-center">
        <Testi/>
          </section>
        <section id="projects" className=" bg-white-50 min-h-screen flex flex-col text-center justify-center items-center">
      <Temp />
    </section>
      
      <section
        id="contact"
        className="text-white h-screen bg-white  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{' '}
        </h1>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-white-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
      <Content/>
        </div>
    </div>
  );
}
