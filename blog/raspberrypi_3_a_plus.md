{{{
  "title": "There's a new Raspberry Pi flavor on the market",
  "tags": ["iot", "sensors", "edge", "raspberry pi", "device"],
  "description": "Let's take a look at the new flavor of Rasopberry Pi, the 3 A+",
  "author": "Alexandru Radovici",
  "category": "iot",
  "date": "11-15-2018",
  "name": "raspberrypi_3_a_plus"
}}}

We just found out that there is a new Raspberry Pi flavor in town, the model 3 A+. It is powerfull, lightweight and mobile ready.
Let's take a look at it and see what it brings to the table.

More or less this is like the *normal* Raspberry Pi that we are used to (Model B), just a bit smaller form factor, without the 
Ethernet adapter (and port) and one single USB instead of four. Probably best used for IoT or electronic projects. And don't forget, 
as it only costs $25, you save $10 a piece.

<!--more-->

![Raspberry Pi 3 Model A+](/images/blog/raspberrypi_3_a_plus/raspberrypi_model_3_a_plus.jpg)

## What's inside?

First of all, a short list of hardware specifications for the new Pi.

__SoC:__ 1.4 GHz BCM2837B0 ARM Cortex-A53 (ARM v8, 64 bit)

__Memory:__ 512 MB LoW Power DDR2 SDRAM

__Network:__ 
  * 2.4 & 5 GHz IEEE 802.11.b/g/n/ac WiFi
  * Bluetooth Low Ennergy (BLE) 4.2 

__Video:__
  * Full size HDMI
  * Composite Video Port (inside the Jack)
  * DSI Display Port (for Raspberry Pi Touch Screen)
  * CSI Camera Port (for the Raspberry Pi Camera)

__Audio:__ Stereo Output Jack Port

__Storage:__ micro SD card slot

__Connectivity:__
  * one USB 2.0 port

## The *main computer*

The SoC (or System on a Chip) is the main computer of the Raspberry Pi. It is composed of the CPU, GPU and the *main board* (if you think
in stadtard PC terms). It is actually a full computer, all embedded into a single chip.

The version Raspberry Pi 3 A+ has the same SoC as its *bigger brother*, the 3 B+ model. It is a Broadcomm BCM2837B0, that is powered by an 
Quad Core ARM Cortex-A53 64 bit microprocessor clocked at 1.4 GHz. It has more or less the same power as four PCs that you had about 10 years ago and
today's average smart phone. 

Beside the CPU, the Boardcom SoC has a powerfull VideoCore *video card* (GPU) embedded. This brings the graphics 
acceleration to the Raspberry Pi. Even though is does not compare with the normal GPU that you PC has, it still is a good option for simple
gaming, data processing and 3D graphics. We even ran self driving car simualtors using it.

## Memory Stuff

While processing power if important, data that is processed needs to be stored. This is where the 512 MB of Low Power DDR2 RAM memory comes in handy.
It is half the size of the memory that we cand find in the *regular* (3B+) Raspberry Pi. This can have a little of a downside when it comes to
running GUI (graphical user interface) applications. While most of the applications should run fine, most users will probably feel a slowdown 
when it comes to loading and switching between applications. If you plan on using the Raspberry Pi in such a way, we strongly suggest you 
pay the additional $10 for the *full memory* of the B model.

We definetly do not recommand this model to be used as a normal computer, with a screen and mouse.

When it comes to storage, this Raspberry Pi has the same micro SD card that you're so used to. This is no different from any other model (well, if you
still own an antique version 1, that might not be entierly true).

## Reaching out to the world

When it comes to connectivity, the 3A+ model is to be considered lightweight and *mobile*. It does not feature an Ethernet (cable) network, so 
you won't be able to plug it in to your router, but is has the 2.4 and 5 GHz WiFi that allows it to talk to the world. It has the same WiFi network
as its *bigger brother*. 

This model is also IoT ready, featuring a Bluetooth Low Energy (BLE) 4.2 chip, that makes able to talk to all sorts of sensors that you might have.
Most probably if you have some smart device in your house, it is using BLE.

## Music and Video

Same as all the other *big models* (we do not count the *Zero* here), this one has a full size HDMI port so you can use your TV as a screen.
Audio is supplied either by the HDMI or by a Stereo Audio Jack. Funny thing, this jack makes it possible to connect older TVs to the PI using
an adapter cable (Jack to Video Composite).

Like all the models of Pis, of course you can connect that Raspberry Pi Touch Screen on the special DSI port and the Pi Camera of the CSI port.

## What about extensions?

Event though it's lightweight, the model 3A+ features one USB 2.0 port (and of course you can add a USB hub to it) and the standard Raspberry Pi
40 GPIO headers. This makes it able to wear any HAT (Hardware Attached Device, it's like an Arduino Shield) that you might have.
Interesting HATs might be the Sensor HAT, 3G, LTE, NBIoT, etc.

## So ... how should we bake it?

The Raspberry Pi 3 A+ is more or less the same as the *standard Raspberry Pi* (Model B) one. It has a smaller form factor, but based on the
[benchmarks](https://www.raspberrypi.org/magpi/raspberry-pi-specs-benchmarks/) performed by [Mag Pi](https://www.raspberrypi.org/magpi) magazine
it has almost (and this means very little less than) the same power. The main difference is the half of the RAM memory, the absence of 
the Ethernet adapter and only one USB port.

So what should we be using it for? Most probably if you are using the Raspberry Pi as a computer, with screen and mouse, this one is not for you.
If you are thinking of IoT projects, this is your new Edge Device. It is the gateway that gathers data from your sensors (BLE, WiFi, etc.), 
processes data locally, connects to the Internet (via WiFi or some 3G/LTE/NBIoT HAT) and leverages the power of the cloud and big data.

If you're thinking of IoT projects, this new Pi is more or less a lightweight version of the standard Pi, any IoT platform, like Wyliodrin, 
is ready to run with it. 

No matter what IoT platform you might want to use, the Wyliodrin Team is always ready to help you *bake your Pi*.









