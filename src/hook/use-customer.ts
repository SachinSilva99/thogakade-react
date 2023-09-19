import { useEffect, useState } from "react";
import customerService, {Customer} from "../service/customer-service";
import { CanceledError } from "axios";

const useCustomers = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const { request, cancel } = customerService.getAll<Customer>();
        request
            .then((res) => {
                console.log(res);
                setCustomers(res.data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) {
                    setError(error.message);
                    setIsLoading(false);
                }
            });
        return () => cancel();
    }, []);
    return { customers, error, isLoading, setCustomers, setError };
};
export default useCustomers;
