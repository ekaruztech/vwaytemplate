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
	async entry(req, res, next) {
		const { data: { social_auth_keys } } = await APPRequest.getAccount(process.env.VOOMSWAY_API_KEY);
		console.log('social_auth_keys : ', social_auth_keys);
		res.render('trips', {
			title: 'Divine Express',
			host: process.env.HOST,
			social_auth_keys
		});
	},
	async terminals(req, res, next) {
		const page = req.query.page || 1;
		const { _meta, data } = await APPRequest.getTerminals({ page });
		if (data) {
			res.render('terminals', { title: 'Captain Hamilton', terminals: data, pagination: _meta.pagination });
		} else {
			res.render('terminals', { title: 'Captain Hamilton', terminals: [], pagination: null });
		}
	}
};