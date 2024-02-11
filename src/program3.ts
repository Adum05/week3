class Pilot_F1{
    private name: string = ''
    private team: string = ''
    private number: number;
    private points: number;

    constructor(name: string, team: string, number: number, points: number){
        this.team= team;
        this.name= name;
        this.number= number;
        this.points= points;

    }

    getName(): string {
        return this.name
    }
    getTeam(): string {
        return this.team
    }
    getNumber(): number {
        return this.number
    }
    getPoints(): number {
        return this.points
    }
    setPoints(points: number){
        this.points= points
    }

    PilotInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Team: ${this.team}`)
        console.log(`Number: ${this.number}`)
        console.log(`Points: ${this.points}`)
    }

    UpdatePoints(NewPoints: number){
        this.points= NewPoints
    }
}

let Pilot1= new Pilot_F1(`Fernando Alonso`, `Aston Martin`, 14, 333)
Pilot1.PilotInfo();

console.log(`Updating points...`);
Pilot1.UpdatePoints(333+25);
Pilot1.PilotInfo();












