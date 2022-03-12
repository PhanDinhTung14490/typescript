export{};
console.log('helo typescript');
const a = 10;
const b = 30;

//khai b
type User = {
    id: number;
    name: string
}

const myName: string = "Phan dinh Tung";
const myAge : number = 20;
const status: boolean = true;
const myObj: {id: number, name: string} = {id:1, name:"tung"};

const numberArr: number[] = [1,2,3,4];
const stringArr: string[] = ["a", "b", "c"];
const objectArr: User[] = [{id: 1, name: "t"}, {id: 2, name: "b"}];



function sum(numA: number, numB:number):number{
   return numA + numB; 
}
sum(a,b)