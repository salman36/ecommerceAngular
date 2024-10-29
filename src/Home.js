import React from 'react';
// import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';

const Home = () => {
  const data = {
      name:"Online Store"
  }
  return(
    <>
      <HeroSection myData={data}/>
      <Services />
      <Trusted />
  
    </>
  );
  // return  <Wrapper className='test'>Home</Wrapper>
}

// const Wrapper = styled.section`
//   height:100vh;
// backgroud-color: ${({theme}) => theme.colors.bg};
// // width : 20rem;
// // height:20rem ;
// `;

export default Home
