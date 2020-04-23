// store.ts
import {Store} from "react-stores";

interface IStoreState {
    authorized: boolean;
    customer: object;
    filterAccounts:object;
}

export const store = new Store<IStoreState>(
    {
        authorized: false,
        customer: {
            id: "",
            firstName: "",
            lastName: "",
            province: "",
            address: "",
            postalCode: "",
            email: "",
            password: "",
            phoneNumber: "",
            accounts: [],
        },
        filterAccounts: {}
    },
    {
        persistence: true // This property does the magic
    },
);