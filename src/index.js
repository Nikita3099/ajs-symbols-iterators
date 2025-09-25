import Character from './Character.js';
import Team from './Team.js';

const bowman = new Character({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});
const swordsman = new Character({
  name: 'Мечник',
  type: 'Swordsman',
  health: 60,
  level: 1,
  attack: 30,
  defence: 20,
});

const team = new Team();
team.add(bowman);
team.add(swordsman);

console.log('Итерация через классический итератор:');
for (const member of team) {
  console.log(member.name);
}
