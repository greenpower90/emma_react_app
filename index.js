import mainPicture from "./data/main-picture.js"
import quotes from "./data/quotes.js"
import express from "express"

const localHost = 'http://localhost:5000/'

import path from "path"

import cors from "cors"

import bodyParser from "body-parser"

import { fileURLToPath } from 'url';

import { overviews } from "./data/overviews-data.js"
import  galleryData  from "./data/gallery_data.js"

// Define __dirname and __filename in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));


app.use(express.static('public'))
app.use(bodyParser.json());

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// API Route to handle GET request
app.get('/', (req, res) => {
  const randomPictureIndex = Math.floor(Math.random()*mainPicture.length)
  const randomQuoteIndex = Math.floor(Math.random()*quotes.length)
  
  const newArticles = overviews.map((article) => {
    return {
      ...article,
      picture: localHost + article.picture,
    };
  });

  const data = {
    src: `http://localhost:5000/${mainPicture[randomPictureIndex].src}`,
    // quote: quotes[randomQuoteIndex],
    articles:newArticles
  }
  res.json({ data });
});

app.get('/random-quote', (req, res) => {
  console.log('random quoute requested')
  const randomQuoteIndex = Math.floor(Math.random()*quotes.length)
  const quotesQty = quotes.length

  const data = {
    quote: quotes[randomQuoteIndex],
    quotesQty: quotesQty,
  }
  res.json({ data });
});


app.get('/galerie', (req, res) => {
  console.log("Gallery data request");

  // Ensure that the gallery data is available
  if (galleryData && galleryData.length > 0) {
    res.json({ data: galleryData });
  } else {
    res.status(404).json({ error: "Gallery data not found" });
  }
});

app.get('/galerie/:id', (req, res) => {
  console.log("Gallery data request - výběr");
  console.log(req.params.id)
  const requestedId = req.params.id

  // Ensure that the gallery data is available
  if (galleryData[requestedId].galleryData && galleryData[requestedId].galleryData.length > 0) {
    res.json({ data: galleryData[requestedId] });
  } else {
    res.status(404).json({ error: "Gallery data not found" });
  }
});


app.get('/quote', (req, res) => {
  // Log the incoming request ID
  console.log("Requested Quote ID:", req.query.id);

  // Convert the query parameter to a number if necessary
  const quoteId = parseInt(req.query.id, 10);

  // Find the quote that matches the requested ID
  const requestedQuote = quotes.find((quote) => quote.id === quoteId);

  // Total number of quotes
  const quotesQty = quotes.length;

  // If the quote is found, send it, otherwise handle the error case
  if (requestedQuote) {
    const data = {
      quote: requestedQuote,
      quotesQty: quotesQty,
    };
    res.json({ data });
  } else {
    res.status(404).json({ error: "Quote not found" });
  }
});



// API Route to handle GET request
app.get('/about', (req, res) => {
  console.log('about requested')
  const data = {
    title: "Jmenuju se Emma Robinson",
    pictureLink: "http://localhost:5000/pictures/jsem-emma-robinson/jmenuji-se-emma-robinson.jpg",
    articleText:`Ani jedno z těch jmen nemám od narození.
                  Můj brácha říkal, že tím pádem nejsem důvěryhodná a už nikdy nebudu.
                  Jsem Emma a Robinson od té chvíle, co se mi narodil můj syn.
                  Žijeme sami na ostrově jeho utrpení.
                  Ne, že by kolem nás nebyla spousta lidí, to v pocitu osamělosti nehraje vůbec žádnou roli.
                  Vždycky jsem si přála být dobrodruhem. Jsem dobrodruhem.
                  A voda je šíleně ledová, což je skvělý na žíly a já plavu proti proudu což je 
                  skvělý na fyzičku. Musíš velice dobře plavat, abys v pořádku doplaval. A kam vlastně?  
                  A zatímco občas polykám andělíčky a zdá se mi o hovnech, uběhla řada let. Je to instinktivní boj.
                   Víte co je to Kuba?
                   Kuba je moje okouzlujíci diktatura, můj ostrov svobody, moje bída, moje kariera, moje samota, moje tma a moje cesta domů. Co jsem Kubovo?
                    Jsem Kubovo mostem. A jsem z toho dost prohnutá. 
                  `
  }
  res.json({ data });
});


app.get("/article", (req, res) => {
  console.log('REQUEST')
  console.log(req.query.id);
  let requestedArticle

  
  overviews.forEach((article) => {
      if(article.articleId === req.query.id){
          requestedArticle = article;

      }
  })
  //requestedArticle.picture = isPicSrcChanged ? requestedArticle.picture : localHost + requestedArticle.picture
  console.log('DATA to send:')
  console.log(requestedArticle.picture)
  res.json({data: requestedArticle})
})

// API Route to handle GET request
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// API Route to handle POST request
app.post('/api/data', (req, res) => {
    console.log(req.body)
  const receivedData = req.body.message;
  console.log("Data received on backend:", receivedData);
  
  res.json({ message: "Data received successfully", data: receivedData });
});

// Static files (for React)
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Reroute to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});