import APPRequest from '../controller/request';

export const AppController = {
    
    index(req, res, next) {
        return res.render('index', { title: 'Divine Express' });
    },
    
    contact(req, res, next) {
        return res.render('contact', { title: 'Divine Express' });
    },
    
    about(req, res, next) {
        return res.render('about', { title: 'Divine Express' });
    },
    
    trips(req, res, next) {
        res.render('trips', { title: 'Divine Express' });
    },
    
    async terminals(req, res, next) {
        const page = req.query.page || 1;
        const { _meta, data } = await APPRequest.getTerminals({ page });
        res.render('terminals', { title: 'Divine Express', terminals: data, pagination: _meta.pagination });
    }
};