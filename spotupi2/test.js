<html>
  <head>
    <script>
      function sendMessage() {
        const userId = document.getElementById("userId").value;
        const bottoken = "5844351573:AAHqP-zPPEKgDG_oEItOgmz8z0OrATixr98";
        const message = "test";

        fetch(`https://api.telegram.org/bot${bottoken}/sendMessage?chat_id=${userId}&text=${message}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    </script>
  </head>
  <body>
    <input type="text" id="userId" placeholder="Enter user id">
    <button onclick="sendMessage()">Send Message</button>
  </body>
</html>
