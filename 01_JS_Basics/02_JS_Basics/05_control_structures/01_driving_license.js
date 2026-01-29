let age = 17;

if(age>=18)
    console.log("You are eligible for driving license");
// for single statement, {} is optional
else
{
    // for more than 1 statement, {} is mandatory
    console.log("You are not eligible for driving license");
    console.log(`You need to wait for ${18 - age} years`);   
}