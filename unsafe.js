window.addEvent("domready", init);

var data = {
  foo: "bar"
};

function init()
{
  window.addEventListener("message", function(evt) {
    if(event.origin !== "http://localhost")
    {
      console.log("Message from unexpected origin", event.origin);
    }
    else
    {
      $("message").set("value", JSON.parse(evt.data).foo);
    }
  }, false);

  $("unsafe-button").addEvent("click", function(evt) {
    window.parent.postMessage(JSON.stringify(data), "http://localhost/~davidnolen/proxy-proxy/index.html");
  });
}