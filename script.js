// Copyright (c) 2022 Olantu All rights reserved
//
// Created by: Olantu
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the quadratic formula
 */
  function calculate() {
  // Get the input values
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  // Calculate the discriminant
  let discriminant = b * b - 4 * a * c;

  // Check if the equation has real roots
  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.getElementById("result").innerHTML = "The roots are x = " + x1.toFixed(2) + " and x = " + x2.toFixed(2);
  } else if (discriminant == 0) {
    let x = -b / (2 * a);
    document.getElementById("result").innerHTML = "The root is x = " + x.toFixed(2);
  } else {
    document.getElementById("result").innerHTML = "The equation has no real roots.";
  }
}
