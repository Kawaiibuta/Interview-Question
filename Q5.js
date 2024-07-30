function changeTimeFormat(input) {
    let parsedInput = input.split(":")
    if(parsedInput.length < 2)
        throw Error("Wrong format")
    let hour = Number.parseInt(parsedInput[0])
    let minute = Number.parseInt(parsedInput[1])
    if(hour == NaN || minute == NaN)
        //Unable to parse the input
        // To handle this, could throw a exception so that the module using this 
        // function could catch and handle the exception
        throw Error("Wrong format")
    let formattedHour = hour % 12
    let DayNight = hour / 12 > 1 ? "PM" : "AM"
    return `${formattedHour}:${minute}${DayNight}`
}
console.log(changeTimeFormat("4:25"))