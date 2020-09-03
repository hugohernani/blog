import { Sorting } from './sorting';
import { Paging } from "./paging";

interface ValueComparisson<K> {
  eq?: K;
  gt?: K;
  gte?: K;
  iLike?: K;
  in?: K[];
  is?: boolean;
  isNot?: boolean;
  like?: K;
  lt?: K;
  lte?: K;
  neq?: K;
  notILike?: K;
  notIn?: K[];
  notLike?: K;
}

type FieldComparisson<T> = { [K in keyof T]?: ValueComparisson<T[K]> };

type Filter<T> = {
  and?: Filter<T>[],
  or?: Filter<T>[]
} & FieldComparisson<T>;


export interface CursorBased<T>{
  filter?: Filter<T>
  sorting?: Sorting<T>
  paging?: Paging;
}
