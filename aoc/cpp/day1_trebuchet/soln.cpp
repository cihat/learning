#include <cctype>
#include <cstdint>
#include <cstdio>
#include <fstream>

int main(int argc, char *argv[]) {
  using namespace std;

  if (argc != 2) {
    printf("Usage: %s <filename>\n", argv[0]);
  }

  uint32_t sum = 0;
  ifstream inputfile(argv[1]);
  string line;

  if (!inputfile.is_open()) {
    printf("Failed to open input file\n");
  }

  while (getline(inputfile, line)) {
    printf("%s\n", line.c_str());

    uint32_t leftmost = -1;
    uint32_t rightmost = -1;

    for (int i = 0; i < line.length(); i++) {
      if (isdigit(line[i])) {
        if (leftmost == -1) {
          leftmost = line[i] - 0x30;
          rightmost = line[i] - 0x30;
        } else {
          rightmost = line[i] - 0x30;
        }
      }
    }
    printf("%d,%d\n", leftmost, rightmost);
    uint32_t total = leftmost * 10 + rightmost;
    sum += total;
  }

  printf("Sum: %d\n", sum);

  inputfile.close();

  return 0;
}
