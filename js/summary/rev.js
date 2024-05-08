

// title:-  24- Number Methods //

// Two Dots To Call a Method 

console.log (100..toString());
console.log(100..toFixed(5));
console.log(1999.92342.toFixed(3));    // return string 

console.log(parseInt("20000000mohamed"));

console.log(parseFloat("1000.95"))

console.log(Number.isInteger(100.33));
console.log(Number.isInteger(100));

console.log(Number.isNaN("mohamed"));
console.log(Number.isNaN(100));
console.log(Number.isNaN("mohamed" / 20 ));


console.log("=====================================================");
// ======================================================================== //


// title :- 25- Math Object //


/*
    - round()
    - ceil()
    - floor()
    - min()
    - max()
    - pow()
    - random()
    - trunc() [Es6]
*/

console.log(Math.round(29.2));
console.log(Math.round(29.5));

console.log(Math.ceil(29.2));
console.log(Math.floor(29.2));

console.log(Math.max(10, 19 , 200 , 200.5));
console.log(Math.min(10, 19 , 200 , 100.5));

console.log(Math.pow(2,4));

console.log(Math.random());

console.log(Math.trunc(98.112)); // cut the intger part only


console.log("=====================================================");
// ======================================================================== //


// Title :-  26- Number Challange //

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// find Smallest Number in all variables and return integer
console.log(Math.trunc(Math.min(a,b,c,d))); // 2

// use variable a,d One time to get the needed output
console.log(c*c*a*Math.floor(d) / Math.trunc(b) ); // 10000
 
// Get Integer "2" from d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.pow(Math.trunc(d),1));

// use Variables b,d To Get This Values
console.log( (Math.floor(b) / Math.ceil(d)) .toFixed(2)); // 66.67 => string 
console.log(Math.ceil( Math.floor(b) / Math.ceil(d) )); // 67 => Number


console.log("=====================================================");
// ======================================================================== //


// Title:- 27-String Methods part 1

/*
    - Access with index 
    - Access with charAt()
    - length
    - trim() 
    - toUpperCase()
    - toLowerCase()
    - Chain Methods
*/

let Name = "  Ahmed  ";

console.log(Name[3]);
console.log(Name.charAt(4));
console.log(Name.charAt(10));
console.log(Name[10]);

console.log(Name.length);

console.log(Name.trim()); // Delete space in the word

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

// Chain Methods
console.log(Name.trim().toLowerCase().charAt(2).toUpperCase());

console.log("=====================================================");
// ======================================================================== //

// Title:- 28- String Methods part 2

/*
    String Methods
    - indexOf(Valur[Mand],Start[Opt] 0 )
    - lastIndexOf(Value[Mand] , Start [Opt] , length)
    - slice(Start[Mand] , End [Opt] , NOt Include End)
    - repeat (Times) [Es6]
    - split(Separator [Opt] , limit[Opt])
*/ 



let aa = "Elzero Web School";

console.log(aa.indexOf("Web")); // 7
console.log(aa.indexOf("Wab")); // -1

console.log(aa.indexOf("o")); // 5
console.log(aa.lastIndexOf("o")); // 15


console.log(aa.slice(0));    // Elzero Web School   
console.log(aa.slice(2));    // zero Web School
// not including the end index
console.log(aa.slice(2,8));  // zero W

console.log(aa.slice(-5));
// not including the end
console.log(aa.slice(-5,-3));


console.log(aa.repeat(5));

// Split()
console.log(aa.split());   // return the string to an array 
console.log(aa.split(""))  // return all the elements of string to array of chars
console.log(aa.split(" "));
console.log(aa.split(" ",2));
console.log(aa.split("",8));

let bb = "Elzero|Web|School";
console.log(bb.split("|"));
console.log(bb.split(" "));


console.log("=====================================================");
// ======================================================================== //



// Title:- 29-string Methods //

/*
    - substring(Start [Mand], End[Opt] Not Including End)
    --- Start > End will Swap
    --- Start < 0 It start from 0
    --- Use Length To Get last Character

    - substr(Start[Mand] , Character to Extract[Opt] Default the full Length)
    --- بتكتب عدد الاحرف اللى عايزها بعد البداية مش الاندكس
    --- Start >= Length  , you get an empty string ""
    ---Negative Start From End
    
    - boolean string functions
        - includes(Value[Mand] , Start[Opt] Default 0)     [Es6]
        - startsWith(Value[Mand] , Start [Opt] Default 0)  [Es6]
        - endWith(Value [Mand] , Length [Opt] Default Full Length) [Es6]
*/

let cc = "Elzero Web School";

console.log(cc.length);

console.log(cc.substring(2));
console.log(cc.substring(2,6));
// start > end 
console.log(cc.substring(6,2)); // same like previous

console.log(cc.substring(-9)); // like you start form 0
console.log(cc.substring(-9,6)); // from 0 t0 6 not including the end

console.log(cc.substring(cc.length));   // empty
console.log(cc.substring(cc.length-1)); // last char 

console.log( cc.substring(cc.length-5 , cc.length-3)); // ch


// get 8 chars after start 
console.log(cc.substr(2,8)); // zero Web 
console.log(cc.substr(cc.length)); 
console.log(cc.substr(-5));
console.log(cc.substr(-5,2));

// index 0 -> len-1
console.log(cc.includes("Web")); // true
console.log(cc.includes("Web",8)); //false

console.log(cc.startsWith("E"));      // true
console.log(cc.startsWith("E" ,2));   // false
console.log(cc.startsWith("z",2));    // true
// index 0 -> len-1
console.log(cc.startsWith("z",3));    // false
console.log(cc.startsWith("zero",2)); // true
console.log(cc.startsWith("zeor",2)); // false

// 1 -> length
console.log(cc.endsWith("o"));     // false
console.log(cc.endsWith("o",6)); // true
console.log(cc.endsWith("ro",6));  // true
console.log(cc.endsWith("l"));  // true


console.log("=====================================================");
// ======================================================================== //

// Title:- 30- String Challenge

let z= "Elzero Web School";

console.log(z.charAt(2).toUpperCase() + z.slice(3,6)); // Zero

console.log(z.charAt(13).toUpperCase().repeat(8));  // HHHHHHHH

console.log(z.split(" ",1));  // return array ['Elzero']

console.log(z.substr(0,7) + z.substr(11)); // Elzero School

console.log(z.charAt(0).toLowerCase() + z.substring(1,z.length-1).toUpperCase() + z.charAt(z.length-1).toLowerCase() );



