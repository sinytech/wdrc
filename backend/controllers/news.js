const Parser = require('rss-parser')

const parser = new Parser();

const getNews = (req, res) => {
    return parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml')
        .then(({ items, image }) => {
            const item = items.pop()
            return res.status(200).send({ image, item })
        })
}

module.exports = {
    getNews
}
