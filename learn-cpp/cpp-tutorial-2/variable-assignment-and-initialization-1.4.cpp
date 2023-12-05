#include <iostream>

// int main()
// {
//   int a = 5, b = 6; // copy initialization
//   int c(7), d(8);   // direct initialization
//   // int e{9}, f{10};  // brace initialization (preferred)

//   std::cout << a;
//   std::cout << b;
//   std::cout << c;
//   std::cout << d;

//   return 0;
// }

int main()
{
  int width{5};     // direct brace initialization of value 5 into variable width (preferred)
  int height = {6}; // copy brace initialization of value 6 into variable height
  // int depth{};      // value initialization (see next section)

  std::cout << width;

  return 0;
}