console.log("=====================================================");
// ======================================================================== //


// Title:- 31- Comparison Operators

/*
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Idendical

    - > Larger Than
    - >= Larger Than Or Equal
    
    - < Smaller Than
    - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // true , Compare VAlue Only
console.log(-100 == "-100"); // true , Compare VAlue Only
console.log(10 != "10"); // false

console.log(10 === "10"); // false , Compare VAlue and Data Type
console.log(10 !== "10"); // true , Compare VAlue and Data Type
console.log(10 !== 10); // False , Compare VAlue and Data Type


console.log("=====================================================");
// ======================================================================== //

// Title:- 32- Logical Operators

/*
    - ! Not
    - && And
    - || Or
*/

console.log("=====================================================");
// ======================================================================== //

// Title:- 33- If Condition
/*
  Control Flow
  - if
  - else if
  - else
*/
// Title:- 34- Nested if
// Title:- 35- Conditinal (Ternary) Operator

console.log("=====================================================");
// ======================================================================== //

// Title 36- Nullish Coalescing Operator And Logical Or

/*
  Logical Or || 
  -- Null + Undefined + Any falsy value (false, 0 ,etc)

  Nullish Coalescing Operator ??
  -- Null + Undefiend
*/

console.log(Boolean(100));   // true
console.log(Boolean(-100));  // true
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean(null));  // false


let p1;
let p2="";
let p3=null;
let p4=100;
let p5=0;
let p6=false;

console.log(`The Price is ${p1 || 200}`);  // 200 
console.log(`The Price is ${p2 || 200}`);  // 200
console.log(`The Price is ${p3 || 200}`);  // 200
console.log(`The Price is ${p4 || 200}`);  // 100
console.log(`The Price is ${p5 || 200}`);  // 200
console.log(`The Price is ${p6 || 200}`);  // 200
console.log(`The Price is ${p5 ?? 400}`);  // 0 
console.log(`The Price is ${null ?? 400}`);  // 400
console.log(`The Price is ${p1 ??  400}`);  // 400



console.log("=====================================================");
// ======================================================================== //

// Title:- 37- If condition Challange

let k = 10;

console.log( (k<10)? 10 :
 (k>=10 && k<=40)? "10 To 40" :
  (k>40)? "> 40" :"Unkonwn" );

let st = "Elzero Web School";

if(typeof st === typeof "34") 
    console.log("Good");

// w position May change
if(st.includes("w") || st.includes("W"))
    console.log("Good");

if(st !== "string")
    console.log("Good");

if(typeof st === typeof "number")
    console.log("Good");

if( st.substr(0,6).repeat(2) ===  "ElzeroElzero")
    console.log("Good");


console.log("=====================================================");
// ======================================================================== //


// Title:- 38- Switch Statementm
// Title:- 39- Switch And if condition challange

let job = "Manager";
let salary = 0;

switch(job){

    case "Manager":
        salary=8000;
        console.log(salary);
        break;

    case "IT":
    case "Support":
        salary=6000;
        console.log(salary);
        break;

    case "Developer":
    case "Designer" :
        salary=7000;
        console.log(salary);
        break;

    default:
        salary = 4000;
        console.log(salary);

}


// Turn switch to if 

let holidays =0;
let money =0;


if(holidays === 0){
    money = 5000;
    console.log(`My money is ${money}`);
}
else if(holidays === 1 || holidays === 2){
    money = 3000;
    console.log(`My money is ${money}`);
}
else if(holidays === 3){
    money = 2000;
    console.log(`My money is ${money}`);
}
else if(holidays === 4){
    money = 1000;
    console.log(`My money is ${money}`);
}
else if(holidays === 5){
    money = 0;
    console.log(`My money is ${money}`);
}
else{
    money = 0;
    console.log(`My money is ${money}`);
}

console.log("=====================================================");
// ======================================================================== //


// Title:- 40- Array Introduction
/*
    Arrays
    - Creat Arrays [Two Methods] new Array() + []
    - Access Arrays Elements
    - Nested Array
    - Change Arrays Elements
    - Check For Array Array.isArray(arr);
*/

let myFrinends = ["Ahmed" , "Mohamed" , "Sayed"];

console.log(`Hello ${myFrinends[0]}`);
console.log(`Hello ${myFrinends[2]}`);
console.log(`Hello ${myFrinends[1][2]}`); // h


// Nested Array
let myHommeies = ["ElkwawY" , "Ammar" , "Elsherbeny" , ["Nasat" , "Gemy"]];

console.log(`Hello ${myHommeies[3]}`); // Hello Nasat,Gemy
console.log(`Hello ${myHommeies[3][1]}`); // Hello Gemy
console.log(`${myHommeies[3][1][0]}`); // G

console.log(myHommeies);

myHommeies[1] = "Mahmoud";
console.log(myHommeies);
myHommeies[3] = "kordy Guys";
console.log(myHommeies);
myHommeies[3] = ["Sameh" , "Omar"];
console.log(myHommeies);

let str = "Mo";
console.log(typeof myHommeies);         // object
// Check if it array or not
console.log(Array.isArray(myHommeies)); // true
console.log(Array.isArray(str));        // false


console.log("=====================================================");
// ======================================================================== //

// Title:- 41- Using Length with array

/*
    Array Methods
    - Length
*/
let myFrinend = ["Ahmed" , "Mohamed" , "Sayed" ,"Alaa"];

console.log(myFrinend.length);  // 4
myFrinend[3] = "Gamal";
console.log(myFrinend);
// out of range
// myFrinend[6] = "Gamal";
console.log(myFrinend.length);  // 7
// index 4,5 are empty
console.log(myFrinend);

// add elements dynamiclly
myFrinend[myFrinend.length] = "Mohsen";
// Update last element
myFrinend[myFrinend.length-1] = "Hamed";

// Control length of array
myFrinend.length=2;
console.log(myFrinend); // Show 2 elements and delete the rest


console.log("=====================================================");
// ======================================================================== //


// Title:- 42- Add and Remove from array
/*
    Arrays Methods [Adding and Removing]
    - unshift("", "") Add Element To The First
    - push("", "" ) Add Element To The End
    - shift() Remove First Element From Array
    - pop() Remove Last Element Form Array
*/

