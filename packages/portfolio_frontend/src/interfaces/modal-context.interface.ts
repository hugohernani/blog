import { DependencyList, Dispatch, FC, SetStateAction } from 'react';

export interface IModalContext {
  unSetModal: (fn: any, deps: DependencyList) => void;
  setModal: Dispatch<SetStateAction<FC | undefined>>;
}
