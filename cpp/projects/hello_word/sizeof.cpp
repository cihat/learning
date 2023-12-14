#include <iostream>

int main()
{

  std::string name = "Bob";
  double gpa = 2.5;

  std::string arrayVariable[] = {"123", "123", "123", "123"};
  

  std::cout << sizeof(arrayVariable) << " bytes\n";
  
  std::cout << sizeof(arrayVariable) / sizeof(std::string);
  return 0;
}
