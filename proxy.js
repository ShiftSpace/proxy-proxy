window.addEvent("domready", init);

function init()
{
  console.log("init");
  window.addEvent("receiveMessage", function(evt) {
    if(event.origin !== "http://127.0.0.1")
    {
      console.log("Message from unexpected origin", event.origin);
    }
    else
    {
      $("message").set("value", JSON.decode(evt.data).foo);
    }
  });
}