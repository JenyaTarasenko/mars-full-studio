// import './style.css';
// import tailwind from '../../assets/image/tailwind.svg';
// import react from '../../assets/image/react.svg';
// import django from '../../assets/image/django.svg';
// import python from "../../assets/image/python.svg";
// import vite from "../../assets/image/vite.svg";
// import node from "../../assets/image/nodejs.svg";

// function TechnologiesMain(){
//     return(
//         <div className="w-full h-48 overflow-x-hidden whitespace-nowrap flex justify-center items-center max-w-[500px] mx-auto mt-20">
//             <div className="inline-flex gap-20 px-4 slider">
//                 <img src={tailwind} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={react} alt="Image 2" className="h-10 w-auto flex-shrink-0" />
//                 <img src={django} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={python} alt="Image 2" className="h-10 w-auto flex-shrink-0" />
//                 <img src={vite} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={node} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={tailwind} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={react} alt="Image 2" className="h-10 w-auto flex-shrink-0" />
//                 <img src={django} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={python} alt="Image 2" className="h-10 w-auto flex-shrink-0" />
//                 <img src={vite} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={node} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={tailwind} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={react} alt="Image 2" className="h-10 w-auto flex-shrink-0" />
//                 <img src={django} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={python} alt="Image 2" className="h-10 w-auto flex-shrink-0" />
//                 <img src={vite} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
//                 <img src={node} alt="Image 1" className="h-10 w-auto flex-shrink-0" />
              
//             </div>
//         </div>
//     );
// }
// export default TechnologiesMain;

import './style.css';
import tailwind from '../../assets/image/tailwind.svg';
import react from '../../assets/image/react.svg';
import django from '../../assets/image/django.svg';
import python from "../../assets/image/python.svg";
import vite from "../../assets/image/vite.svg";
import node from "../../assets/image/nodejs.svg";

const techs = [tailwind, react, django, python, vite, node];

function TechnologiesMain() {
  return (
    <div className="w-full h-48 overflow-x-hidden whitespace-nowrap flex justify-center items-center max-w-[500px] mx-auto mt-20">
      <div className="inline-flex gap-20 px-4 slider">
        {Array(3).fill(0).map((_, i) =>
          techs.map((tech, idx) => (
            <img 
              key={`${i}-${idx}`} 
              src={tech} 
              alt={`Tech ${idx}`} 
              className="h-10 w-auto flex-shrink-0" 
              loading="lazy" 
            />
          ))
        )}
      </div>
    </div>
  );
}
export default TechnologiesMain;
