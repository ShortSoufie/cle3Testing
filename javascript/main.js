window.addEventListener('load', init)

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const scanButton = document.getElementById("scanButton");
    const messageElement = document.getElementById("message");

    scanButton.addEventListener("click", function() {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: video
            },
            decoder: {
                readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader"]
            }
        }, function(err) {
            if (err) {
                console.error("Error initializing Quagga:", err);
                displayMessage("Error initializing Quagga: " + err);
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected(function(result) {
            alert("QR Code scanned: " + result.codeResult.code);
            Quagga.stop();
        });
    });

    function displayMessage(msg) {
        messageElement.textContent = msg; // Display message on screen
        messageElement.style.display = "block"; // Show message element
    }
});




function init () {
    const startRecordingBtn = document.querySelector("#startRecording")
    startRecordingBtn.addEventListener("click", startRecordingPop)
}

const mainSec = document.querySelector("main")

function startRecordingPop (click) {
    const startRecDiv = document.createElement("div")
    const stopRecordingBtn = document.createElement("button")
    stopRecordingBtn.innerText = "Stop met opnemen"
    stopRecordingBtn.addEventListener("click", stopRecordingPop)
    startRecDiv.appendChild(stopRecordingBtn)
    mainSec.appendChild(startRecDiv)
}
function stopRecordingPop (click) {

}
