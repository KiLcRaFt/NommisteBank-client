import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session';
import sessionFileStore from 'session-file-store'

const { json } = require('body-parser');
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const FileStore = new sessionFileStore(session);

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		json(),
		session({
			secret: 'iiiirrrr', // удалить нужно
			resave: true,
			saveUninitialized: true,
			cookie: {
				maxAge: 31536000,
			},
			store: new FileStore({
				path: '.sessions'
			})
		}),
		sirv('state', { dev }),
		sapper.middleware({
			session: req => ({
				user: req.session && req.session.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
