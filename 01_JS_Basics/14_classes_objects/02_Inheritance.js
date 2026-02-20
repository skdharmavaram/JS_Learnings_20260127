//Base class or parent class or super class
class BaseTest{
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(`Starting test: ${this.name}`);
    }
}

//Derived class or child class or sub class
class LoginTest extends BaseTest{
    validateLogin(){
        console.log(`Validating login for test: ${this.name}`);
    }
}

const loginTest = new LoginTest('Login Test 2');
loginTest.start(); // Output: Starting test: Login Test 2
loginTest.validateLogin(); // Output: Validating login for test: Login Test 2

//Another derived class
class LoginTest2 extends BaseTest{
    constructor(name, status){
        super(name); // Call the constructor of the base class
        this.status = status;
    }
    printResult(){
        console.log(`Testcase: ${this.name}, status: ${this.status}`);
    }
}

const loginTest2 = new LoginTest2('Login Test', 'Passed');
loginTest2.start(); // Output: Starting test: Login Test
loginTest2.printResult(); // Output: Testcase: Login Test, status: Passed
