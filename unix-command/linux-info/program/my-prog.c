#include <stdio.h>

int main(int argc, char **argv) {

  if (argc != 1) {
    fprintf(stderr, "Argument count must be 1\n");
    return 123;
  }

  fprintf(stdout, "Enter first number\n");

  int firstNumber, secondNumber;

  fscanf(stdin, "%d", &firstNumber);

  fprintf(stdout, "Enter second number\n");

  fscanf(stdin, "%d", &secondNumber);

  fprintf(stdout, "The sum is %d\n", firstNumber + secondNumber);

  return 0;
}
