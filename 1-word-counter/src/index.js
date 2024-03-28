import readline from "node:readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter your sentence:\n", (sentence) => {
	const words = sentence.split(" ");
	const wordCount = words.length;

	console.log(`Your sentence has ${wordCount} words`);
	rl.close();
});
