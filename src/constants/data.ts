export default {
    menus: [
        {
            "title": "Home",
            "path": "/home",
            "icon": "home",
            "key": "APP",
            "items": []
        },
        {
            "title": "Accounts",
            "path": "/accounts/summary",
            "icon": "account_balance",
            "key": "ACCOUNTS",
            "items": [
                {
                    "title": "Summary",
                    "path": "/accounts/summary",
                    "key": "ACCOUNTS_SUMMARY",
                },
                {
                    "title": "Account Details",
                    "path": "/accounts/details",
                    "key": "ACCOUNTS_DETAILS",
                },
                
            ]
        },
        {
            "title": "Transfer",
            "path": "/transfer",
            "icon": "payment",
            "key": "TRANSFER",
            "items": [
                {
                    "title": "Transfer",
                    "path": "/transfer/summary",
                    "key": "TRANSFER_SUMMARY",

                },
                
            ]
        },
        {
            "title": "Credit Bill Payment",
            "path": "/creditbillpayment",
            "icon": "account_balance_wallet",
            "key": "CREDIT_BILL_PAYMENT",
            "items": [
                {
                    "title": "Credit Payment",
                    "path": "/creditbillpayment",
                    "key": "Credit Payment",

                },
            ]
        },
    ]
}
