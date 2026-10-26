class Npc {
  health: number;
  speed: number;
  defense: number;
  attack: number;
  npctype: "walk" | "fly";

  constructor(
    health: number,
    speed: number,
    defense: number,
    attack: number,
    npctype: "walk" | "fly",
  ) {
    this.health = health;
    this.speed = speed;
    this.defense = defense;
    this.attack = attack;
    this.npctype = npctype;
  }

  walking(): number {
    this.speed = +2;
    return this.speed;
  }

  attacking(): number {
    this.attack = +2;
    return this.attack;
  }

  sprint(): number {
    this.speed = +4;
    return this.speed;
  }

  ultimateskill(): number {
    this.attack = +10;
    return this.attack;
  }

  isFlying(): string {
    if (this.npctype === "fly") {
      this.speed = +5;
      this.attack = +5;
      return `NPC itu terbang`;
    }
    return `Bukan NPC terbang`;
  }
}

const harpy = new Npc(100, 10, 15, 20, "walk");
const goblin = new Npc(150, 15, 20, 25, "fly");

console.log(harpy.attacking());
console.log(harpy.sprint());
console.log(goblin.isFlying());
