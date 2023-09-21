import create from "./http-service";

export interface Customer {
    id: string;
    name: string;
    address: string;
}

export class CustomerService {

    apiClient = create("/customers");

    create(customer: Customer) {
        this.apiClient.create(customer).then(r => {
            if (r.status === 201) { /* empty */
            } else {
                throw Error("creating error");
            }
        });
    }
    delete(id:string){
        this.apiClient.delete(id).then((res) => {
            if (res.status === 204) { /* empty */ } else {
                throw Error("delete error");
            }
        });
    }
    update(id:string, customer :Customer){

        this.apiClient.update(id, customer).then((res) => {
            console.log(res);
            if (res.status === 204){ /* empty */ } else {
                throw Error("update error");
            }
        });
    }
}

export default new CustomerService();
