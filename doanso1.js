function doanSo() {
    var soNgauNhien =   Math.floor(Math.random() * 2);
    
    while (true) {
        try {
            var soNguoiDung = parseInt(prompt("Hãy đoán số (1 đến 10):"));
            if (soNguoiDung === soNgauNhien) {
                alert("Chúc mừng! Bạn đã đoán đúng số.");
                break;
            } else {
                alert("Số bạn đoán không đúng. Hãy thử lại.");
            }
        } catch (error) {
            alert("Vui lòng nhập một số nguyên (0 hoặc 1).");
        }
    }
}