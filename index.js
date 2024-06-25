const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

var corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD'
}

app.use(cors(corsOptions)); 

app.get('/players/:file', (req, res) => {  
  fs.readFile('./players/'+req.params.file+'.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Internal Server Error');
    }
    
    try {
      const jsonData = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.get('/competition/:file', (req, res) => {  
    fs.readFile('./competitions/'+req.params.file+'.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).send('Internal Server Error');
      }
      
      try {
        const jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.json(jsonData);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        res.status(500).send('Internal Server Error');
      }
    });
});

app.get('/team/spain/:file', (req, res) => {  
  fs.readFile('./spain/'+req.params.file+'.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Internal Server Error');
    }
    
    try {
      const jsonData = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
