# compoents
- svg-环形进度条

<html>
<img src="images/circle@2x.png" width="100" height="100"/>
</html>

```
<div id="circleProgress"></div>

var circle = new Circle();
circle.draw('#circleProgress', {
    width: 100,
    height: 100,
    lineWidth: 10,
    lineColor: "#159963",
    round: "round",
    percent: 0.6
})
```
