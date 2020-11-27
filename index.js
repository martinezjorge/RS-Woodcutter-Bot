var robot = require("robotjs");


function main() {
    console.log("Starting...");
    sleep(4000);

    var number_of_loops = 0;

    while (number_of_loops < 5) {
        robot.moveMouseSmooth(830, 454);
        robot.mouseClick();
        sleep(8000);
        number_of_loops++;
    }
    
    console.log("Done.");
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();