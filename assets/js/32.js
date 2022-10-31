const fechaDeHoy = new Date();
let hour = fechaDeHoy.getHours();
let minutes = fechaDeHoy.getMinutes();
console.log(hour, ":", minutes);
let intro = prompt("Please, what's your name?");
let greeting = {
  gMorning: "Good Morning,",
  gAfternoon: "Good Afternoon,",
  gEvening: "Good Evening,",
};
if (hour >= 05 && hour < 12) {
  console.log(greeting.gMorning, intro);
} else if (hour >= 12 && hour < 18) {
  console.log(greeting.gAfternoon, intro);
} else if (hour >= 18 && hour < 05) {
  console.log(greeting.gEvening, intro);
}
