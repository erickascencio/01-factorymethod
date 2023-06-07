import IVeichle from "./veichles/interface/IVeichle";

export default abstract class Transport {
    startTransport(): void {
        const veichle = this.createTransport();
        veichle.startRoute();

    }

    protected abstract createTransport(): IVeichle;

}