const person = {
    name: "k2r",
    greet(){
        console.log(`Hi, I am ${this.name}.`)
    }
}
person.greet();    //^     => Hi, I am k2r.
const greetFunc = person.greet;
greetFunc();     //^      => Hi I am undefined     // CONTEXT IS LOST

// If wanna tell context in above one we need to bind it // bind = literally tell backstory.... 

const boundGreet = person.greet.bind({name: "John."});
boundGreet();

// bind    call    apply      =>  allmost same  but do check what do they do..

