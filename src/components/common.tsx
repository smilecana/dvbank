import {setFilterAccounts} from "./authActions";

export function filterAccounts(customer) {
    let accounts = {}
    let savings = [], chequing = [], credit = [];
    let account = {
        number: '',
        type:'',
        balance:'',
        creationDate:'',
        status:'',
        creditLimit:'',
        transactions:[]
    }
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
    }else{
        // @ts-ignore
        savings.push(account);
        // @ts-ignore
        chequing.push(account);
        // @ts-ignore
        credit.push(account);

        accounts['savings'] = savings;
        accounts['chequing'] = chequing;
        accounts['credit'] = credit;
    }
    setFilterAccounts(accounts);
}

