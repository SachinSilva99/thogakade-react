import create from "./http-service";

export interface Customer {
    id: string;
    name: string;
    address: string;
}

export default create("/customers");
