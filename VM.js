let fs = require('fs');
let ram = new Array();
var readlineSync = require('readline-sync');

let progText = fs.readFileSync('fpp2.txt').toString();

ram = progText.split(/\s+/);

let ip = 0;
let x = ram.length;
while (ip < x - 1){
	switch(ram[ip]){
		case 'input':
			let number = readlineSync.question();
			ram[ram[ip + 1]] = number * 1;
			ip += 2;
			break;
		case 'add':
			ram[ram[ip + 1]] += ram[ram[ip + 2]];
			ip += 3;
			break;
		case 'sub':
			ram[ram[ip + 1]] -= ram[ram[ip + 2]];
			ip += 3;
			break;
		case 'mult':
			ram[ram[ip + 1]] *= ram[ram[ip + 2]];
			ip += 3;
			break;
		case 'div':
			ram[ram[ip + 1]] = (ram[ram[ip + 1]] / ram[ram[ip + 2]]);
			ip += 3;
			break;
		case 'ost':
			ram[ram[ip + 1]] %= ram[ram[ip + 2]];
			ip += 3;
			break;
		case 'set':
			ram[ram[ip + 2]] = ram[ip + 1] * 1;
			ip += 3
			break;
		case 'cmp':
			///console.log(ram[ram[ip + 1]] * 1, ram[ram[ip + 2]] * 1);
			if (ram[ram[ip + 1]] * 1 >= ram[ram[ip + 2]] * 1){
				ip += 5;
			}else{
				ip += 3;
			}
			break;
		case 'jmp':
			if (ram[ip + 1] == '-'){
				ip -= (ram[ip + 2] * 1)
			}else{
				ip += (ram[ip + 1] * 1);
			}
			break;
		case 'swap':
			kkk = ram[ram[ip + 1]];
			ram[ram[ip + 1]] = ram[ram[ip + 2]];
			ram[ram[ip + 2]] = kkk;
			ip += 3;
			break;
		case 'output':
			console.log(ram[ram[ip + 1]]);
			ip += 2
			break;
	}
	///console.log(ip, ram[ip]);
}
console.log(ram);