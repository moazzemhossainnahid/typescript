import './App.css';


let student:string = "Nahid";
let age:number = 57;
let isSmart:boolean = true;

let students:string[] = ["Korim", "Rohim", "Hamid"];
let feeds:number[] = [12, 25, 36, 75, 87];


interface Person {
  name:string,
  age:number,
  job?:string,
  location?: string | number
  employed?: any
}

type users = {
  name:string,
  age:number,
  job?:string,
  location?: string | number
  employed?: any
}

const person: Person = {
  name: "nahid",
  age: 23,
  job: "Jobless",
  location: 55
}

const derson: Person = {
  name: "nahid",
  age: 23,
}

// const person: {name:string, age:number, job:string} = {
//   name: "nahid",
//   age: 23,
//   job: "Jobless" 
// }


const handleAddUser = (firstName:string, age:number, address:string) => {
  const total:number = 50;
  console.log(firstName, age, address);
  return total
}

const handleUser = (firstName:string, age:number, address:string):void => {
  const total:number = 50;
  console.log(firstName, age, address);
  // return total
}

const handleage = (firstName:string, age:number, address:string):string => {
  const total:number = 50;
  console.log(firstName, age, address);
  return address
}


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
