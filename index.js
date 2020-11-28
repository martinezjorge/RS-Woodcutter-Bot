var robot = require("robotjs");


function main() {
    console.log("Starting...");
    sleep(4000);

    var number_of_loops = 0;

    while (number_of_loops < 5) {

        var tree = findTree();
        // if we can't find a tree, write an error message and exit the loop
        if (tree === false) {
            rotateCamera();
            console.log("Could not find a tree")
            continue;
        }

        // chop down the tree we found
        robot.moveMouseSmooth(tree.x, tree.y);
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

function testScreenCapture() {
    // taking a screenshot
    var img = robot.screen.capture(0, 0, 1920, 1080);

    var pixel_color = img.colorAt(30, 18);

    console.log(pixel_color);
}

function findTree() {
    var x = 300, y = 300, width = 1300, height = 400;
    var img = robot.screen.capture(x, y, width, height);

    var tree_colors = ["705634", "705d39", "765b37", "7d6039", "7a5d39"];

    for (var i = 0; i < 1000; i++) {
        var random_x = getRandomInt(0, width-1);
        var random_y = getRandomInt(0, height-1);
        var sample_color = img.colorAt(random_x, random_y);

        if (tree_colors.includes(sample_color)) {
            var screen_x = random_x + x;
            var screen_y = random_y + y;

            console.log("Found a tree at: " + screen_x + "," + screen_y + " color " + sample_color);
            return {
                x: screen_x,
                y: screen_y
            }
        }
    }

    // Did not find the color in the screenshot
    return false;
}

function rotateCamera() {
    console.log("Rotating Camera");
    robot.keyToggle('right', 'down');
    sleep(1000);
    robot.keyToggle('right', 'up');
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// testScreenCapture();

main();