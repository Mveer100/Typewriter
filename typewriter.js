const sentence = "hello there from lighthouse labs";


/*for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char)
  }, 50)
}*/

let delay = 0;
for (const char of sentence) {


  setTimeout(() => {
    process.stdout.write(char)
    }, delay += 50)
}
setTimeout(() => {
  console.log('')
}, delay)
