#!/bin/bash

mkdir -p actions-runner
cd actions-runner

curl -o actions-runner-linux-x64-2.311.0.tar.gz -L \
https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz

echo "29fc8cf2dab4c195bb147384e7e2c94cfd4d4022c793b346a6175435265aa278  actions-runner-linux-x64-2.311.0.tar.gz" | shasum -a 256 -c

tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz


# web4 project

├── index.html              # Main HTML file
├── styles.css              # CSS file for styling
├── script.js               # JavaScript for Web4 functionalities
├── assets/                 # Folder for static assets (images, icons, etc.)
│   ├── logo.png            # Example: Logo for your project
│   ├── background.jpg      # Example: Background image
│   └── ...                 # Any other assets
├── js-libraries/           # Folder for external JavaScript libraries
│   ├── mqtt.min.js         # MQTT library (already included via CDN)
│   ├── ethers.min.js       # Ethereum library (optional, for blockchain)
│   └── ...                 # Other external libraries (optional)
├── backend/                # Backend folder (if applicable)
│   ├── server.js           # Node.js server
│   ├── routes/             # Backend route handlers
│   │   ├── auth.js         # Authentication route
│   │   ├── nfts.js         # NFT route handler
│   │   └── ...             # Other route files
│   ├── package.json        # Node.js dependencies
│   ├── utils/              # Utility functions (e.g., IPFS integration)
│   └── ...                 # Any other backend logic
├── templates/              # Folder for templates (if using HTML templates)
│   ├── trade.html          # Trade functionality template
│   ├── chat.html           # Chat functionality template
│   └── ...                 # Other template files
└── README.md               # Documentation for your project

git add .
git commit -m "Added files from phone"
git commit -m "Added files from localfiles"
git push origin main
