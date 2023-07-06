import { Comp1 } from "@components/Comp1";

export interface IServer {
    startServer(): void
    stopServer(): void
}

class Server implements IServer {
    public port: number;
    public address: string;
    public comp1 = new Comp1();

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    async startServer() {
        const data = await this.getData();
        console.log(`Starting server at: ${this.address}:${this.port}`)
    }

    stopServer(): void { }

    async getData(): Promise<String> {
        return 'data'
    }
}

const someServer: IServer = new Server(8080, 'localhost');
someServer.startServer();