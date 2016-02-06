function testContext() {
    console.log(this);
};

function thisInsideFunction() {
    testContext();
};

var func = new testContext();

thisInsideFunction();

testContext();

