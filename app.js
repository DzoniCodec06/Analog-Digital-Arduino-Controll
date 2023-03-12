const { SerialPort, ReadlineParser } = require("serialport");

const analogBar = document.getElementById("analog-value");
const portPath = document.getElementById("port-path");
const valueNumber = document.getElementById("val");

const selectedPin = document.getElementById("pin-num");
const digitalState = document.getElementById("digital");
const dgState = document.getElementById("digital-st");

const ARDUINO_VENDOR_ID = 2341;
const CH340_VENDOER_ID = "1a86";

const BAUD_RATE = 9600;

window.onload = () => {
    valueNumber.innerText = analogBar.value;
}

SerialPort.list().then(boards => {
    if (boards[0].vendorId == ARDUINO_VENDOR_ID ||  boards[0].vendorId == CH340_VENDOER_ID) {
        const port = new SerialPort({
            path: boards[0].path,
            baudRate: BAUD_RATE,
            stopBits: 1,
            parity: "none",
            dataBits: 8,
            autoOpen: true
        });

        const parser = new ReadlineParser({ delimiter: "\r\n" });
        port.pipe(parser);

        console.log(`Port is open: ${port.path} at baud rate of: ${port.baudRate}.`);

        portPath.innerText = port.path;

        analogBar.oninput = () => {
            valueNumber.innerText = analogBar.value;
            port.write(`a ${analogBar.value}\n`);
        }

        selectedPin.oninput = () => {
            port.write(`p ${selectedPin.value}\n`);
        }

        digitalState.addEventListener("click", () => {
            console.log(`d ${digitalState.checked ? 1 : 0}`);
            port.write(`d ${digitalState.checked ? 1 : 0}\n`);
            dgState.innerHTML = `${digitalState.checked ? "ON" : "OFF"}`;
        })

        parser.on("data", data => {
            console.log(data);
        });

    }    
});