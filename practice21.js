const columns = (arrayWords) => {
  filtedArray = arrayWords.filter((element) => /[a-zA-Z0-9]/.test(element));

  if (filtedArray.length > 0) {
    const maxLenth = Math.max(...filtedArray.map((word) => word.length));
    for (let i = 0; i < maxLenth; i++) {
      filtedArray.forEach((word, index) => {
        const char = word.charAt(i) || " ";
        // console.log(`Index :${index},char:${char}`);
        process.stdout.write(
          index === filtedArray.length - 1 ? char + "\n" : char + " "
        );
      });
    }
  }
};
module.exports = { columns };
// columns(["write", "cook", "beat", "run"]);
