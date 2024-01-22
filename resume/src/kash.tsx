
import React from 'react';
import { BrowserRouter, Route, Link ,Routes} from 'react-router-dom';
import './styles/p.css'
import Homeeee from './page';
import Homee  from './page';
import App from './App'

const Kash = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/" element={<Homeeee />} />
        <Route path="/App" element={<App />} />
        </Routes>
      
    </BrowserRouter>
    
    
  );
};

export default Kash;





// const Kash = () => {
//   return (
//     <div>
//       <h1>Your React App</h1>
//       <p>This is a link: <Link to="/App">Click me</Link></p>
//       {/* Other content of your App */}
//     </div>
//   );
// };

// export default Kash;



