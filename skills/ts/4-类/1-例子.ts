class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message
  }
  greet(){
    console.log('hello,' + this.greeting);
    
    return 'hello,' + this.greeting;
  }
}

let greeter = new Greeter ("World")
greeter.greet()