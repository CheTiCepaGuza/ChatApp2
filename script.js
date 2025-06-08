    const msg = document.getElementById("msg");
    const btnSend = document.getElementById("send");
    const cbx = document.getElementById("chatBox");

    const myWebSocket = new WebSocket("ws://localhost:4600");

    btnSend.addEventListener("click", sendMessage);

    msg.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
    });

    function sendMessage() {
    const text = msg.value.trim();
    if (text !== "") {
        myWebSocket.send(text);
        cbx.innerHTML += '<div class="client">' + text + '</div>';
        msg.value = "";
        }

    }

        myWebSocket.addEventListener("message", (serverMsg) =>{

            if(serverMsg.data.length <= 0){



            }
            else{
                cbx.innerHTML += '<div class = "server">' + serverMsg.data + '</div>';
            }

        });


