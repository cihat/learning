import fs from "node:fs";

fs.readFile('data.csv', function (err, data) {
  if (err) {
    console.log('Error Found:' + err);
    throw err;
  }
  console.log(data);
});
