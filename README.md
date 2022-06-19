# Getting Started

This project comes with a pre-compiled version of the React based client, so to use this project, run the Python based server.

Make sure you're running Python 3:
`python --version #=> 3.10.5`

Install the required depdencies:
`pip install -r requirements.txt`

Run the server:
`python idash-server.py`

Open the app:
`http://localhost:5000`

By default the server binds to `0.0.0.0` so you can access the app on other devices such as a phone or tablet.

## Hacking on the Client

It's a pretty standard `create-react-app` app.

Make sure you're running Node 18:
`node --version #=> v18.4.0`

Install the depencies for the client:
`cd client && npm install`

Serve the client in dev mode: 
`npm start`

Build the client:
`npm run build`