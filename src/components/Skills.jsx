import React from "react";
import styled, { keyframes, css } from "styled-components";


function Skills() {
  const row1 = [
    "https://giulio.dk/wp-content/uploads/2021/03/SQL-Server.png",
    "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
    "https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png",
    "https://seeklogo.com/images/J/java-logo-41D4155FC3-seeklogo.com.png",
    "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
  ];

  const row2 = [
    "https://giulio.dk/wp-content/uploads/2021/03/SQL-Server.png",
    "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png",
    "https://icones.pro/wp-content/uploads/2021/05/icone-html-orange.png",
    "https://seeklogo.com/images/J/java-logo-41D4155FC3-seeklogo.com.png",
    "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
  ];

  return (
    <AppContainer>
      <Wrapper>
        <h2>Skills</h2>
        <Note>Conocimiento y desarrollo en las siguientes tecnologias :</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Skills;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 10px;
  
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    // background: gray;
`;


// import React, { useEffect, useRef } from 'react'
// import './styles/skills.css'

// import css from '../../public/skills-img/css.png';
// import html from '../../public/skills-img/html.png';
// import github from '../../public/skills-img/github.png';
// import javascript from '../../public/skills-img/javascript.png';
// import node from '../../public/skills-img/node.png';
// import react from '../../public/skills-img/react.png';

// const images = [css, html, github, javascript, node, react];
// const duplicatedImages = [...images, ...images, ...images, ...images]; 

// const Skills = () => {


//   const row1Ref = useRef(null);
//   const row2Ref = useRef(null);

//   useEffect(() => {
//     const row1 = row1Ref.current;
//     const row2 = row2Ref.current;

//     const moveRight = () => {
//       row1.scrollLeft += 1;
//     };

//     const moveLeft = () => {
//       row2.scrollLeft -= 1;
//     };

//     const interval1 = setInterval(moveRight, 20);
//     const interval2 = setInterval(moveLeft, 20);

//     return () => {
//       clearInterval(interval1);
//       clearInterval(interval2);
//     };
//   }, []);


//   return (

//     <div className="slider-container">
//     <div className="image-row row-right">
//       {duplicatedImages.map((src, index) => (
//         <img key={index} src={src} alt={`Slide ${index}`} className="slide-image" />
//       ))}
  
//     </div>
    
//     <div className="image-row row-left">
//       {duplicatedImages.map((src, index) => (
//         <img key={index} src={src} alt={`Slide ${index}`} className="slide-image" />
//       ))}
//     </div>
//   </div>
//   );



    // <div className='habilidades' id='habilidades'>
    //   <div className='skill_name'>
    //     <h2 className='skills_title'>Habilidades</h2>
    //   </div>
    //     <ul className='skill_ul'>
    //       <li className='skill_list'>
    //         <i className='bx bxl-html5 bx-skill'></i>
    //           HTML
    //       </li>
    //       <li className='skill_list'>
    //         <i className='bx bxl-css3 bx-skill'></i>
    //           CSS
    //       </li>
    //       <li className='skill_list'>
    //         <i className='bx bxl-bootstrap bx-skill'></i>
    //         Bootstrap
    //       </li>
    //       <li className='skill_list'>
    //         <i className='bx bxl-javascript bx-skill'></i>
    //           JavaScript
    //       </li>
    //       <li className='skill_list'>
    //       <i className='bx bxl-react bx-skill'></i>
    //         React JS
    //       </li>
    //       <li className='skill_list'>
    //         <i className='bx bxl-redux bx-skill'></i>
    //         Redux
    //       </li>
    //       <li className='skill_list'>
    //       <i className='bx bxl-nodejs bx-skill'></i>
    //         Node JS
    //       </li>
    //       <li className='skill_list'>
    //         <i className='bx bxl-postgresql bx-skill'></i>
    //           PostgresSQL
    //       </li>
    //       <li className='skill_list'>
    //         <i className='bx bxl-github bx-skill'></i>
    //         Git
    //       </li>
    //     </ul>
    // </div>
  
// }

// export default Skills