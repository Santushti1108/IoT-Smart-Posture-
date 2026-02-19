1. Introduction : The IOT smart posture is a hardware–software integrated prototype
designed to monitor sitting posture. The system aims to promote healthy sitting habits and
reduce long – term health risks such as back pain and posture – related issues. The solution
uses an ESP32 microcontroller to collect data from flex sensor and analyse posture patterns
in real time.
2. System Architecture :
Hardware Components :
ESP32 Microcontroller
Flex Sensor
Bread Board
Connecting Wires
Resistors (Voltage Divider Circuit – typically 10kΩ)
Software Components :
Arduino IDE
Backend :Node.js
API Testing : Postman
Database : MongoDB
Frontend Dashboard : React.js
3. Working Mechanism :
Step 1: Sensor Placemen : A flexible sensor is attached near the upper back, close to the
shoulder and neck area.
When a person sits straight → the sensor remains in normal state.
When a person bends forward excessively → the sensor bends and its resistance changes.
Step 2: Sensor Data Reading: The flexible sensor works on the principle of variable
resistance. When the person bent, the resistance increases/decreases (depending on type)
ESP32 reads this change as an analog voltage value.
Step 3: Threshold Logic: A predefined threshold value is programmed in the ESP32.
The real-time sensor value is continuously compared with the threshold. If the sensor value
exceeds the threshold → System classifies posture as “Bad Posture” on the frontend
dashboard.
4. Full Stack Integration :
Sensor data is transmitted from ESP32 to backend APIs (Node.js).
Data is stored in MongoDB.
The frontend dashboard built using React.js displays posture status in real time.
Postman was used for API testing and debugging.
