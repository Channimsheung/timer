// const args = process.argv;
// for (let i = 0; i < args.length; i++) {
//   setTimeout(() => {
//     process.stdout.write("\x07");
//   }, Number(args[i]) * 1000);
// }

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", key => {
  if (key === "b") {
    process.stdout.write("\x07");
  }

  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key > 1 && key < 9) {
    console.log(`setting timer for ${key} seconds`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
});
