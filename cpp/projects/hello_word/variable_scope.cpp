#include<iostream>

void printNum();

int myNum = 3;
int main() {
  int myNum = 1;
  printNum();
  std::cout << ::myNum << '\n';

  return 0;
}

void printNum() {
  int myNum = 3;
  std::cout << ::myNum;
}
