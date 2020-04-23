import {setFilterAccounts} from "./authActions";

export function filterAccounts(customer) {
    let accounts = {}
    let savings = [], chequing = [], credit = [];
    if (customer['accounts']) {
        customer['accounts'].forEach((item : object) => {
            if (item['type'] === 'savings') {
                // @ts-ignore
                savings.push(item);
            } else if (item['type'] === 'chequing') {
                // @ts-ignore
                chequing.push(item);
            } else {
                // @ts-ignore
                credit.push(item);
            }
        })
        accounts['savings'] = savings;
        accounts['chequing'] = chequing;
        accounts['credit'] = credit;
    }
    setFilterAccounts(accounts);
}
