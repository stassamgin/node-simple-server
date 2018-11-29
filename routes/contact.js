const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const store = [];

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'contact.html'))

  res.render('contact', {store});
});


router.post('/handler', (req, res, next) => {
    store.push(req.body);
    console.log(store);
    res.redirect('/contact');
})

module.exports = router;