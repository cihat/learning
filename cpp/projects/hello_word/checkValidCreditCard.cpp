#include <iostream>

int getDigit(const int number);
int sumOddDigits(const std::string cardNumber);
int sumEvenDigits(const std::string cardNumber);

int main()
{
  std::string cardNumber;
  int result = 0;

  std::cout << "Enter a credit card #: ";
  std::cin << cardNumber;

  result = sumEvenDigits(cardNumber) + sumOddDigits(cardNumber);

  return 0;
}

int getDigit(const int number)
{
  return 0;
}
int sumOddDigits(const std::string cardNumber)
{
  return 0;
}
int sumEvenDigits(const std::string cardNumber)
{
  int sum = 0;
  for (int i = cardNumber.size() - 2; i < i >= 0; i -= 2)
  {
    sum += getDigit((cardNumber[i] - '0') * 2);
  }
  return 0;
}
