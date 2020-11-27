var robot = require("robotjs");


function main() {
    console.log("Starting...");
    sleep(4000);

    var number_of_loops = 0;

    // first tree
    var first_tree_x = 751;
    var first_tree_y = 511;

    // second tree
    var second_tree_x = 1137;
    var second_tree_y = 490;

    while (number_of_loops < 5) {
        // chop down first tree
        robot.moveMouseSmooth(first_tree_x, first_tree_y);
        robot.mouseClick();
        sleep(8000);

        dropLogs();

        // chop down second tree
        robot.moveMouseSmooth(second_tree_x, second_tree_y);
        robot.mouseClick();
        sleep(8000);

        dropLogs();

        number_of_loops++;
    }
    
    console.log("Done.");
}

function dropLogs() {
    // Set coordinates of inventory item you want to drop
    var inventory_x = 1842;
    var inventory_y = 797;

    // drop logs from the inventory
    robot.moveMouseSmooth(inventory_x, inventory_y);
    robot.mouseClick('right');
    robot.moveMouseSmooth(inventory_x, inventory_y + 70);
    robot.mouseClick();
    sleep(1000);    
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();