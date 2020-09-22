type Update<T> = { [K in keyof T]?: T[K] };

export interface IdUpdateInput<T> {
  id: string;
  update: Update<T>;
}

export interface UpdateInput<T> {
  input: IdUpdateInput<T>;
}
