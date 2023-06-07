import IVeichle from "./interface/IVeichle";

export default class Bicycle implements IVeichle {
    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega de bicicleta.");
    }
    getCargo(): void {
        console.log("Já pegamos a encomenda.");
    }
}