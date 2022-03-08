// cài typescript: npm i -g typescript
// -g: global
// --save : lưu trg 1 project cụ thể
// --save-dev: ko bắt buộc trg 1 project
// let a:number = 7;
// let b:string = "hế lồ";
// let c:boolean = true;
// const result = a + b;
// if (c) {
//     console.log(c + result);
// }else{
//     console.log("akckajcak");
// }



// object
type TPerson = {
    id:number;
    name:string;
    age:number;
    status?:boolean // status có thể có or ko
}
const person:TPerson = {
    id:1,
    name: "Vo Thuy",
    age:1254
}
const person2:TPerson[]=[
    {id: 1,name:"Tu",age:12454,status:true},
    {id: 2,name:"Truong Huyen",age:100000,status:true},
]
console.log(person2);