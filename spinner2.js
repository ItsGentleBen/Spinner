const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let count = 0

for (const frame of animation) {
  setTimeout(() => {
    process.stdout.write(frame);
  }, count += 200);
};

setTimeout(() => {
  console.log();
  }, count);