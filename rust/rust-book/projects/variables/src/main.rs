// But mutability can be very useful, and can make code more convenient to write. Although variables are immutable by default, you can make them mutable by adding mut in front of the variable name

fn main() {
  // let mut x = 5;
  // println!("The value of x is: {x}");
  // x = 6;
  // println!("The value of x is: {x}");

  // const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
  // println!("THREE_HOURS_IN_SECONDS {THREE_HOURS_IN_SECONDS}");

  // const TEST: i32 = 2;
  // println!("test: {TEST}");

  // // Shadowing
  // let x = 5;
  // println!("The vlaue of x is: {x}");
  // let x = x + 1;
  // {
  //   let x = x * 2;
  //   println!("The value of x in the inner scope is: {x}");
  // }

  // println!("The vlaue of x is: {x}");


  // difference mut and shadowing

  let mut mutated_variable = "this is a string";
  println!("{mutated_variable}");
  let mut mutated_variable = mutated_variable.len();
  println!("{mutated_variable}");
}
