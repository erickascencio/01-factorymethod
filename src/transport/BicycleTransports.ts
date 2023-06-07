import Bicycle from "./veichles/Bicycle";
import IVeichle from "./veichles/interface/IVeichle";
import Transport from "./Transport";

export default class BicycleTransport extends Transport{
    protected createTransport(): IVeichle{
        return new Bicycle;
    }
}