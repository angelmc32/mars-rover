// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  position: [4,4],
  travelLog: [4,4]
}

// ======================
function turnLeft(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      rover.direction = "N";
  }
  console.log(`turnLeft was called! New direction: ${rover.direction}`);
  return;
}

function turnRight(rover){
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
      rover.direction = "N";
  }
  console.log(`turnRight was called! New direction: ${rover.direction}`);
  return;
}

function moveForward(rover){
  switch(rover.direction) {
    case "N":
      rover.position[1]-=1;
      break;
    case "E":
      rover.position[0]+=1;
      break;
    case "S":
      rover.position[1]+=1;
      break;
    case "W":
      rover.position[0]-=1;
      break;
    default:
      rover.position[1]-=1;
  }
  rover.travelLog.push(rover.position[0]);
  rover.travelLog.push(rover.position[1]);
  console.log(`moveForward was called! New position is x: ${rover.position[0]} y: ${rover.position[1]}`);
}

function moveBackward(rover){
  switch(rover.direction) {
    case "N":
      rover.position[1]+=1;
      break;
    case "E":
      rover.position[0]-=1;
      break;
    case "S":
      rover.position[1]-=1;
      break;
    case "W":
      rover.position[0]+=1;
      break;
    default:
      rover.position[1]+=1;
  }
  rover.travelLog.push(rover.position[0]);
  rover.travelLog.push(rover.position[1]);
  console.log(`moveBackward was called! New position is x: ${rover.position[0]} y: ${rover.position[1]}`);
}

function commandList(commands){
  for(counter = 0 ; counter < commands.length ; counter++) {
    switch(commands[counter]) {
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        moveForward(rover);
    }
  }
  for(counter = 0 ; counter < rover.travelLog.length ; counter+=2) {
    console.log(`x: ${rover.travelLog[counter]} y: ${rover.travelLog[counter+1]}`);
  }
}