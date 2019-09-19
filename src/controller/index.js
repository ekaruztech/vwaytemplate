import APPRequest from '../controller/request';

export const AppController = {
    index(req, res, next) {
        return res.render('index', { title: 'Divine Express' });
    },
    async entry(req, res, next) {
        const { data: { social_auth_keys } } = await APPRequest.getAccount(process.env.VOOMSWAY_API_KEY);
        res.render('trips', { title: 'Divine Express', host: process.env.HOST, social_auth_keys });
    },
    async contact(req, res, next) {
        const { data: { location, contact_info } } = await APPRequest.getAccount(process.env.VOOMSWAY_API_KEY);
        if (location || contact_info) {
            res.render('contact', { title: 'Divine Express', location, contact_info });
        } else {
            res.render('contact', { title: 'Divine Express' });
        }
    },
    about(req, res, next) {
        return res.render('about', { title: 'Divine Express' });
    },
    async terminals(req, res, next) {
        const page = req.query.page || 1;
        const { _meta, data } = await APPRequest.getTerminals({ page });
        let response = { title: 'Divine Express' };
        if (data && _meta) {
            response = { ...response, terminals: data, pagination: _meta.pagination }
        }
        res.render('terminals', response);
    }
};