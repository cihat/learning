# Some Linux Info

2 => standart error(stderr)
1 -> standart input(stdin)
0 => standart output(stdout)

ps aux
ps -ef

## curl

curl -s https://...url... | jq -r '.[].Adress' | while read serverAddr; do curl $serverAddr > $serverAddr.txt; done

## head

head -n 10

## dd

dd if=/dev/zero of=zero-file.txt bs=512 count=2
dd if=/dev/urandom of=random-file.txt bs=512 count=4
dd if=/dev/zero of=/dev/null

## hexdump

=> hexdump zero-file.txt
hexdump -v zero-file.txt

## cut

echo "cihat;salik;23;test" | cut -d\; -f3

echo "cihat;salik;23;test" | cut -d\; -f3,4,2

## awk

echo "cihat;salik;23;test" | awk -F\; '{ print $2, $1 "is at" $3 and working in" $4"}'
ls -lrt | awk '{ print $9}'

## `

echo `ls -lrt | wc -l`

## tail

tail -f log-file.txt

## Episodo 2

same
docker exec -it $(docker ps | tail -1 | awk '{ print $1 }') bash
docker exec -it `docker ps | tail -1 | awk '{ print $1 }'` bash

ifconfig lo0 | head -3 | tail -1 | awk '{ print $2}'

SERVER_URL=$(ifconfig lo0 | head -3 | tail -1 | awk '{ print $2}')

curl http://${SERVER_URL}:8080

## `%s/`change multiple same words

%s/foo/new-foo

## sed

echo "test input text" | sed -E 's/(\w+) (\w+) (\w+)/\3 \1/'

## echo

echo logfile.{01..12}.txt

echo logfile.{a..z}.txt
touch logfile.{01..12}.{01..30}.txt

## get last command

$(!!)
get last command result => echo $?

## strace

strace ||(|| is last command)
