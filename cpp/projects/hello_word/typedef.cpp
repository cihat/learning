#include <iostream>
#include <vector>

// typedef std::vector<std::pair<std::string, int>> pairlist_t;
// typedef std::string text_t;
// typedef int number_t;

using text_t = std::string;
using number_t = int;


int main() {
  using std::cout;
  // pairlist_t pairlist;

  text_t firstName = "cihat";
  number_t age = 23;

  cout << firstName << "\n";
    
  return 0;
}
