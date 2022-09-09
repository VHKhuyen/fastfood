
class SiteController {
    index(req, res){
        res.send('Home Page')
    }
    search(req, res) {
        res.send('Search')
    }
}

module.exports = new SiteController()