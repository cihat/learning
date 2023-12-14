#include <iostream>

namespace first
{
  int x = 234;
} // namespace first

namespace second
{
  int x = 2;
}

int main()
{
  using namespace second;
  using namespace std;
  using std::cout; 
  using std::string;

  // cout << x;
  // string name = "cihat";

  string test = "cihat";
  cout << "Hello " << test;

  return 0;
}
