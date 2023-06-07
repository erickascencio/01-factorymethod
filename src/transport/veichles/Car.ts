import IVeichle from "./interface/IVeichle";

export default class Car implements IVeichle{
    startRoute(): void{
        this.getCargo();
        console.log("Carro Iniciando o trajeto!");
    }

    getCargo(): void{
        console.log("Carro: Passageiros Embarcados!");
    }
}