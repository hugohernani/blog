import { Container } from './styles';
import React, { useEffect, useMemo } from 'react';
import { IGlobalModal } from '../../interfaces';
import { VALUE_ESCAPE } from 'keycode-js';

const GlobalModal: React.FC<IGlobalModal> = ({ modal, unSetModal }) => {
  useEffect(() => {
    const escInputSelectBind = (e: KeyboardEvent) => {
      if (e.key != VALUE_ESCAPE) {
        return;
      }

      const actElem = document.activeElement;
      const targetElements = ['INPUT', 'SELECT'];
      if (actElem && targetElements.includes(actElem.tagName)) {
        return;
      }

      unSetModal();
    };

    document.addEventListener('keyup', escInputSelectBind);
    return () => document.removeEventListener('keyup', escInputSelectBind);
  }, [unSetModal]);

  return useMemo(() => <Container>{modal}</Container>, [modal]);
};

export default GlobalModal;
