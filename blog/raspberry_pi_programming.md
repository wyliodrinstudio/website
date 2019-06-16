{{{
  "title": "Programming Languages for the Raspberry Pi",
  "tags": ["iot", "raspberry pi", "programming", "blockly", "scratch"],
  "description": "A short guide on programming languages for the Raspberry Pi",
  "author": "Ioana Culic",
  "category": "iot",
  "date": "02-12-2019",
  "name": "raspberry_programming"
}}}

## Raspberry Pi Programming
In 2012 the Raspberry Pi Foundation released the first Raspberry Pi board. The foundation designed the device as an affordable computer that would serve as an accessible platform for teaching programming. Ever since, the Raspberry Pi has gained a lot of popularity and people everywhere use it for education, prototyping and even as part of industrial systems.

Although the Raspberry Pi is similar to a computer having reduced capabilities, it also has certain characteristics that make it stand out. One of the board’s main advantages that people make use of is the pins set that it exposes. The pins can be easily connected to simple peripherals, allowing people to build applications such as smart appliances or other IoT solutions.

When it comes to building a Raspberry Pi application, one of the first questions that come to one’s mind is what programming language to use and the simple answer would be “it depends on what you want to program”. Indeed, depending on the applications that you want to build, there are several programming languages to choose from.

<!--more-->

Further on, we will describe some of the 5 most common approaches when it comes to programming the raspberry pi.

<h2>1. Python</h2>

Python is a programming language that is extensively used in education. As the Raspberry Pi was designed for educational purposes, it is of no surprise that Python is one of the most popular choices as a programming language. What is more, the Raspberry Pi Foundation promotes Python as the main programming language for the Raspberry Pi. One of the main advantages of Python is that it emphasizes indentation, which gets students accustomed to writing clear code. Another important advantage of Python is the result of its extensive use: a large number of available libraries.

For programming the Raspberry Pi, we consider Python is a good choice for building educational applications that control some pins, retrieve data from a web service or include the Pygame module to build some simple games. In addition, we recommend Python for prototyping purposes, in building applications such as smart home systems, smart plants or others. This is because Python enables fast programming and with a wide array of libraries at hand, controlling the Raspberry Pi pins is not a difficult task.

![Python](/images/blog/raspberry_programming/python-studio.png)

For pin control, we recommend you include the <a href="http://wiringpi.com" target="blank">wiringpi</a> library. It is a Python library specially designed to run on the Raspberry Pi and it allows GPIO control using Arduino-like functions. This makes it easy to turn on LEDs and read buttons.

<h2>2. Node.js</h2>

Node.js is another option we strongly recommend for programming the Raspberry Pi. Node.js is a platform built for running server-side JavaScript applications. This way web developers can fully develop applications using only JavaScript. 

Since many Raspberry Pi applications involve a visual interface accessible remotely, most of them are developed as a web server that runs on the Raspberry Pi and which serves a visual interface on any computer or mobile device connected to the network. Therefore, Node.js is an environment we recommend for programming the Raspberry Pi when the application you aim to develop involves a UI.  On the other hand, Node.js can also be used for simple applications, that do not involve a web server. So if you are familiar with JavaScript, Node.js might be the best option for you.
 
Similarly to Python, Node.js is a popular programming language and a plethora of libraries and frameworks have been developed around it. The most important framework to be taken into account is express. Express is the standard framework for building web server using Node.js. It offers a simple API that allows developers to easily create a basic backend for a web application.

Other libraries to be considered are the ones enabling the GPIO interaction. For this, there are several options to choose from. Some of the most used libraries are <a href="https://github.com/fivdi/onoff" target="blank">onoff</a> and <a href="https://github.com/JamesBarwell/rpi-gpio.js" target="blank">rpi-gpio</a>. 

<h2>3. Visual Programming</h2>

Since the Raspberry Pi has become more and more popular, the number of people willing to build their own connected system around it has increased to such an extent that even non-technical persons have acquired such a device and are tinkering with it. As a result, one of the main options that we recommend for programming the Raspberry Pi is visual languages, with the two main choices being Scratch and Blocky.

Both Scratch and Blockly are programming languages based on visual blocks that generate a Python or other programming language application when interconnected. While Scratch was developed by MIT together with a web interface where children can build stories and games by using the visual elements, Blockly is a Google’s project whose main purpose is to be integrated into third-party solutions. However, both are open-source projects that can be extended and integrated into other systems. Therefore, both can be used to program the Raspberry Pi.

![Visual Programming](/images/blog/raspberry_programming/vp-studio.png)

For programming the Raspberry Pi using Scratch, you need to connect the device to a keyboard, a mouse and a display and install the environment. Then you can create the applications directly on the Raspberry Pi. 

For Blockly, you can use <a href="https://wyliodrin.com/iot-prototyping" target="blank">Wyliodrin STUDIO</a> as a programming environment for the Raspberry Pi. For this, you need to download the IDE on a computer that is connected to the same network as the Raspberry Pi. Then you will build the applications on your computer and deploy them on the device to run. In this case, you only need to connect the Raspberry Pi to the network, no display or keyboard required.
