
>
 ```xlsl
+----------------------------------------------------+
|                      Web4                          |
|                                                    |
|  +-----------------------+   +-------------------+ |
|  |     React.js SPA      |<--|  Google Search API | |
|  |-----------------------|   +-------------------+ |
|  | - Home Page           |                        |
|  | - AppStore            |                        |
|  | - WalletConnect       |                        |
|  | - Chat with Kubu-Hai  |                        |
|  | - Menu                |                        |
|  | - Online Gaming       |                        |
|  +-----------------------+                        |
|         |                                       | |
|         v                                       | |
|  +-----------------------+                      | |
|  |   Node.js + Express   |                      | |
|  |-----------------------|                      | |
|  | - API Gateway         |                      | |
|  | - Auth Service        |                      | |
|  | - User Management     |                      | |
|  | - Crypto Wallet       |<--->| CoinMarketCap API |
|  | - AppStore Service    |                      | |
|  | - AI Interaction      |                      | |
|  | - Marketplace Service |<--->| Facebook API   | |
|  | - Game Service        |                      | |
|  +-----------------------+                      | |
|         |                                       | |
|         v                                       | |
|  +-----------------------+   +----------------+ | |
|  |       MongoDB         |<--|  Discord API   | | |
|  |-----------------------|   +----------------+ | |
|  | - Users               |                      | |
|  | - Apps                |                      | |
|  | - Transactions        |                      | |
|  | - Games               |                      | |
|  | - Marketplace         |                      | |
|  +-----------------------+            
|       |«```code»|
|  +----------------------------------------------------+
├── /src
│   ├── /modules
│   │   ├── /auth
│   │   │   ├── authController.js
│   │   │   ├── authService.js
│   │   │   └── authRoutes.js
│   │   ├── /user
│   │   │   ├── userController.js
│   │   │   ├── userService.js
│   │   │   └── userRoutes.js
│   │   ├── /product
│   │   │   ├── productController.js
│   │   │   ├── productService.js
│   │   │   └── productRoutes.js
│   │   └── /order
│   │       ├── orderController.js
│   │       ├── orderService.js
│   │       └── orderRoutes.js
│   │
│   ├── app.js
│   └── config.js
│
├── /public
│   ├── index.html
│   └── styles.css
│
├── /tests
│   ├── auth.test.js
│   ├── user.test.js
│   ├── product.test.js
│   └── order.test.js
│
├── package.json
└── README.md
```
