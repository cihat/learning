// type conversion = conversion a value of one data type to another
// Implicit = automatic
// Explicit = Precede value with new data type (int) x

#include <iostream>

int main() {
  double x = (int) 3.14;

  // std::cout << x;  
  
  // char character = 100;

  // std::cout << character;

  // std::cout << (char) 100;

  int correct = 8;
  int questions = 10;

  double score = (double)correct/questions * 100;

  std::cout << score << '%';


  return 0;
}
