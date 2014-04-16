/**
 * It's the default route rule, index is an example
 * @param {Object} req Request object
 * @param {Object} res Response object
 */

module.exports = {
    main: function(req, res) {
        res.render('index.html', req);
    },

    episode: function(req, res) {
        var fs = require('fs'),
            path = 'views',
            filename = req.params['class'] + '.html';
        fs.exists(path + '/' + filename, function(exists) {
            if (exists) {
                return res.render(filename, req);
            } else {
                console.error("%s is not exist", filename);
                return res.render('index.html', req);
            }
        });
    }
};
