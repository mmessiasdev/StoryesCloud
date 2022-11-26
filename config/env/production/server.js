module.exports = ({ env }) => ({
	url: env('postgres://izienauypxaraj:96af91f0cb23ce1743334965ae89bca51d961e2c033757ae3d46b2c4da6a027f@ec2-44-205-177-160.compute-1.amazonaws.com:5432/dfqfpnsrk1depa'),
	proxy: true,
	app: {
		keys: env.array('APP_KEYS', ['8dlHjmJ65MoUOVLwrE8Si5UBfpxOEqztjaSvhfF6rhQ=', 'JgpHBsFbhkdwLYxm1MFOflggrIUbtuclHr9r/b7XBRc='])
	}
});