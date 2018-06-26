# Manager Order Mobile
# Yêu cầu để chạy project
1. Bạn cần có App Web Manager Order đã thiết lập và chạy ổn, bạn có thể theo dõi đường link này để tải và thiết lập đầy đủ như file ReadMe
https://github.com/TranDuyPhong/app-web-manager-order

# Chạy project
Bạn tiến hành tải project bằng 2 cách sau
- Sử dụng git command, bạn có thể tại git bằng link https://git-scm.com/downloads, sau khi tải và cài đặt xong, bạn ra ngoài màn hình desktop, chuột phải vào click vào Git Bash Here, git sẽ mở ra một command line, 
bạn copy https://github.com/TranDuyPhong/app-mobile-manager-order.git vào command line và ấn enter để git tiến hành clone project về
- Tải file zip, vào link https://github.com/TranDuyPhong/app-mobile-manager-order/, tìm nút có chữ Clone or Download, click vào bạn sẽ thấy chữ Download ZIP và tiến hành tải file zip

Bạn có thể mở project bằng trình soạn thảo Visual Studio Code hoặc Sublime Text, có thể tải 2 trình soản thạo này với link dưới
- Visual Studio Code https://code.visualstudio.com/download
- Sublime Text https://www.sublimetext.com/3

Tiếp tục tiến hành theo các bước sau
1. Chắc chắn đã chạy thành công Manager Order Web trong yêu cầu bước 1
2. Mở command line, nếu bạn đã tải git command thì chỉ cần chuột phải vào thư mục chứa project, 
nếu dùng command của window thì bạn mở command của window lên và copy đường dẫn chứa project và dán vào command window và ấn enter
3. Gõ dòng lệnh npm install ( Lệnh này để tải tất cả những mobule cần thiết của project )
4. Sau khi lệnh npm install hoàn thành tiến trình tải những mobule cần thiết, tiếp tục bạn gõ dòng lệnh react-native run-android đối với hệ máy android, 
react-native run-ios đối với hệ máy ios vào command line 
5. Chờ react-native build vào máy thật hoặc máy ảo của bạn, cách chạy máy ảo hay máy thật thì bạn vui lòng tìm hướng dẫn ở google
6. Test thử phần mềm
