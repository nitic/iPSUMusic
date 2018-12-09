# iPSUMusic

* [https://github.com/react-navigation/react-navigation](https://github.com/react-navigation/react-navigation)
* [https://github.com/typicode/json-server](https://github.com/typicode/json-server)
* slide https://bit.ly/2zM9Yh1
* [https://nativebase.io] native base (mobile ui for native)

# Workshop Step

1. git clone https://github.com/nitic/iPSUMusic
2. cd iPSUMusic
3. npm install
4. npm i -g json-server
5. git checkout step-1

#### (เปิด cmd อีกหนึ่งตัว)
6. json-server itunes-music.json

#### (ข้อ 7-8 เฉพาะ Android เท่านั้น)
7. cd c:\User\{Username}\AppData\Local\Android\Sdl\platform-tools
8. adb reverse tcp:3000 tcp:3000

9. react-native run-android หรือ react-native run-ios
