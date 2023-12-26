#include <signal.h>
#include <stdio.h>

void intHandler(int dummy) { fprintf(stderr, "this is test input"); }

int main(int argc, char **argv) {

  //  signal(SIGINT, intHandler);

  if (argc != 1) {
    fprintf(stderr, "Argument count must be 1\n");
    return 123;
  }

  fprintf(stdout, "Enter first number\n");

  int n;
  fscanf(stdin, "%d", &n);

  return 0;
}
