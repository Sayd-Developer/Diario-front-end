interface ICRUD<T> {
  getAll: () => Promise<T[]>;
}

export default ICRUD;
