* Bạn cần cài đặt Nodejs
* cd vào thư mục chứa source code
* Chạy cmd: npm install để cài thư viện logger.


* Để sử dụng thư viện 'Cộng 2 số tự nhiên lớn'
* Bước 1: Trong file js cần sử dụng, thực hiện 'const MyBigNumber = require("./index")' để import thư viện vào file cần dùng
* Bước 2: Khởi tạo một đối tượng của class MyBigNumber: const myBigNumber = new MyBigNumber()
* Bước 3: Sử dụng hàm sum của đối tượng trong file main.js: vd: myBigNumber.sum("1", "2")
* Bước 4: Chạy file js: sử dụng lệnh cmd: node [tênfile].js



*** Code minh họa sử dụng ***

File: main.js

const MyBigNumber = require("./index")

const myBigNumber = new MyBigNumber()
myBigNumber.sum("1", "2")



* chạy file js: node main.js


