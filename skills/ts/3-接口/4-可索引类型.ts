class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOKay {
  [x: number]: Animal;
  [x: string]: Dog;
}