import { PageInfo } from './page-info';

export interface Edge<T> {
  node: T;
  cursor: string;
}

export interface CursorConnection<T> {
  pageInfo: PageInfo;
  edges: Edge<T>[];
  __typename: string;
}
