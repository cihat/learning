#include <iostream>

int main()
{
  using namespace std;

  string name;
  int age;

  cout << "What's your age?: ";
  cin >> age;

  cout << "What's your name?: ";
  getline(cin >> ws, name);

  cout << "Hello " << name << '\n';
  cout << "You are " << age << " years old.";

  return 0;
}
