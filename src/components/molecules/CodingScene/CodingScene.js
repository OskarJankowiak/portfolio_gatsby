import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Scene from 'assets/svg/Scene.svg';

const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: 0;
`;

const StyledScene = styled(Scene)`
   height: 45vh;
   width: 70%;
   opacity: 0.8;

   ${({ theme }) => theme.mq.tablet} {
      width: 100%;
   }

   ${({ theme }) => theme.mq.bigTablet} {
      width: 80%;
      height: 90%;
   }

   ${({ theme }) => theme.mq.desktop} {
      width: 60%;
      height: 90%;
   }
`;

const CodingScene = () => {
   const wrapperRef = useRef(null);

   useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: 'Power3.inOut' } });
      const sceneAnimation = () => {
         const elements = wrapperRef.current.children[0];

         const men = elements.getElementById('Men 5');
         const monitor = elements.getElementById('monitor');
         const plant = elements.getElementById('plant');
         const coffee = elements.getElementById('coffe');
         const box = elements.getElementById('box');
         gsap.set([wrapperRef.current, ...men.children, ...monitor.children, ...plant.children, ...coffee.children, ...box.children], { autoAlpha: 0 });

         tl.to(wrapperRef.current, { autoAlpha: 1 })
            .to(box.children, { autoAlpha: 1, stagger: 0.2, duration: 0.5 })
            .fromTo(men.children, { scaleY: '0.8', transformOrigin: '50% 100%' }, { scaleY: '1', duration: 0.5, stagger: 0.1, autoAlpha: 1 }, '-=1')
            .fromTo(plant.children, { scaleY: '0.5', transformOrigin: '50% 100%' }, { scaleY: '1', duration: 0.7, stagger: 0.2, autoAlpha: 1 }, '-=2')
            .fromTo(coffee.children, { scaleY: '0.85' }, { scaleY: '1', stagger: 0.2, autoAlpha: 1, duration: 1 }, '-=1')
            .fromTo(monitor.children, { scaleY: '0.8', x: '-=30' }, { x: '0', scaleY: '1', autoAlpha: 1, stagger: 0.1 }, '-=2')
            .to(coffee, { y: '10', yoyo: true, repeat: -1 });
      };

      sceneAnimation();
   }, []);

   return (
      <Wrapper ref={wrapperRef}>
         <StyledScene />
      </Wrapper>
   );
};

export default CodingScene;
