// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// m8 minimalism
// by MDN
// https://instagram/markdenardo

s0.initScreen()
const arr4 = [1, 2, 3, 4]
const arr3 = [1, 2, 3]
const arm = arr4.map(e => e * Math.random(Math.PI))

shape(arm.ease('sin'))
	.scale(arr3, arr4)
.mask(src(s0))
  .diff(src(o0)
		.scale(0.9))
	.out(o0)
render(o0)
