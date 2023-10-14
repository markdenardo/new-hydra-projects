// Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
const f = () => osc(1, 1, 0)
    .pixelate()
    .mask(noise()
        .pixelate()
        .scale(() => Math.PI / time))
    .mask(osc(() => Math.PI, time, 1))
​
f()
    .add(f()
        .scale(time, 1)
        .modulate(o0))
    .mask(f()
        .scale())
    .out(o0)
render(o0)
>>
