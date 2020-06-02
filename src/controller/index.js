export const AppController = {
	index(req, res, next) {
		return res.render('index', { title: 'Efext' });
	}
};