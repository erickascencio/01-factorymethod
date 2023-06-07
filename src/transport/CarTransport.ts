import Transport from "./Transport";
import Car from "./veichles/car";
import IVeichle from "./veichles/interface/IVeichle";

export default class CarTransport extends Transport {
    protected createTransport(): IVeichle {
        return new Car;
    }
}