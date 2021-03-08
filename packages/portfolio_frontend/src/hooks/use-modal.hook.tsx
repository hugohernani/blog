import React from 'react';
import { ModalContext } from '../context';

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModelProvider');
  }
  return context;
};
