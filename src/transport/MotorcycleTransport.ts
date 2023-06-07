import Transport from "./Transport";
import Motorcycle from "./veichles/Motorcycle";
import IVeichle from "./veichles/interface/IVeichle";

export default class MotorcycleTransport extends Transport{
    protected createTransport(): IVeichle {
        return new Motorcycle;
    }
}