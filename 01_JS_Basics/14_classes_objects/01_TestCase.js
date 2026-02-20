class Testcase{
    constructor(name, status){
        this.name = name;
        this.status = status;
    }

    printResult(){
        console.log(`Testcase: ${this.name}, status: ${this.status}`);
    }
}

const loginTest = new Testcase('Login Test', 'Passed');
loginTest.printResult(); // Output: Testcase: Login Test, status: Passed

const signupTest = new Testcase('Signup Test', 'Failed');
signupTest.printResult(); // Output: Testcase: Signup Test, status: Failed
