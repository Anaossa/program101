
export class Car {

static className = 'Carro';

    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

    constructor ( brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    turnOn () {

        if ( this.isRunning) {
            console.log ('El carro ya estaba encendido, se dañó el motor')
            return;
        } 

        if (this.fuelTank <= 0) {
            console.log ('El carro no tiene gasolina');
            return;
        }
        
            this.isRunning =true;
            console.log ('El carro está encendido')
        }


    fillTank (gas: number ) {
         if ( gas <=0) {
            console.log ('El gas tiene que ser positivo');
            return;
         }
         
         let newfuelThank = this.fuelTank + gas;
         if (newfuelThank >= 100) {
            this.fuelTank = 100
         } else
           this.fuelTank = newfuelThank;
        }


        }


let myMazda = new Car( 'Mazda', 'Sedan');

console.log (myMazda);
myMazda.fillTank(50);
myMazda.fillTank(420);
myMazda.turnOn();
console.log (myMazda );


 console.log ( Car.className);