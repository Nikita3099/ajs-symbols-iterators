import Character from './Character.js';
import Team from './Team.js';
import { canIterate } from './canIterate.js';

const bowman = new Character({ name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10 });
const swordsman = new Character({ name: 'Мечник', type: 'Swordsman', health: 60, level: 1, attack: 30, defence: 20 });

const team = new Team();
team.add(bowman);
team.add(swordsman);

console.log('Итерация через генератор:');
for (const member of team) {
  console.log(member.name);
}

console.log('Проверка canIterate:');
console.log(canIterate(team));       // true
console.log(canIterate(new Map()));  // true
console.log(canIterate(null));       // false
console.log(canIterate(10));         // false
console.log(canIterate("Netology"));// true
