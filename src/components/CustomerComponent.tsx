import {useRef} from "react";
import useCustomers from "../hook/use-customer.ts";
import customerService, {Customer} from "../service/customer-service.ts";


const CustomerComponent = () => {
    const idRef = useRef<HTMLInputElement>(null);

    // const { customers, error, isLoading } = useCustomers();
    const nameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);

    const {customers, setCustomers} = useCustomers();


    function handleAddOnClick() {
        if (idRef.current == null || nameRef.current == null || addressRef.current == null) {
            alert("null");
            return;
        }
        const customer: Customer = {
            id: idRef.current.value,
            name: nameRef.current.value,
            address: addressRef.current.value
        };
        customerService.create<Customer>(customer).then(r => {
            console.log(r);
            if (r.status === 201) {
                setCustomers([...customers, customer]);
            }
        });
        console.log("hello");
    }

    function deleteCustomer(id: string) {
        customerService.delete(id).then((res) => {
            if (res.status === 204) {
                const updatedCustomers = customers.filter((customer) => customer.id !== id);
                setCustomers(updatedCustomers);
            }
        });
    }

    return (
        <>
            <form
                className="row g-3 customer-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <h1>Customers</h1>
                <div className="col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="customer_id" className="form-label">
                        Customer Id
                    </label>
                    <input
                        ref={idRef}
                        type="text"
                        className="form-control fields"
                        placeholder="C001"
                    />
                </div>
                <div className=" col-lg-3 col-12 col-md-6 col-sm-12">
                    <label htmlFor="customer_name" className="form-label">
                        Name
                    </label>
                    <input
                        ref={nameRef}
                        type="text"
                        className="form-control fields"
                        placeholder="Sachin"
                    />
                </div>
                <div className="col-md-12 col-lg-6 col-sm-12">
                    <label htmlFor="customer_address" className="form-label">
                        Address
                    </label>
                    <input
                        ref={addressRef}
                        type="text"
                        className="form-control fields"
                        placeholder="1234 Main St"
                    />
                </div>

                <div className="col-12 button-section">
                    <button type="submit" className="btn btn-success" onClick={handleAddOnClick}>
                        Add
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-4">
                    <label htmlFor="search" className="form-label">
                        Search
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="search id or name..."
                    />
                </div>
            </form>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Option</th>
                </tr>
                </thead>
                <tbody id="customerTbl">
                {customers.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteCustomer(customer.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default CustomerComponent;
