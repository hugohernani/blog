import { DependencyList, ReactElement } from 'react';

export type IReactElement = ReactElement<any, any> | null;

export interface IModalContext {
  unSetModal: (fn: any, deps: DependencyList) => void;
  setModal: (component: IReactElement) => void;
  onModalCloseCallback: (callback: () => void) => void;
}
