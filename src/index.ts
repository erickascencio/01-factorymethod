import BicycleTransport from "./transport/BicycleTransports";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";
import Motorcycle from "./transport/veichles/Motorcycle";

declare var process;
let transport: Transport;

if (process.argv.includes("uber")){
    transport=new CarTransport();
    transport.startTransport();

}else if (process.argv.includes("eats")){
    transport=new MotorcycleTransport();
    transport.startTransport();
}else if (process.argv.includes("bike")){
    transport=new BicycleTransport();
    transport.startTransport();
}else {
    console.log("tipo de transporte invalido")
}