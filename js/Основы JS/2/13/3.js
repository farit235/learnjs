for (let i = 0; i < 5; i++) console.log(i); //output: 0 1 2 3 4

for (let i = 0; i < 5; ++i) console.log(i); //output: 0 1 2 3 4

//потому что увеличение i++ выполняется отдельно от проверки условия, поэтому нет никакой разницы между i++ и ++i
