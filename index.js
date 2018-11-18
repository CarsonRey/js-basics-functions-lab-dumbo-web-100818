// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  if (street > 42) {
    return (street - 42);
  } else {
    return (42 - street);
  }
}

function distanceFromHqInFeet(street) {
  return distance = distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return distance = (start - end) * 264;
  } else {
    return distance = (end-start) * 264;
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  let price;
  if (distance <= 400){
    return price = 0;
  }
  else if (distance > 401 && distance < 2000){
    return price = (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance <= 2500){
    return price = 25;
  }
  else {
    return 'cannot travel that far'
  }
}
