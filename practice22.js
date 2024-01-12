function triangle(integer, mode = "default") {
  let triangleUsingHashes = "";
  let hashes = "#";
  if (integer > 0 && (mode === "default" || mode === "left")) {
    for (let i = 1; i <= integer; i++) {
      triangleUsingHashes += hashes.repeat(i);
      triangleUsingHashes += "\n";
    }
  } else if (integer > 0 && mode === "right") {
    for (let i = 1; i <= integer; i++) {
      for (let j = 1; j <= integer - i; j++) {
        process.stdout.write(" ");
      }
      for (let k = 1; k <= i; k++) {
        process.stdout.write(hashes);
      }
      console.log();
    }
  } else if (integer > 0 && mode === "isosceles") {
    // will continue from here.
    for (let i = 1; i <= integer; i++) {
      for (let k = i + 1; k <= integer; k++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j <= i * 2 - 1; j++) {
        process.stdout.write(hashes);
      }
      console.log();
    }
  } else if (integer < 0 && mode === "isosceles") {
    for (let i = -1 * integer; i >= 1; i--) {
      for (let k = i + 1; k <= -1 * integer; k++) {
        process.stdout.write(" ");
      }
      for (let j = 1; j <= i * 2 - 1; j++) {
        process.stdout.write(hashes);
      }
      console.log();
    }
  } else {
    for (let j = integer * -1; j > 0; j--) {
      triangleUsingHashes += hashes.repeat(j);
      triangleUsingHashes += "\n";
    }
  }
  triangleUsingHashes.trim();
  console.log(triangleUsingHashes);
}
module.exports = { triangle };
