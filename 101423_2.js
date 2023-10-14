// diff feedback noise
// by MDN (code assist from GEIKHA)
// IG: @markdenardo

noise(1, 1, 1)
	.repeat([1, 2, 3].fast(), [1, 2, 3, 4].fast())
	.mask(noise())
	.scrollY(.15)
	.diff(src(o0)
		.scale(.97))
	.out(o0)
