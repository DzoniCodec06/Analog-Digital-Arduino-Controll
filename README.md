# Analog-Digital-Arduino-Controll
GUI Porgram for controlling and testing analog or digital io pins on your Arduino board.

## Resources
Program was made in **JavaScript**. <br />

For creating desktop window, I was using ***Electron.js***, and standard **Web** files such as *HTML* for template, *CSS* for design and *JavaScript* for backend.<br />

Interface between Arduino board and program was achieved with ***SerialPort.js***. Module that allows us to **send** or **read** **serial data** from PC and Arudino board. Everything was phisicly connected *via USB cable*.

## How program works
> **Warning** <br />
> Before running the program, make sure to plug Your Arduino board first!

When Program loads, You should see `Port` name in right top corner. <br />
If You don't see it, rerun the program.

## Pin selection
In this section You can select `pin` from **drop-down menu**.<br />

Then You can select pin direction: **IN** or **OUT**<br />
*For now only working selection is **OUT**.*

## Pin state
Here You can see **analog bar** and It's value.<br />
With that you can send analog data between **0** and **255**.<br />

Or You can just click on **toggle button** to toggle *HIGH* or *LOW* state.
