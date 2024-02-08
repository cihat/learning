// #include "some_folder/SomeFile.h"
#include <iostream>
#include <vector>

using namespace std;

void CheckVectorMethods() {
  vector<int> mvec = {23, 2, 6, 44, 34};

  cout << mvec[0] << endl;
  cout << mvec.front() << endl;
  cout << mvec.back() << endl;
  cout << mvec.size() << endl;
  cout << mvec.capacity() << endl;
  cout << mvec.max_size() << endl;
  cout << mvec.empty() << endl;
  cout << mvec.at(2) << endl;
  cout << mvec[2] << endl;
}

int main() {
  // CheckVectorMethods();

  return 0;
}
