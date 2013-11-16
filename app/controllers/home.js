var musica = require('../models/musica');

var songs = [
    {
        name: 'Yellow',
        url: 'http://www.e-chords.com/chords/coldplay/yellow'
    },
    {
        name: 'Yellow 2',
        url: 'http://www.e-chords.com/chords/coldplay/yellow'
    },
    {
        name: 'Yellow 3',
        url: 'http://www.e-chords.com/chords/coldplay/yellow'
    },
    {
        name: 'Yellow 4',
        url: 'http://www.e-chords.com/chords/coldplay/yellow'
    }
];

exports.index = function(req, res){
    res.render('home/index', {
      title: 'Home',
      pageTitle: 'musica',
      rightIcon: 'ac',
      songs: songs
    });
};

exports.view = function(req, res){
    var song = songs[req.params.songIndex];
    res.render('home/view', {
      title: 'View',
      pageTitle: song.name,
      leftIcon: 'ac',
      url: song.url
    });
};

exports.search = function(req, res){
    var q = req.query.q || '';

    musica.search( q, function(results){
        res.render('home/search', {
          title: 'Search',
          pageTitle: 'search',
          leftIcon: true,
          prevQuery: q,
          results: results
        });
    });
};

exports.add = function(req, res){
    songs.push({
        name:req.query.title,
        url: req.query.url
    });

    res.redirect('/');
};
