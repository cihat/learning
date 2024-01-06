#include <iostream>

class Base {
public:
  virtual void vfunc() {
    std::cout << "Base\n";
  }
};

class Der: public Base {
private:
  void vfunc() override {
    std::cout << "Ders\n";
  }
};

void f(Base & b) {
  b.vfunc();
}

int main() {
  Der myder;
  f(myder);
}

