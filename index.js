var robot = require("robotjs");


function main() {
    console.log("Starting...");
    sleep(4000);

    robot.moveMouse(0, 0);
    robot.mouseClick();
    console.log("Done.");
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();