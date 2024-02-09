// #include "some_folder/SomeFile.h"
#include <assert.h>

#include <iostream>
#include <vector>

#include "jvector.cc"
#include "jvector.h"

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
  int initial_capacity = 1;

  std::cout << "Enter how many items you want to store: " << std::endl;
  std::cin >> initial_capacity;

  jw::JVector test_v(initial_capacity);

  assert(test_v.IsEmpty());

  for (int i = 0; i < 77; ++i) {
    test_v.Push(i + 1);
  }

  test_v.DebugString();

  // vector<int> mvec = {23, 2, 6, 44, 34};
  // cout << mvec.debug() << endl;
  // cout << mvec.size() << endl;
  // mvec.push_back(100);
  // mvec.push_back(100);
  // mvec.pop_back();
  // mvec.insert(mvec.begin() + 2, 1000);
  // mvec.erase(mvec.begin() + 2);
  // cout << mvec.debug() << endl;

  return 0;
}
