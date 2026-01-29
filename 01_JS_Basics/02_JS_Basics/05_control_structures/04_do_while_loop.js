// // Executes the block at least once before checking the condition.
// let i = 1; // initialization
// do
// {
//     console.log(i);
//     i++; // increment
// } while(i <= 10);

// use of continue: 

let i = 1; // initialization
do
{
    if(i%2==0)
    {
        i++;
        continue;
    }
    console.log(i);
    i++; // increment
} while(i <= 10);