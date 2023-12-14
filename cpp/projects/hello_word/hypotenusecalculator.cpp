#include <iostream>
#include <cmath>

int main() {
  using namespace std;

  double firstCorner;
  double secondCorner;
  double result;

  cout << "first corner: " << '\n';
  cin >> firstCorner;

  cout << "second corner: " << '\n';
  cin >> secondCorner;


  result = sqrt(pow(firstCorner, 2) + pow(secondCorner, 2));

  cout << "Result is: " << result;
  
  return 0;
}
