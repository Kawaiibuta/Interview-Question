//The main idea why I use function here only because I
//don't want to if else for 3 case. Instead I could if return, this make the code easier to read
//Moreover, this could help when I need to elevate the function into something more complicate
// as we can see in the Q4.js
function ASampleFunctionToModuleTheTest(input) {
  if (input % 2 == 0) return "a";
  if (input % 3 == 0) return "b";
  return input;
}
Array.from(Array(10).keys()).forEach((element) => {
  console.log(ASampleFunctionToModuleTheTest(element + 1));
});
