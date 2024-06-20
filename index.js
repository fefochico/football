const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); 

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
