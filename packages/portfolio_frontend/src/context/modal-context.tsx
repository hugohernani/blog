import React from 'react';
import { IModalContext } from 'src/interfaces';

export const ModalContext = React.createContext<IModalContext | undefined>(undefined);
