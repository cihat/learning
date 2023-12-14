#include <iostream>

void printInfo(const std::string name, const int age);

int main()
{
  std::string name = "Bro";
  int age = 23;

  printInfo(name, age);

  return 0;
}

void printInfo(const std::string name, const int age)
{
  std::cout << name << '\n';
  std::cout << age << '\n';
}
