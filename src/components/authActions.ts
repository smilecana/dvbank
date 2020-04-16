import { store } from "./store";

export function login() {
  store.setState({
    authorized: true
  });
  console.log(store.state)
}

export function logout() {
    store.setState({
    authorized: false
  });
  console.log(store.state)
}