import React, { useCallback, useMemo, useState } from 'react';
import { ModalContext } from '../../context';
import GlobalModal from '../../components/GlobalModal';

const ModalProvider: React.FC = (props) => {
  const [modal, setModal] = useState<React.FC | undefined>(undefined);

  const unSetModal = useCallback(() => {
    setModal(undefined);
  }, [setModal]);

  return useMemo(
    () => (
      <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
        {props.children}
        {modal && <GlobalModal modal={modal} unSetModal={unSetModal} />}
      </ModalContext.Provider>
    ),
    [modal, props, unSetModal],
  );
};

export default ModalProvider;
