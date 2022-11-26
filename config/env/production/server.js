module.exports = ({ env }) => ({
	url: env('APP_URL'),
	proxy: true,
	app: {
		keys: env.array('APP_KEYS', ['8dlHjmJ65MoUOVLwrE8Si5UBfpxOEqztjaSvhfF6rhQ=', 'JgpHBsFbhkdwLYxm1MFOflggrIUbtuclHr9r/b7XBRc='])
	}
});