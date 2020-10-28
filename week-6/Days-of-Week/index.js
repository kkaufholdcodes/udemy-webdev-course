// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
    const daysOf = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
    }
     if (daysOf[num]) {
         return daysOf[num];
     } else {
         return null;
     }
}