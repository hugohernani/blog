import { FC } from 'react';
import { IReactElement } from './modal-context.interface';

export interface IGlobalModal {
  modal: IReactElement;
  unSetModal: () => void;
}
