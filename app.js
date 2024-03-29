//Ask the usere to enter his/her name as input keep asking until he/she enters a name
let nameOfUser;
let gender;
let age;
do{
    nameOfUser = prompt("Enter Your Name: ");
}while(nameOfUser=="")

//Ask the user to enter his/her gender as input, the answer should be either (male or female)
do{
    gender = prompt("Enter Your Gender(male/female): ");
}while(gender !== "male" && gender !== "female")

//Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero
do{
    age = prompt("Enter Your Age: ");
}while(age == "");

if(age<=0){
    alert("your age is less than or equal Zero.");
    do{
        age = prompt("Enter Your Age again: ");
    }while(age == "" || age <=0);
}

//Alert a welcoming message with the name of the user 
alert(`Welcome MR.${nameOfUser}`); 