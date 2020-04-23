// store.ts
import { Store } from "react-stores";

interface IStoreState {
  authorized: boolean;
  customer:object;
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
          }
      },
      {
        persistence: true // This property does the magic
      }
);