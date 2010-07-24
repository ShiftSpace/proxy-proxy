window.addEvent("domready", init);

var data = {
  foo: "bar"
};

function init()
{
  console.log("init");
  window.addEventListener("message", function(evt) {
    if(event.origin !== "http://127.0.0.1")
    {
      console.log("Message from unexpected origin", event.origin);
    }
    else
    {
      $("message").set("value", JSON.parse(evt.data).foo);
    }
  }, false);

  $("safe-button").addEvent("click", function(evt) {
    console.log("sending");
    $("unsafe").contentWindow.postMessage(JSON.stringify(data), "http://127.0.0.1/~davidnolen/proxy-proxy/unsafe.html");
  });
}