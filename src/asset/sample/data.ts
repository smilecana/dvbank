export default {
    menus: [
        {
            "id": 1,
            "title": "Home",
            "link": "/home",
            "icon": "home",
            "open": false,
            "items": []
        },
        {
            "id": 2,
            "title": "Accounts",
            "link": "",
            "icon": "account_balance",
            "open": true,
            "items": [
                {
                    "id": 1,
                    "title": "Summary",
                    "link": "/summary"
                },
                {
                    "id": 2,
                    "title": "Account Details",
                    "link": "/details"
                },
                {
                    "id": 3,
                    "title": "Account Document",
                    "link": "/document"
                }
            ]
        },
        {
            "id": 3,
            "title": "Transfers",
            "link": "/transfer",
            "icon": "payment",
            "open": true,
            "items": [
                {
                    "id": 1,
                    "title": "Transfer",
                    "link": "/transfer"
                },
                
            ]
        },
        {
            "id": 4,
            "title": "Bills",
            "link": "/bill",
            "icon": "payment",
            "open": true,
            "items": []
        }
    ]
}
