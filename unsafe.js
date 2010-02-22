window.addEvent("domready", init);

var data = {
  foo: "bar"
};

function init()
{
  console.log("init", window.parent);
  $("debug").set("value", window.parent);
  $("unsafe-button").addEvent("click", function(evt) {
    window.parent.postMessage(JSON.encode(data), "http://localhost/~davidnolen/proxy-proxy/index.html");
  });
}