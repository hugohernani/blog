import React from 'react';
import { IModalContext } from '../interfaces';

export const ModalContext = React.createContext<IModalContext | undefined>(undefined);
