function demo()
{
    if(true)
    {
        var a = 1; let b = 2; const c = 3;
    }
    console.log(a); // 1
    console.log(b); // Error: b is not defined
    console.log(c); // Error: c is not defined
}

demo();

// scope of var a is function scoped, accessible outside the if block
// scope of let b and const c is block scoped, not accessible outside the if block
