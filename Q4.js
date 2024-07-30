function TheSameSampleFunctionButLittleMoreComplicate(input) {
    let result = ""
    if (input % 2 == 0) result += "a";
    if (input % 3 == 0) result += "b";
    if(result == "")
        return input
    return result;
  }
  Array.from(Array(10).keys()).forEach((element) => {
    console.log(TheSameSampleFunctionButLittleMoreComplicate(element + 1));
  });
  