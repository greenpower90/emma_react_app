#1 project structure
    please check structure.txt file

#2 Installation

Prerequisites:
    Node.js (v20.15 or higher)
    npm (v6 or higher)

    #backend running on port 5000
        npm i
        nodemon index.js

    #frontend running on port 3000
        open another bash terminal
        cd frontend/
        npm i
        npm start

#3 API Endpoints
    method       Endpoint        Description
    GET          /               Fetches random picture and all articles data
    GET          /random-quote   Fetches random quote and all quotes qty
    GET          /galerie        Fetches all gallery data
    GET         /galerie/:id     Fetches selected gallery data
    GET         /quote           Fetches requested qoute by query.id
    GET         /about           Fetches /about article data
    GET         /article         Fetches selected article data by query.id