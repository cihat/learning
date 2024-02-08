#include <iostream>

int add(int a, int b) { return a + b; }

int sub(int a, int b) { return a - b; }

int output_message(int a, int b, int (*operation)(int, int)) {
  std::cout << "The result is: " << operation(a, b) << std::endl;
  return 0;
}

void print() { std::cout << "Hello World" << std::endl; }
