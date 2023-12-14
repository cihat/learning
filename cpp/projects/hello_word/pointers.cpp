#include <iostream>

int main()
{
  // pointers = variable that stores a memory address of another variable sometimes it's easier to work with an address

  // & address-of operator
  // * dereference operator

  std::string name = "cihat";

  std::string *pName = &name;

  std::cout << *pName;

  return 0;
}
