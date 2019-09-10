export const AppController = {
    
    index(req, res, next) {
        return res.render('index', { title: 'Divine Express' });
    },
    
    trips(req, res, next) {
        res.render('trips', { title: 'Divine Express' });
    }
};