function add_remove()
{
    
    let guys = ["Ahmed" , "Mohamed" , "Sayed" ,"Alaa"];
    
    console.log(guys);
    
    guys.unshift("Osama" , "Nabil");// add at first
    console.log(guys);
    
    guys.push("Mona","Mariam");// add at end
    console.log(guys);
    
    let first = guys.shift();  // it is return what you delete form first
    console.log(guys);
    console.log(`First name was ${first}`);
    
    let last = guys.pop();     // return what you delete from last
    console.log(guys);
    console.log(`Last name was ${last}`);
}



console.log("=====================================================");
// ======================================================================== //

// Title:- 43- Search Array

/*
    Arrays Methods [Search]
    - indexOf(Search Element , From Index[Opt])
    - lastIndexOf(Search Element , From Index [Opt])
    - includes(valueToFind , from Index[Opt])         [ES7]
*/


function searchArray(){

let friends = ["Ahmed" , "Mohamed" , "Sayed" ,"Alaa" , "Ahmed"];

console.log(friends);

console.log(friends.indexOf("Ahmed"));  // 0 
console.log(friends.indexOf("Ahmed",2));// 4


console.log(friends.lastIndexOf("Ahmed"));   // 4
console.log(friends.lastIndexOf("Ahmed",2)); // 0
// negative value get postion from end 
console.log(friends.lastIndexOf("Ahmed",-2)); // 0


console.log(friends.includes("Ahmed"));   // true
console.log(friends.includes("Ahmed",2)); // true

if(friends.lastIndexOf("Osama") === -1)
    console.log(`Not Found`)

console.log(friends.indexOf("Osama"));
console.log(friends.lastIndexOf("Osama"));
}


console.log("=====================================================");
// ======================================================================== //

// Title:- 44- Sorting Arrays

/*
    Array Methods [Sort]
    - sort( comp_Function [opt] ) 
    - reverse
*/





function sortNumbers(){
    const arr = [10, 5, 11];
    arr.sort(); // [10 , 11 , 5]
    // The reason of that is sort() method sorts the elements as "strings" in alphabetical and ascending order.


    // solution to sort numbers in right way
    arr.sort(function(a,b){return a-b})  // [5 , 10 , 11]
}

function sortArray() 
{
    let rand = [10 , "Ahmed" , "Mohamed" , "Sayed" , "90" , 2000 , "10" , -80 , -2];

    console.log(rand);
    // see the output and the way the numbers and strings sorted
    console.log(rand.sort());  
    // reverse the sorted array not original one
    console.log(rand.reverse());
    // you could do that instead 
    console.log(rand.sort().reverse());
}

console.log("=====================================================");
// ======================================================================== //

// Title:- Slicing Array

/*
   Arrays Methods [Slicing]
   - slice(Start[Opt] , End[Opt] Not Including End)
   --- slice() => All array  
   --- If Start Is Undefined => 0
   --- Negative Conunt Form End
   --- If End Is Undefined || > Indexes => Slice To The End Array.length
   --- Return New Array
   - splice( Start[Mand] , DeleteCount[Opt] [0 NO Remove] , The items to Add [Opt])
   --- If Negative => Start From The End
*/


// take a part form array and add a part to array at a position
function slice_Splice()
{
    let friends = ["Ahmed" , "Sayed" ,"Ali" , "Osama" , "Gamal" , "Ameer"];

    console.log(friends);
    console.log(friends.slice()); 
    console.log(friends.slice(1)); 
    // not including end
    console.log(friends.slice(1,3));
    // negative value
    console.log(friends.slice(-3)); 
    console.log(friends.slice(1,-2)); 
    console.log(friends.slice(-4,-2));
    // array still the same after slice operations
    console.log(friends);


    // splice
    // friends.splice(0,0,"Samer" , "Waled"); // add the elements at start (index 0)
    // console.log(friends);

    // delete one element from index 0 then add 2 elements at index 0
    // friends.splice(0,1,"Samer" , "Waled");
    // console.log(friends);

    // friends.splice(0,2,"Samer" , "Waled");
    // console.log(friends);

    friends.splice(1,2,"Samer" , "Waled");
    console.log(friends);
}

console.log("=====================================================");
// ======================================================================== //

// Title:- 46- Joining Arrays

/*
   Arrays Methods [joining]
   - concat(array, array) => Retuen A New Array
   - join( separator )
*/

function JoiningArrays ()
{
    let friends = ["Ahmed" , "Sayed" ,"Ali" , "Osama" , "Gamal" , "Ameer"];
    let newFriends = ["Samer" , "Sameh" ];
    let schoolFriends = ["Ghaly" , "Tarek"];

    let allFrineds = friends.concat(newFriends,schoolFriends, "Galal" , [1,2]);
    console.log(allFrineds);

    // print elements of array as string with separator
    // string with , to separate
    console.log(allFrineds.join()); 
    // without any separator
    console.log(allFrineds.join(""));

    console.log(allFrineds.join(" @ ")); 
    console.log(allFrineds.join("|")); 
    console.log(allFrineds.join("|").toUpperCase()); 
}

console.log("=====================================================");
// ======================================================================== //

// Title:- 47-Array Challange

let zero = 0;
let counter = 3;

let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];

my.reverse().splice(zero,--counter);

console.log(my); // ["Osama" , "Elham" , "Mazero" , "Ahmed"]

console.log(my.slice(++zero,++counter)); // ["Elham" , "Mazero"]

console.log(my[zero][my[zero].indexOf("E")]  + my[zero][my[zero].indexOf("l")] 
+ my[++zero].slice(zero)  )  // Elzero


console.log(my[zero][my[zero--].indexOf("r")] + my[--zero][zero]); // rO



console.log("=====================================================");
// ======================================================================== //

// Title:- 48- Loops
/*
   Loop
   - For
   for([1]  [2]  [3]){
       Block of Code
   }
*/

for(let i = 0; i < 10 ;i++){
    console.log(i);
}



// Title:- 49- Looping On Sequences
/*
    Loop
    - Loop On Sequences

 */
function loopOnSequences()
{

    let myFrinends = ["Osama" , "Ahmed" , "Sayed" , "Ali" , "Amira"];

    console.log(myFrinends[0]);
    console.log(myFrinends[1]);
    console.log(myFrinends[2]);
    console.log(myFrinends[3]);
    console.log(myFrinends[4]);
    // out of range
    console.log(myFrinends[5]);

    for(let i=0; i<=myFrinends.length ;i++)
        console.log(myFrinends[i]);


        
    let arr = myFrinends;
    arr.unshift(1,2,3);

    let onlyNames = [];

    // Print only strings
    for(let i=0 ;i<arr.length ; i++){
        if(typeof(arr[i]) === 'string'){
            onlyNames.push(arr[i]);
        }
    }
    console.log(onlyNames);
}



