#include <iostream>
using namespace std;

class Employee
{
private:
  string Name;
  string Company;
  int Age;

public:
  void setName(string name)
  {
    Name = name;
  }
  string getName()
  {
    return Name;
  }
  Employee(string name, string company, int age)
  {
    Name = name;
    Company = company;
    Age = age;
  }

protected:
  string protected_var;
};

int main()
{
  Employee employee1 = Employee("Cihat", "one company", 45);

  cout << employee1.getName() << endl;

  return 0;
}