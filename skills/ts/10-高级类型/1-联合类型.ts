interface Bird {
  fly();
  layEggs();
}
interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  
}

let pet = getSmallPet();
// 联合类型，只能访问此联合类型的所有类型里共有的成员
// 此处无法访问 fly() swim()
pet.layEggs();
