import { store } from "./store";

export function login() {
  store.setState({
    authorized: true
  });
  console.log(store.state)
}
export function setCustomer(customer){
    store.setState({
        customer: customer
    })
}
export function logout() {
    store.setState({
    authorized: false
  });
}

export function setFilterAccounts(accounts){
    store.setState({
        filterAccounts:accounts
    })
}