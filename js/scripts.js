  var hypotenuse = prompt("Enter the length of the largest side.");
  var side2 = prompt("Enter the length of the second side.");
  var side3 = prompt("Enter the length of the third side.");

    if (side2+side3 > hypotenuse) {
      prompt("this is not a triangle.");
    }
    if (side2 === side3 === hypotenuse) {
      prompt("this is an equilateral triangle.");
    }
    if (side2+side3 <= hypotenuse && side2 === side3) {
      prompt("this is an isoceles triangle.");
    }
    if (side2+side3 <= hypotenuse && side2 !== side3) {
      prompt("this is a scalene triangle.");
    }
