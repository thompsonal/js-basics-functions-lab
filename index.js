// Code your solution in this file!
//  distanceFromHqInBlocks()
//returns a distance in blocks:

function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - 42;
    } else { 
        return 42 - distance;
    }
}

//   distanceFromHqInFeet()
//returns a distance in feet:
//calculates distance below 42nd street

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}


// returns the distance travelled in feet:
// returns a distance in feet:
//returns distance when destination is below distance:
function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}




function calculatesFarePrice(start, destination) {
//1) gives customers a free sample
//2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//3) charges 25 dollars for a distance over 2000 feet
//4) does not allow rides over 2500 feet

    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400); 
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

