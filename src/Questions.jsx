// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
// import { useState,useEffect } from 'react';
// import TextTransition, { presets } from 'react-text-transition';

// export default function Questions() {
//     const questions = [
//         "How do you influence surgeons to change their operating techniques?",
//         "How do you motivate Gen Zs to vote in the general election?",
//         "How do you seamlessly integrate a confectionary brand into people’s daily lives?",
//         "How do you successfully launch a multivitamin brand in a competitive market?",
//         "How do you attract top scientists to a pharmaceutical company?",
//         "How do you make an energy supplement a must-have for millennials?",
//         "How do you capitalize on a brand’s local advantage?",
//         "How do you guide school leavers in choosing one superior university over another?",
//         "How do you make disease symptoms unforgettable?",
//         "How do you assure customers of the authenticity of a luxury product?",
//         "How do you elevate the experience of takeaway food?",
//         "How do you upskill 50,000 employees within a week?",
//         "How do you leverage a national holiday to drive sales?",
//         "How do you persuade professionals to switch from coffee to a new beverage?",
//         "How do you raise awareness for a climate change event?",
//         "How do you transform the way companies procure electricity?",
//         "How do you destigmatize addiction?",
//         "How do you attract investment for street lights in developing countries?",
//         "How do you motivate young people to start investing in the stock market?",
//         "How do you reassure patients about the safety of a new drug?",
//         "How do you convince people to opt for an eye procedure over medication?",
//         "How do you instill confidence in the safety of brain technology?"
//       ];
      

//   const [index, setIndex] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(
//       () => setIndex((index) => (index + 1) % questions.length),
//       3500, // every 0.5 seconds
//     );
//     return () => clearInterval(intervalId);
//   }, []);

//   const smoothConfig = {
//     ...presets.gentle,
//     damping: 20,
//   };

//   return (
//     <div 
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: '130px',
//         marginBottom: '130px',
//       }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '25px' }}>
//         <div className='question-accordion'>
         
//             <TextTransition 
//               springConfig={presets.gentle}
//               direction="down"
//               delay={3500}
//               inline
//             >
//               {questions[index]}
//             </TextTransition>
       
//         </div>
//       </div>
//     </div>
//   );
// }