console.log("=====================================================");
// ======================================================================== //

 // Title:- 50- Nested Loops And Trainings
/*
    Loop
    - Nested loops
*/

function nestedLoops (){

    let products = ["keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor"];

    let colors = ["Red" , "Green" , "Black"];
    let models = [2020 , 2021];


    for(let i=0 ; i<products.length ; i++){
        console.log(`# ${products[i]}`);
        console.log("#".repeat(15));

        console.log("Colors:-");
        for(let j=0;j<colors.length;j++){
            console.log(`- ${colors[j]}`);
        }
        

        console.log(`Models:- `)
        for(let k=0;k<models.length;k++){
            console.log(`- ${models[k]}`);
        }
        console.log("#".repeat(15));
    }
}

console.log("=====================================================");
// ======================================================================== //



// Title:- Loop Control (Break & Continue)
/*
    Loop Control
    - Break
    - Continue
    - Label
*/

function ControlLoop(){


    let products = ["keyboard" , "Mouse" , 10 , 20 , "Pen" , "Pad" , "Monitor"];

    let colors = ["Red" , "Green" , "Black"];

    for(let i=0; i<products.length ;i++){
        console.log(products[i]);
        if(products[i] === "Pen")  break;
    }

    // print all arr without numbers
    for(let i=0; i<products.length ;i++){
        if(typeof products[i] === "number")  continue;
        console.log(products[i]);
    }

    // Label
    mainloop : for(let i=0; i<products.length ;i++){
        if(typeof products[i] === "number")  continue;
        console.log(products[i]);

        nestedLoop: for(let j=0;j<colors.length ;j++){
            console.log(`- ${colors[j]}`)
            if(colors[j] === "Green"){
                break mainloop;
            } 
        }


    }
}

console.log("=====================================================");
// ======================================================================== //

// Title:- Practice-Add Products To Page

