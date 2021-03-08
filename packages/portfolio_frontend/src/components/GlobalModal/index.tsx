import { Container, ModalContentContainer, ModalOverlay } from './styles';
import React, { useEffect, useMemo } from 'react';
import { IGlobalModal } from '../../interfaces';
import { VALUE_ESCAPE, VALUE_BACK_SPACE } from 'keycode-js';

const GlobalModal: React.FC<IGlobalModal> = ({ modal, unSetModal }) => {
  useEffect(() => {
    const escInputSelectBind = (e: KeyboardEvent) => {
      if (![VALUE_ESCAPE, VALUE_BACK_SPACE].includes(e.key)) {
        return;
      }

      const actElem = document.activeElement;
      const targetElements = ['INPUT', 'SELECT'];
      if (actElem && targetElements.includes(actElem.tagName)) {
        return;
      }

      unSetModal();
      const rootElem = document.getElementById('root');
      rootElem?.classList.remove('open-modal');
    };

    document.addEventListener('keyup', escInputSelectBind);
    return () => document.removeEventListener('keyup', escInputSelectBind);
  }, [unSetModal]);

  useEffect(() => {
    const rootElem = document.getElementById('root');

    rootElem?.classList.add('open-modal');
  });

  return useMemo(
    () => (
      <React.Fragment>
        <Container>
          <ModalContentContainer>{modal}</ModalContentContainer>
        </Container>
        <ModalOverlay onClick={unSetModal}></ModalOverlay>
      </React.Fragment>
    ),
    [modal, unSetModal],
  );
};

export default GlobalModal;
