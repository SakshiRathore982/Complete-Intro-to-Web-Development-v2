const sen="this is the dog";
console.log(sen.toUpperCase());
let a=5.12;
console.log(Math.ceil(a));
const sent="sakshi rathore";
console.log(sent.substr(7));
//object
const person={name:"sakshi",city:"jodhpur",state:"raj",
age:22,address(){
    console.log("jodhpur")
}}; 
 console.log(person.name);
 console.log(person.state);
 person.address()
 console.log(person)
 //context
 const me={
     name:{
         first:"sakshi",
         last:"rathore"
     },
     location:{
         street:"KBHB",
         city:"jodhana",
         state:"raj",
         country:"india"
     ,
     getCityAndState(){
         return `${this.city} ,${this.state}`
     }
 }
};
 console.log(me.location.getCityAndState());
 console.log(this===window);
 console.log(this.scrollY);
 //array
 
/*
 const prime=[1,2,3,7,11,13];
 console.log(prime.length);
 console.log(prime.join("$"))
 const course=[
     {cofee:"sasjaksj",black:"xfdfds"},
     {cofee:"jckdj",black:"vndjk"}
 ];
 course.push({cofee:"swww",black:"rrrrr"});
 console.log(course); 
 */
const day=[
    "mon","tues","wed","thurs","fri","sat","sun"];
   console.log(day);
   //loop
for( let i=0; i<day.length;i++)
{
   console.log(day[i]);
}
day.forEach(function(city,index)
{
    console.log(index,city.toUpperCase());
});
//DOM
