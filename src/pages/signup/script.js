document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn không cho form gửi đi

    // Lấy các giá trị từ input
    const username = document.getElementById('username-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Reset thông báo lỗi
    errorMessage.innerText = "";

    // Biến cờ kiểm tra hợp lệ
    let isValid = true;

    // Kiểm tra bỏ trống hoặc email không hợp lệ
    if (!username || !email || !password) {
        errorMessage.innerText = "Vui lòng điền đầy đủ thông tin.";
        isValid = false;
    } else if (!validateEmail(email)) {
        errorMessage.innerText = "Email không hợp lệ.";
        isValid = false;
    }

    // Nếu hợp lệ, thực thi hành động tiếp theo
    if (isValid) {
        errorMessage.style.color = "green";
        errorMessage.innerText = "Đăng ký thành công!";
    }
  
});

// Hàm kiểm tra định dạng email hợp lệ
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Xóa thông báo lỗi khi input được focus
const inputs = document.querySelectorAll('.input-box input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        document.getElementById('error-message').innerText = ""; // Xóa thông báo lỗi
    });

    // Hiệu ứng class "has-content" khi người dùng nhập
    input.addEventListener('input', () => {
        if (input.value.trim() !== "") {
            input.classList.add('has-content');
        } else {
            input.classList.remove('has-content');
        }
    });
});


