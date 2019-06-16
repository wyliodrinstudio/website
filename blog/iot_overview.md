{{{
  "title": "Our IoT overview",
  "tags": ["iot", "raspberry pi", "web", "server", "edge computing", "fog computing", "arduino", "sensors"],
  "description": "A short overview on the IoT field from Wyliodrin's point of view.",
  "author": "Alexandru Radovici",
  "category": "iot",
  "date": "8-09-2018",
  "name": "iot_overview"
}}}

Welcome to our new blog. After a few years in the IoT business, we decided we want share with you things that we do or that we find interesting in the field. To begin with, here is our view over the IoT field. We expressed it in a [video](https://www.youtube.com/watch?v=G4-CtKkrOmc) on youtube, but for those of you who want a quick read about it, here it is.

The Internet of Things represents a concept where several devices (things) talk to each other using a network (usually the Internet). This allows devices to take smarter actions based on data from received and sent. Besides direct communication, cloud processing power is leveraged to take actions that require a greater processing power.

Let's take sensors as an example, they collect data and send it to a processing (also called embedded) device, which then sends it out to the cloud. The problem here is that the data stored in the cloud is sometimes not useful. Think of a weather monitoring station that would send the measured temperature to the cloud every minute. As there is no way to have different values every minute, it would be much more efficient to send only different measurements to the cloud. This is why we can conclude that there is not enough local processing happening before data is saved in the cloud. 

The ideal scenario towards which the Internet of Things is headed, would be to have a device interpret data locally, check for abnormalities or search for relevant segments and upload only this information to the cloud. This concept is called either edge, according to Intel, or fog computing as stated by Cisco, implying what happens before the cloud.
 
<!-- The IoT is involved in medicine, agriculture or transportation due to sensors and cloud storage. -->

<!--more-->

A basic Internet of Things system consists of the following components: 

![IoT Stack](/images/blog/iot_overview/iot_stack.png)

## Sensors
They scan the environment and transform the mesurement to digital data, but they merely do any processing. On the bright side, they don't consume much power and can live on batteries for a long time. Sensors are present in everyday life more than you would expect. They improve industry, agriculture, homes, transportation or smart phones for example. They are tools which help monitor the environment by collecting data about it. 

![Sensors](/images/blog/iot_overview/iot_sensors.jpg)

## Local processing and storage devices
Local processing devices are the second and third level in the IoT stack. At this point, data is locally stored and processed, ideally not sent forwards unless relevant.
This part is explained in detail in the // hardware// section, as said devices are nothing more than microcontrollers and embeded boards, which handle the data they receive from the sensors.  

## Network and Internet
Here we mention the hardware which connects to the previously described devices, pulls out data and sends it to the cloud. There are several protocols used at this level, many of them designed specially for IoT systems. Here we can mentions: CoAP, MQTT ( less secure and designed for machine to machine communication), HTTP (web protocol) and XMPP which functions as a chat.

## Cloud 
In the cloud, which comes next, data is collected and the main goal is to reach the point of making predictions based on the stored information. The cloud has as its main advantage the high processing capability which allows for large amounts of data to be interpreted. 

![Cloud](/images/blog/iot_overview/cloud.jpg)

## Hardware 

An important subject concerning the IoT is open hardware. The designers of such hardware publish the schematics which, when this current started, was a real boost for the IoT.

### Microcontrollers 

Microcontrollers were the first one to appear as an option for developers. They are small computing devices, easily connectable to peripherals such as sensors. 
These simple devices are capable of running only one piece of software, which we call firmware. They do not run an operating system, only the firmware. 
The development tools were, however, difficult to use and made these device inaccessible to hobyists. Since there are no concurrent processes. the result is that you can estimate what program sequence gets executed at a certain time. This is what we call a real time application. Program written to the microcontrollers remain there until they are replaced with another program. Even when powered off, the software is stored and when powered back on the devices execute the same firmware.

The main disadvantage of such devices is that they are low in processing and storage capabilities. This is why they are not suitable for advanced operations such as implementing network protocols.

At the beginning, these devices were not accessible to the large public as the development tools were very difficult to use. The first easy to use microcontroller was Arduino. The innovation that Arduino brought is not in the hardware, but in the software coming with the hardware. Arduino was the first device to come with an intuitive IDE that would allow people to write simple applications and deploy them on the device with one hit of a button.


![Arduino](/images/blog/iot_overview/arduino_preview.jpg)

### Computers 
On the other side, we have embedded devices, which are basically computers. One of the most common such devices is the Raspberry Pi. The Raspberry Pi runs an Operating System, contrary to the Arduino. That means that you can run multiple applications on it which also implies that the applications are not real time.
The Raspberry Pi or other similar devices are basically small computers, most of them run Linux but they can also run other operating systems and they have a full network system.

The drawback of these devices is that they usually lack in hardware capabilities, such as the peripherals that they support.

![Raspberry Pi](/images/blog/iot_overview/raspberrypi_preview.jpg)

By taking into account the advantages and disadvantages of microcontrollers and embedded devices, we reached the conclusion that the two should be looked upon as complemetary entities. While the microcontrollers are the best to interact with sensors and actuators, the embedded devices are the ones to interact with the cloud. Therefore, we suggest building systems composed of both micoctrontollers and embedded devices and have the two interact with each other.