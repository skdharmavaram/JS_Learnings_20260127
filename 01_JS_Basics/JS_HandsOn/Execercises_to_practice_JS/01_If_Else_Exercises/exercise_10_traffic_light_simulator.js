// Traffic Light Simulator
// Take a traffic light color ("red", "yellow", "green") as input and print the action: "Stop", "Wait", or "Go". Hint: Use if-else to match the input string to the correct action.

let trafficLight = "yellow";
if (trafficLight === "red") {
    console.log("Stop");
} else if (trafficLight === "yellow") {
    console.log("Wait");
} else if (trafficLight === "green") {
    console.log("Go");
} else {
    console.log("Invalid traffic light color");
}