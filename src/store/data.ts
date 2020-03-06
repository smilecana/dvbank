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
            "path": "/accounts",
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
                {
                    "title": "Account Document",
                    "path": "/accounts/document",
                    "key": "ACCOUNTS_DOCUMENT",
                }
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
                {
                    "title": "Transfers History",
                    "path": "/transfer/transfers-history",
                    "key": "TRANSFER_HISTORY",
                }
            ]
        },
        {
            "title": "Bills",
            "path": "/bills",
            "icon": "payment",
            "key": "BILLS",
            "items": []
        }
    ]
}
