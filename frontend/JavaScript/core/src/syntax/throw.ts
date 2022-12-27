import chalk from 'chalk';

/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */
class ZipCode {
  static pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  private value: string;
  constructor(zip: string | number) {
    zip = String(zip);
    const match = zip.match(ZipCode.pattern);
    if (!match) {
      throw new ZipCodeFormatException(zip);
    }
    // zip code value will be the first match in the string
    this.value = match[0];
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value;
  }
}

class ZipCodeFormatException extends Error {
  constructor(zip: string | number) {
    super(`${zip} does not conform to the expected format for a zip code`);
  }
}

/*
 * This could be in a script that validates address data
 * for US addresses.
 */

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z: any) {
  try {
    z = new ZipCode(z);
  } catch (e) {
    const isInvalidCode = e instanceof ZipCodeFormatException;
    return isInvalidCode ? ZIPCODE_INVALID : ZIPCODE_UNKNOWN_ERROR;
  }
  return z;
}

export default function throFunction() {
  const log = console.log;

  const a = verifyZipCode(95060);         // returns 95060
  log(a)
  const b = verifyZipCode(9560);          // returns -1
  log(b)
  const c = verifyZipCode('a');           // returns -1
  log(c)
  const d = verifyZipCode('95060');       // returns 95060
  log(d)
  const e = verifyZipCode('95060 1234');  // returns 95060 1234
  log(e)

  const f = verifyZipCode('32433 3423 test 32433 3423 test');
  log(f)
}