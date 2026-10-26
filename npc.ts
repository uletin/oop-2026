class NPC {
  public name: string;
  public health: number;
  public attack: number;
  public defense: number;
  public speed: number;
  public npctype: "walk" | "fly";

  constructor(
    name: string,
    health: number,
    attack: number,
    defense: number,
    speed: number,
    npctype: "walk" | "fly",
  ) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.npctype = npctype;
  }

  walking(): void {
    this.speed += 2;
    console.log(`${this.name} is walking. Speed increased to ${this.speed}.`);
  }

  attacking(): void {
    this.attack += 2;
    console.log(
      `${this.name} is attacking. Attack increased to ${this.attack}.`,
    );
  }

  sprinting(): void {
    this.speed += 5;
    console.log(`${this.name} is sprinting. Speed increased to ${this.speed}.`);
  }

  ultimateskill(): void {
    this.attack += 10;
    console.log(
      `${this.name} is using ultimate skill. Attack increased to ${this.attack}.`,
    );
  }
  isflying(): void {
    if (this.npctype === "fly") {
      this.speed += 10;
      console.log(`${this.name} is flying. Speed Increased to ${this.speed}.`);
    } else {
      console.log(`${this.name} cannot fly.`);
    }
  }
}
const mage: NPC = new NPC("Mage", 100, 20, 10, 5, "walk");
mage.walking();

const harpy: NPC = new NPC("Harpy", 20, 50, 33, 79, "fly");
harpy.isflying();
