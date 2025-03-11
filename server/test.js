console.log("hello world");

// async and await

function taskOne(){
    console.log("hello 1");
}
function taskTwo(){
    console.log("hello 2");
}
async function asd(){
    await taskOne();
    await taskTwo();
}

asd()