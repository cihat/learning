#include <iostream>

int main() {

  int grades[] = {65, 72, 81, 92};

  for(int grade : grades) {
    std::cout << grade << '\n';
  }

  return 0;
}
