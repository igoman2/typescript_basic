interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = {
  value: 'abc',
  selected: false
}