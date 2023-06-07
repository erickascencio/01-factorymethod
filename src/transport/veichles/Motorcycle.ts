
import IVeichle from "./interface/IVeichle";
export default class Motorcycle implements IVeichle{
    startRoute(): void{
        this.getCargo();
        console.log("Moto Iniciando a entrega!");
    }

    getCargo(): void{
        console.log("Moto: encomenda retidada!");
    }
}