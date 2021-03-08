import React, { useCallback, useMemo, useState } from 'react';
import { ModalContext } from '../../context';
import GlobalModal from '../../components/GlobalModal';
import { IReactElement } from '../../interfaces';
import ReactDOM from 'react-dom';

const ModalProvider: React.FC = (props) => {
  const [modal, setModal] = useState<IReactElement>(null);
  const [modalCloseCallback, onModalCloseCallback] = useState<() => void>(() => undefined);

  const unSetModal = useCallback(() => {
    setModal(null);
    modalCloseCallback();
  }, [modalCloseCallback]);

  return useMemo(
    () => (
      <ModalContext.Provider value={{ unSetModal, setModal, onModalCloseCallback }} {...props}>
        {props.children}
        {modal &&
          ReactDOM.createPortal(
            <GlobalModal modal={modal} unSetModal={unSetModal} />,
            document.getElementById('root') as Element,
          )}
      </ModalContext.Provider>
    ),
    [modal, props, unSetModal],
  );
};

export default ModalProvider;
