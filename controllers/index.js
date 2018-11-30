const path = require('path');
const rootDir = require('../util/path');
const Store = require('../models');

exports.useErrorPage = (req, res, next) => {
  res.status(404).send('<h1>Page not found error</h1>')
};

exports.getAbout = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'about.html'))
};

exports.getAdmin = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'admin.html'))
};

exports.getContact = (req, res, next) => {
  res.render('contact', { store: Store.getItemList() });
};

exports.postContactMessage = (req, res, next) => {
  const item = new Store(req.body.text);
  item.save();
  res.redirect('/contact');
};

exports.getHome = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
};

exports.getServices = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'services.html'))
};

exports.getWorks = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'works.html'))
};
