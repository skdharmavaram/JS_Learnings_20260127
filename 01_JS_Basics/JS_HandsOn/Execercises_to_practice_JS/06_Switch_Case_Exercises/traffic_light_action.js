// Traffic Light Action
// Take a traffic light color ("red", "yellow", "green") and print the action ("Stop", "Wait", "Go") using a switch. Hint: Use string cases for each color.

let trafficLight = "green";
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}