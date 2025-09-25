export default class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  [Symbol.iterator]() {
    let index = 0;
    const members = this.members;

    return {
      next() {
        if (index < members.length) {
          const value = members[index];
          index += 1;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
