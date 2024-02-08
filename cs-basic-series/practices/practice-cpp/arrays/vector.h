#ifndef PRACTICE_ARRAY_H
#define PRACTICE_ARRAY_H

namespace vc {
static const int kMinCapacity = 16;
static const int kGrowthFactor = 2;
static const int kShrinkFactor = 4;

class Vector {
public:
  Vector();
  ~Vector();

  void push_back(int value);
  void pop_back();
  int size() const;
  int capacity() const;
  int at(int index) const;
  void insert(int index, int value);
  void prepend(int value);
  void erase(int index);
  void remove(int value);
  int find(int value) const;

private:
  int *data_;
  int size_;
  int capacity_;

  void reserve(int capacity);
  void resize(int new_size);
  void shrink_to_fit();
};
} // namespace vc

#endif // PRACTICE_ARRAY_H
