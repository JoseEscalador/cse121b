let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
    let num = Math.random()
    if (num <= 0.5) {
        return false;
    }
    else if (num > 0.5) {
        return true;
    }
  }
  
function shipCanFire() {
if (shipHealth > 0 && shipAmmo > 0) {
    return true;
} 
else {
    return false;
}

// return true if the ships health is above 0 AND ammo is above 0 false otherwise
}
function isDestroyed(health) {
if (health <= 0) {
    return true;
}
else {
    return false;
}
// return true if health is zero or less
}
function reloadShip() {
shipHealth--;
shipAmmo = shipAmmo + 3;
// reduce ship health by 1 and increase ammo by 3
}