function AddProductsToPage() {

    let products = ["keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "iphone"];

    let colors = ["Red" , "Green" , "Blue"];

    let showCount = 5;

    document.write(`Show ${showCount} Products`);

    for(let i=0; i<showCount ;i++){
        document.write(`<div>`);
            document.write(`<h3> [${i+1}] ${products[i]} </h3>`);
            for(let j=0;j<colors.length;j++){
                document.write(`<p> ${colors[j]} </p>`);
            }
            document.write(colors.join(" | "));
        document.write(`</div>`);
    }
}

console.log("=====================================================");
// ======================================================================== //

// Title:- 54- While loop
function whileLoop(){

    let products = ["keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "iphone"];

    let index = 0;

    while(index < products.length){
    console.log(products[index]);
    index++;
    }
}

console.log("=====================================================");
// ======================================================================== //

// Title:- 55- do While loop

function doWhileLoop(){

    let products = ["keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "iphone"];

    let i = 0;

    // do the acction and then check the condition if true or false
    do{
        console.log(products[i]);
        i++;
    }while(i < products.length);
}


console.log("=====================================================");
// ======================================================================== //


// Title:- 56- Loop-Challange

function loopChallange() {

    let myAdmins = ["Ahmed" , "Osama" , "Sayed" , "Stop" , "Samera"];
    let myEmployees = ["Amgad" , "Sameh" , "Ameer" , "Omar" , "Othman" , "Amany" , "Samia" , "Anwaar"];
    
    let numAd=0;
    for(let i=0;i<myAdmins.length;i++){
    if(myAdmins[i] === "Stop") break;
    numAd++;
    }
    
    
    document.write(`<div>We Have ${numAd} Admins </div>`);
    
    for(let i=0;i<numAd;++i){
    document.write(`<hr>`);
    
    document.write(`<div>`);
        document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]}`);
    
        document.write(`<h3>Team Members:</h3>`)
        
        let cnt=1;
        for(let j=0;j<myEmployees.length;++j){
            if(myEmployees[j][0] === myAdmins[i][0]){
                document.write(` - ${cnt} ${myEmployees[j]} `);
                document.write(`<br>`);
                document.write(`<br>`);
                cnt++;
            }
        }
    document.write(`</div>`);
    }
}


console.log("=====================================================");
// ======================================================================== //

// Title:- 57- Function intro and Basic Usage 

/*
    Function
    - What Is Function ?
    - User Defined vs Built In
    - Syntax + Basic Usage
    - Example From Real Life
    - Parameter + Argument 
    - Practical Example
*/

console.log(typeof console.log); // function (built in)

// User defiend
function sayHello (userName){
    console.log(`Hello  ${userName}`);
}

sayHello("Yala");
sayHello("Sayed");




console.log("=====================================================");
// ======================================================================== //


// Title:- 58- Function Advanced Example 

function sayHi(userName , age){
    if(age<20){
        console.log(`App is Not suitable for you`);
    }else{
        console.log(`Hi ${userName} Your Age is ${age}`);
    }
}

sayHi("Osama");     // age is undefiend
sayHi("Sayed",31);  
sayHi("Ebrahim", 19);


function generanteYears(start , end , exclude){
    for(let i =start ; i<=end ;i++){
        if(i === exclude) continue;
        console.log(i);
    } 
}

generanteYears(1984,2022 , 2000);


console.log("=====================================================");
// ======================================================================== //


// Title:- 59- Function Return and Use Cases 

/*
    Function 
    - Return
    - Automatic Semicolon Insertion [NO Line Terminator Allowed]
    - Interruptting
*/

function calc(num1 , num2){
    return num1+num2 ;
    // unreachable code , as it is after return
    let x = 1;
}

// Print from console 
console.log(calc(8,32)); 
// store returned value at variable
let res = calc(10 ,11);  
console.log(res + 12);

// automatic semicolon insertion
function calcs(num1 , num2){
   return;
   num1 + num2;
}

let sum = calcs(1 , 59);
console.log(sum);       // undefiend
console.log(sum+100);   //NaN


function generate(start , end){
   for(let i=start;i<=end ; i++){
       if(i === 15) return `Interruptting`;
   }
   console.log(i);
}

generate(10 , 20);



console.log("=====================================================");
// ======================================================================== //

// Title:- 60- Function Default Parameters

/*
    Function 
    - Default Function Parameter
    - Function Parameter Default [Undefined]
    - Old Strategies [Condition + Logical Or]
    - [ES6] Method
*/

// old Strategies vs ES6
function salute(userName ="Unknown" , age = "Unknown"){
    
    // old strategies
    //if(age === undefined) age = "Unknown";
    age = age || "Unknown";

    return `Hello ${userName} Your Age Is ${age}`;
}

console.log(salute("omar" ));


console.log("=====================================================");
// ======================================================================== //

// Title:- 61- Function Rest Parameters

/*
    Function 
    - Rest Parameter
    - Only one Allowed
    - Must Be Last Element
*/


function getSum(...numbers){

    console.log(Array.isArray(numbers));
    
    let sum =0;
    for(let i=0;i<numbers.length;i++)
        sum += numbers[i];
    
    return sum;
}


console.log(getSum( 10 , 29 , 38 , 38 , 38 , 30 , 10 ));


console.log("=====================================================");
// ======================================================================== //

// Title:- 62- Function Unlimate Practice

/*
    Function advanced Practice
    - Parameters
    - Default
    - Rest
    - Loop
    - Condition
*/


function showInfo(us="Un", ag ="Un" , rt=0 , show="yes" , ...sk){
    
    document.write(`<div>`);
        document.write(`<h2>Welcome, ${us} </h2>`);
        document.write(`<h3>Age : ${ag} </h3>`);
        document.write(`<p>Hour Rate : $${rt}</p>`);
        
        if(show === "yes"){
            if(sk.length >0){
                document.write(`<p> ${sk.join(" | ")}</p>`)
            }else{
                document.write(`<p>Skills: NO Skills</p>`)
            }
        } 
        else{
            if(sk.length > 0)
                document.write(`<p> Skills is Hidden</p>`)
            else 
                document.write(`<p> NO Skills </p>`)
        }
       
    document.write(`</div>`);
}


showInfo("Mohamed" , 20 , 50 , "yes" , "Js" , "HTML , CSS");






console.log("=====================================================");
// ======================================================================== //

// Title:- 63- Random Arguments Function Challenge

/*
    Creat Function showDetails
    Function Accept 3 Parameters [a,b,c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Booleam => status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator 
*/

function showDetails (a , b , c){
    if(typeof a === 'string' && typeof b === 'number'){
        if(c)
            document.write(` Hello ${a}, Your age Is ${b},You are Avilable For Here `);
        else 
            document.write(` Hello ${a}, Your age Is ${b},You are Not Avilable For Here `);
    }
    else if(typeof a === 'number' && typeof b === 'string'){
        if(c)
            document.write(` Hello ${b}, Your age Is ${a},You are Avilable For Here `);
        else 
            document.write(` Hello ${b}, Your age Is ${a},You are Not Avilable For Here `);
    }
    else if(typeof b === 'string' && typeof c === 'number'){
        if(a)
            document.write(` Hello ${b}, Your age Is ${c},You are Avilable For Here `);
        else 
            document.write(` Hello ${b}, Your age Is ${c},You are Not Avilable For Here `);
    }
    else if(typeof b === 'number' && typeof c === 'string'){
        if(a)
            document.write(` Hello ${c}, Your age Is ${b},You are Avilable For Here `);
        else 
            document.write(` Hello ${c}, Your age Is ${b},You are Not Avilable For Here `);
        }
    else if(typeof a === 'string' && typeof c === 'number'){
        if(b)
            document.write(` Hello ${a}, Your age Is ${c},You are Avilable For Here `);
        else 
            document.write(` Hello ${a}, Your age Is ${c},You are Not Avilable For Here `);
    }else{
        if(b)
            document.write(` Hello ${c}, Your age Is ${a},You are Avilable For Here `);
        else 
            document.write(` Hello ${c}, Your age Is ${a},You are Not Avilable For Here `);

    }

    document.write(`<hr>`);
}


showDetails("Mo" , 20 ,  true);
showDetails( 20 , "Mo", false);
showDetails(true , 20 , "MO");
showDetails(false , "Mo" , 20);
showDetails("Mo" , true , 20);
showDetails(20 , false , "Mo");

console.log("=====================================================");
// ======================================================================== //


// Title:- Anonymous Function And practice

/*
    - Anonymous Function
    - Calling Named Function vs Anonymous Function 
    - Argument To Other Function
    - Task Without Name
    - SetTimeout
*/


function Ex(){

    
    // call function before creat it 
    // you can't do this at the anonymous function
    console.log(calc(10,20));

    function calc(num1 , num2){
        return num1+num2;
    }

    // Anonymous function
    // calling anonymous function with name of variable 
    // you can't call it before creat it
    // you could name function or not 
    let calculator = function (num1,num2){
        return num1 + num2;
    }
    console.log(calculator(10 , 20));

    // if you name it , you could trace error easyly
    // Named anonymous function
    let multiplication = function Mul(num1 , num2){
        return num1 * num2;
    }
    console.log(multiplication(10 , 20));

    function sault(){
        console.log("Hello there");
    }

    // Usage of anonymous function
    document.getElementById("show").onclick = sault;

    setTimeout(function() {
        console.log("Good");
    } , 4000);
}


console.log("=====================================================");
// ======================================================================== //


// Title:- 65- Return Nested Function

/*
    Function
    - Function Inside Function
    - Return Function
*/

// Example 1

function sayMessage(fName ,lName){
    let message = `Hello`;
    // Nested function
    function concatMsg(){
        message = `${message} ${fName} ${lName}`;
    }
    concatMsg();

    return message;
}

console.log(sayMessage("Yassen" , "yasser"));


// Example 2

function sayMessage(fName ,lName){
    let message = `Hello`;
    // Nested function
    function concatMsg(){
        return `${message} ${fName} ${lName}`;
    }

    return concatMsg();
}

console.log(sayMessage("mohamed" , "yasser"));


// Example 3

function sayMessage(fName ,lName){
    let message = `Hello`;
    // Nested function
    function concatMsg(){
        // Nested function
        function getFullName(){
            return `${fName} ${lName}`;
        }
        
        return `${message} ${getFullName()}`;
    }

    return concatMsg();
}

console.log(sayMessage("mohamed" , "yasser"));


console.log("=====================================================");
// ======================================================================== //


// Title:- 66- Arrow Function Syntax 

/*
    Function
    - Arrow Function
    -- Regular vs Arrow [param + No Param]
    -- Multiple Lines
*/

// one statment Arrow Function
let print = (num) => num ;
// no parameters and one statement arrow function
// let print1 = () => 11;
let print1 = _ => 11;

// one parameter 
// let print2 = (num) => num;
let print2 = num => num;

// more than parameter must put the brackets
let print3 = (num1,num2) => num1+num2;

console.log(print(10));
console.log(print1());
console.log(print2(12));
console.log(print3(14,16));


console.log("=====================================================");
// ======================================================================== //


// Title:- 67- Scope-Global and Local

// Global Variables
// you could acsses them from any line of code

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);


function showText(){
    console.log(`Function - From Global ${a}`);
    console.log(`Function - From Global ${b}`);
}

// print the local scope variables a and b
/*
    function search for local scope varibles first 
    if not found search at global
    else not in local or global , 
    console will warn you (ReferenceError) that a,b are not defined
*/
 function showText2(){
    var a = 0;
    let b = 4;
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
}

showText ();
showText2();


console.log("=====================================================");
// ======================================================================== //


// Title:- 68- Scope-Block


/*
  - Block Scope [If, Switch, For]
  -- var is not a Block scope
  -- let and consr are Block Scope
  - important comment
*/

var x =10;

if(10 === 10){
    // overide by redeclare x by var
    var x = 50;
}

// using let or const make the variable Block Scope
// to overcome the overide problem
if(10 === 10){
    // Not overide
    let x = 39;
    console.log(`From If BLock ${x}`);
}
/*
    Block search for local scope varibles first 
    if not found search at global
    else if it declared after printint it , console will warn you that should be declared first
    else not in local or global , 
    console will warn you (ReferenceError) that a,b are not defined
*/

console.log(`From Global ${x}`);



console.log("=====================================================");
// ======================================================================== //


// Title:- 69- Scope-Lexical 

/*
    Scope
    - Lexical Scope

    Search
    - Execution Context
    - Lexical Environment
*/

function parent(){
    let a =10;
    console.log(`From parent ${a}`);

    function child(){
        let a = 20;
        console.log(a);
        // print an error message
        //console.log(`From child ${b}`);

        function grand(){
            let b = 50;
            console.log(`From grand ${a}`);
            console.log(`From grand ${b}`);
        }
        grand();
    }
    child();
}

parent();  

console.log("=====================================================");
// ======================================================================== //

// Title:- 70- Arrow Function Challange

// let names = function (...name){
//     return `String [${name.join("], [")}] => Done`
// }

let names = (...name) => `String [${name.join("], [")}] => Done !`; 

console.log(names("Ahmed" ,"Mohamed","Sayed","Ola"));


let myNumbers = [20 ,50, 10,60];

// let calc = (one,two,...nums) => two+nums[0] - (one+nums[1]);

let calc = function (one,two , ...nums){
    return two+nums[0] - (one+nums[1]);
}
console.log(calc(10 , 60 , 50,20 )); 


console.log("=====================================================");
// ======================================================================== //


// Title:- 71- Higher Order Function
/*
    ---> is a function that accepts functions as parameters and/or returns a function

    -Map 
    --- metohd creates a new array
    --- populated with the results of calling a provided function on every element 
    --- in the calling array

    Syntax map(callBackFunction(Element, Index , Array){} , thisArg)
    - Element => The Current element being processed in the array 
    - Index   => The index of the current element being processed in the array 
    - Array   => The Current Array 

    Notes
    - Map Return A New Array

    Examples
    - Anonymous Function 
    - Named Function

*/

let myNums = [1,2,3,4,5,6];

let newArray = [];

for(let i =0 ;i<myNums.length;++i){
    newArray.push(myNums[i]*2);
}
console.log(newArray);

// using map

// let addSelf = myNums.map(function(element, index, arr){
//     // console.log(`Current Element => ${element}`);
//     // console.log(`Current index => ${index}`);
//     // console.log(`Array => ${arr}`);
//     // console.log(`This => ${this}`);
    
//    return element*2;
// } , 10);

// arrow
let addSelf = myNums.map(a => a*2);

console.log(addSelf);

function addition(ele){
    return ele*2;
} 

// higer
let add = myNums.map(addition);
console.log(add);  // same result



console.log("=====================================================");
// ======================================================================== //


// Title:- 72- Higher Order Function-Map practice
/*
    Map
    - Swap cases
    - Inverted Numbers
    - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1 , -10 , -20, 15 , 100 , -30];
let ignoreBooleans = "Elz123er4o";

/* 
    first turn string to array using split 
    then using map to do the operation at ele of array
    then turn the modified array sw to string using join
*/
let sw = swappingCases.split("").map(function(ele){
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");

console.log(sw); // ELzerO

// Inverted Numbers
let inv = invertedNumbers.map(function(ele){
    return -ele;
});

console.log(inv);

// Ignore Numbers
// search about => parsInt()
let ign = ignoreBooleans.split("").map(function(ele){
    if(isNaN(parseInt(ele))) return ele;
}).join("");

console.log(ign); // Elzero


console.log("=====================================================");
// ======================================================================== //

// Title:- 73- Higher Order Function - Filter
/*
   - Filter
   --- method creates a new array 
   --- with all elements that pass the test implemented by the provided function
   
   Syntax filter(callBackFunction(Element , Index , Array) , thisArg)
   - Element => The current element being processed in the array
   - Index => The index of the current element being processed in the array 
   - Array => The Current array
*/

// Get Frinends With Name Starts With A
let friends = ["Ahmed" ,"Sameh", "Sayed", "Asmaa" ,"Amgad" ,"Israa"];
// filter - Arrow
let filteredFriends = friends.filter( el => el.startsWith("A") );
console.log(filteredFriends);

// Get Even Numbers Only
let numbers = [11,20,2,5,17,10];

let ev = numbers.filter( el => !(el%2));
console.log(ev);


console.log("=====================================================");
// ======================================================================== //


// Title:- 74- Higher Order Function - Filter Practice


// Filter Words More Than 4 chars
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence.split(" ").filter( ele => ele.length<=4 ).join(" ");
console.log(smallWords);


let mix = "A13BS2ZX";

let mixed = mix.split("").filter( ele => parseInt(ele) )
.map(ele => ele*ele).join("");

console.log(mixed);



console.log("=====================================================");
// ======================================================================== //



// Title:- 75- Higher Order Function - Reduce

/*
   - Reduce
   --- method executes a reducer function on each element of the array
   --- resulting in a single output value
   
   Syntax
   reduce(callBackfunc(Accumulator , Current val, Current Index ,Source Array{ } , initialValue))
   - Accumulator => the accumulated value previously returned in the last invocation
   القيمة اللى بترجع من الريترن بترجع تتخزن فيه
   - Current val => The current element being processed in the array
   - Index => The index of the current element being processed in the array
   ------------- Starts from index 0 if an initialValue is provided
   ------------- Otherwise, it starts from index 1
   - Array => The current array
*/

let nums = [10,20,15,30];

// Without initialvalue
let addd = nums.reduce(function(acc,current,index,arr){
    console.log(`Acc ${acc}`);
    console.log(`Current Element ${current}`);
    console.log(`Current Element Index ${index}`);
    console.log(`Array ${arr}`);
    console.log(acc + current);
    console.log(`------------------------------`);
    
    return acc+current;
});

console.log(addd);

console.log(`------------------------------`);

// With initialValue
let adddd = nums.reduce(function(acc,current,index,arr){
    console.log(`Acc ${acc}`);
    console.log(`Current Element ${current}`);
    console.log(`Current Element Index ${index}`);
    console.log(`Array ${arr}`);
    console.log(acc + current);
    console.log(`------------------------------`);

    return acc+current;
},5);

console.log(adddd);


console.log("=====================================================");
// ======================================================================== //


// Title:- 76- Higher Order Function - Reduce Practice

/* 
    Reduce
    - Longest Word 
    - Remove Chars + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battary", "Test"];

let check = theBiggest.reduce( (acc, curr) => acc.length>curr.length ? acc : curr );
console.log(check);


let removeChars = ["E", "@","@","L","Z","@","@","E","R","@","O"];

let p = removeChars.filter(ele => ele !== '@')
                   .map( (ele , i) => i !== 0 ? ele.toLowerCase() : ele)
                   .reduce( (acc, curr) => acc+curr);

console.log(p);

console.log("=====================================================");
// ======================================================================== //


// Title:- 77- Higher Order Function - ForEach And Practice

/* 
    - ForEach
    --- method exectes a provided function once for each array element

    Syntax forEach(callBackFuncion(Element , Index , Array) { } , thisArg)
    - Element => The current element being processed in the array
    - Index => The index of the current element being processed in the array
    - Array => The Current Array

    Note
    - Dosen't Return Anything [Undefiend]
    - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");


// When you click on any element of array allLis 
// you will disactive all elements then active the one you clicked 
allLis.forEach( ele => ele.onclick = function(){
    // Remove active class from elments
    allLis.forEach(ele => ele.classList.remove("active"));
    // Add Active Class To This Element 
    this.classList.add("active");
    // Hide all Divs
    allDivs.forEach( ele => ele.style.display= 'none' )
});

console.log(allLis);


console.log("=====================================================");
// ======================================================================== //


// Title:- 78- Higher Order Function Challenges

/* 
    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In the Code

    You Can't Use
    - Numbers
    - Letters

    - You Must Use [Filter + Map + Reduce + Your Konwledge]
    - Order Is Not Important
    - All In One Chain
*/


let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let myRes = myString.split("").filter( (ele , i) => !(!isNaN(ele) || ele === ',' || i === myString.length-true))
                    .map(function(el , i){
                        return i !== 1   ? el : '' ;
                    }).reduce((acc,curr) => acc+curr).replaceAll('_' , " ");

console.log(myRes);


console.log("=====================================================");
// ======================================================================== //


// Title:- 79- Object introduction

/*
    Object
    - Intro and What Is Object
    - Testing Window Object
    - Accessing Object

     - every object has his own proprties and methods 
     -- proprties show us imformation about object 
     -- mehtods do an action related to the object
*/

let user = {
    // properties
    theName: "Elshahaby",
    theAge: 20,

    // methods
    sayHello: function(){
        return `Hello ${this.theName}`;
    }
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());



console.log("=====================================================");
// ======================================================================== //


// Title:- 80- Dot Notation vs Bracket Notation

/*
    Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name

    Note 
    - you can store proparity name in variable and use it to access proparities , only by Bracket Notation

*/

let myVar = "BirthDate";

let User = {
    // properties
    theName: "Elshahaby",
    theAge: 20,
    "country of": "Egypt",
    BirthDate : "3/3"

};


// Accessing object proparities using Dot Notation
console.log(User.theName);    // Elshahaby
// Accessing object proparities using Bracket Notation
console.log(User["theAge"]);   // 20
// "country of" not a pure identefier like variable and function names
console.log(User["country of"]); // Egypt

// you can store proparity name in variable and use it to access proparities , only by Bracket Notation
console.log(User.BirthDate); // 3/3
console.log(User.myVar);     // undefiend 
console.log(User[myVar]);    // 3/3



console.log("=====================================================");
// ======================================================================== //


// Title:- 81- Nested Object and Advanced Trainings

let user1 = {
    name: "Mohamed",
    age: 20,
    skills:["HTML" , "CSS" ,"js"], 
    available: false,

    addresses:{
        ksa: "Riyadh",
        egypt:{
            one: "Cairo",
            two: "Alex",
        },
    },

    checkAv: function(){
        // this.available
        if(user1.available === true){
            return `Free for word`;
        }else{
            return `Not Free`;
        }
    },
}


console.log(user1.name);
console.log(user1.age);
console.log(user1.skills);
console.log(user1.skills[2]); // access with Index

// every object has a prototype
console.log(user1.addresses);        
console.log(typeof user1.addresses); // object

console.log( user1.addresses.ksa );  // Riyadh
console.log(typeof user1.addresses.ksa); // string

console.log(typeof user1.addresses.egypt); // object
console.log(user1.addresses.egypt);        // {one:'Cairo', two:'Alex'}

console.log(typeof user1.addresses.egypt.one);// string
console.log( user1.addresses.egypt.one );     // Cairo
console.log( user1["addresses"].egypt.one );  // Cairo
console.log( user1["addresses"]["egypt"] );    
console.log( user1["addresses"]["egypt"]["one"] );     // Cairo

console.log(user1.checkAv());

console.log("=====================================================");
// ======================================================================== //


// Title:- 82- Create Object With New Keyword

// ways to write the object

// let person = {};

/* 
    let person = new Object({
        age: 20,
    });
*/

let person = new Object();


console.log(person); // {}

// add properity with Dot Notation
person.age = 20; 
// add properity with Bracket Notation
person["country"] = "Egypt";

console.log(person); // {age: 20 , country:'Egypt'}

// update value of proparity
person.age = 19;
// add a method to object
person.sayHello = function(){
    //              person.country
    return `Hello ${this.country}`;
};


console.log( person.sayHello);   // display Block of code of fucntion                         
console.log( person.sayHello());   // Hello Egypt                        

console.log(typeof person.sayHello); // function
console.log(typeof person.sayHello()); // string



console.log("=====================================================");
// ======================================================================== //



// Title:- 83- This Keyword

// blog link:- https://www.prestonlamb.com/blog/javascript-this-keyword

/*
    Function this keyword
    - this Introduction
    - this Inside Object Method 
    --- When a function is called as a method of an object,
    --- its this is set to the object the method is called on
    ---   لما تنادى على دالة على انها دالة لكائن , لو جوا الدالة دى كلمة   فهى بتعود على 

    - Global Object
    - Test Variables With Window And This
    - Global Context
    - Function Context
    
    Search
    - Strict Mode
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    */
   
   
    console.log(this); // window
    console.log(this === window); // true
    
    myVar = 100;
    
    // access variable with window object and keyword this object
    console.log(window.myVar); // 100
    console.log(this.myVar); // 100
 
    console.log("==============================");
 
 /*
     The context of the sayHello function changes depending on how and where it's called.
     When it's invoked by itself, its context is the global Window object. 
     When it's invoked from the person object, its context is the person object that invoked the function.
     
     This concept of context is pretty natural to us in our communication with others.
     Suppose your friend asks you, "Hey, did you see the game last night? It was great!" 
     You know intuitively that "it" is referring to the game. 
     You can tell that because of the context of the conversation.
     But if you say to your friend, "Man, it's crazy out there," 
     they don't know exactly what you're referring to.
     But as humans we've come to understand that that sentence just means things going on in the world are crazy. 
     It's more of a global statement as opposed to a specific statement like the first one.
     When we're speaking of this in JavaScript, we are trying to determine what the context of the function is, just like in these two sentences.
     */
    
    // this 
    //  بتعتمد على السياق اللى ناديت بيه الدالة
    // يعنى لما تناديها لوحدها غير لما تناديها من جوه اوبجكت
    function hola(){
        console.log(this);
        console.log(`hola, ${this.name} !`);
        return this;
     };
     
     hola(); // window
     // hola,   !
     
     console.log(hola() === window) // true
     
     let ob = {
         name: "test",
         hola,
     };
     ob.hola();// ob
     //  hola, test !
     
     console.log(ob.hola() === window); // false
     
     console.log("=================================");
 //-----------------------------------------------//
 
 // blog link of function context 
 // https://www.learn-js.org/en/Function_Context 
 
 
 var person3 = {
     name : "John"
 };
 
 function printName1()
 {
     console.log(` hola ${this.name}`);
 }
 
 printName1();
 let boundPrintName = printName1.bind(person3);
 
 boundPrintName();  // hola john
 
 /*
              call/apply vs bind
     The difference between call/apply and bind is that
      bind returns a new function identical to the old function, except that the value of this in the new function is now the object it was bound to. 
      call/apply calls the function with this being the bound object, but it does not return a new function or change the original, it calls it with a different value for this.
 */
 
 var boundPrintName1 = printName1.call(person3);    //boundPrintName gets printName's return value (null)
 //boundPrintName1();                               //doesn't work because it's not a function, it's null
 printName1.call(person3); // hola john      //is the same as
 
 // printName1.bind(person3);  //returns a new function, but nothing is using it so it's useless
 printName1.bind(person3)();   // hola john  //executes the function returned by bind
 
 
 // another context for this 
 
 // if you click the button, html button will  appear in console
 document.getElementById("clk").onclick = function(){
     // this here refers to the button
     console.log(this);
 };
 
 
 console.log("========================");
 
 let user88 = {
     age:20,
     ageInDay: function(){
         return this.age*365;
     },
 };
 
 console.log(user88.age);
 console.log(user88.ageInDay());
 
 

console.log("=====================================================");
// ======================================================================== //

// Title:- 84-Creat Object With Creat Method

// Docs -->
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

let user77 =  {
    age: 40,
    doubleAge: function(){
        return this.age * 2;
    },
};

console.log(user77);
console.log(user77.age); // 40 
console.log(user77.doubleAge()); // 80

let obj = Object.create({});
console.log(obj); // {}

obj.a = 100;
console.log(obj); // {a:100}

// here I take user77 as a prototype to the new object copyObj
// من الاخر الجديد واخد القديم نموذج اى حاجه هتتغير فى القديم هتأثر و تغير فى الجديد
let copyObj = Object.create(user77); 
/*
    من الاخر انت كمان ممكن تعدل على الاوبجكت الجديد اللى هو نموذج من القديم 
    بدون ما التعديلات فى الجديد تأثر على القديم و ممكن كمان الاوبجكت الجديد تضيف عليه 
  بروباريتيز جديده خاصه بيه هو , زياده على القديمه اللى خدها من الاوبجكت اللى خده نموذج
*/
copyObj.age = 30;

// you see that the copyObj have a proparity (age:30) but the proparities
// of user77 appears in copyObj prototype
console.log(copyObj);// {age:30}
console.log(copyObj.age); // 30
console.log(copyObj.doubleAge()); // 40




console.log("=====================================================");
// ======================================================================== //

// Title:- 85- Creat Object With Assign Method

// Docs -->
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/*
    Syntax
    -- Object.assign(target, ...sources);

   - It returns the modified target object.
*/

let obj1 = {
    prop1: 1,
    meth1: function(){
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2:  function(){
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

console.log(targetObject);

// targetObject is modefied forever by the proparities of the add source
let finalObject  = Object.assign(targetObject ,obj2);
console.log(finalObject);
console.log(targetObject);

let finalObject2 = Object.assign(targetObject ,obj1);

// بيتم التعديل على اى متغير شايل قيمة الاوبجكت التارجت لو تم التعديل على التارجت 
console.log(targetObject);
console.log(finalObject);
console.log(finalObject2);
console.log(targetObject === finalObject);
console.log(targetObject === finalObject2);
console.log(finalObject2 === finalObject);

// اى تعديم بيسمع قبل و بعد
finalObject.prop4 = 400;
finalObject.prop1 = 50;

console.log(finalObject2);
console.log(finalObject);


let newObj = Object.assign(finalObject , obj1 ,{prop5 : 5 , prop6:6});

console.log(newObj);



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //




console.log("=====================================================");
// ======================================================================== //




console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //


console.log("=====================================================");
// ======================================================================== //


console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //


console.log("=====================================================");
// ======================================================================== //



console.log("=====================================================");
// ======================================================================== //
