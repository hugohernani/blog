import styled from 'styled-components';

export const Container = styled.div`
  background-color: whitesmoke;

  height: 80vh;
  width: 80vw;
  max-height: 100%;
  max-width: 100%;

  position: fixed;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1010;
`;

export const ModalContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* spacing as needed */
  padding: 20px 50px 20px 20px;

  /* let it scroll */
  overflow: scroll;
`;

export const ModalOverlay = styled.div`
  background-color: black;
  opacity: 0.5;

  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;
