function countdown(seconds) {
  return new Promise((resolve, reject) => {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function () {
        if (i > 0) console.log(i + '...');
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000);
    }
  });
}

countdown(3).then(
  () => console.log("countdown completed successfully"),
  err => console.log(`countdown experienced an error: ${err.message}`));