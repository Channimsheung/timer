const args = process.argv;
for (let i = 0; i < args.length; i++) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, Number(args[i]) * 1000);
}
