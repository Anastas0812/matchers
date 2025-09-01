// const objects = [
//   {name: 'мечник', health: 10},
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
// ];

export default function sortByHealth(arr) {
  return arr.slice().sort((first, second) => second.health - first.health);
}

// console.log(sortByHealth(objects));