document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn không cho form gửi đi

    // Lấy giá trị của input
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Reset thông báo lỗi
    errorMessage.innerText = "";

    // Biến cờ kiểm tra hợp lệ
    let isValid = true;

    // Kiểm tra input có bị bỏ trống không
    if (!username || !password) {
        errorMessage.innerText = "Vui lòng nhập đầy đủ thông tin";
        isValid = false;
    }

    // Nếu hợp lệ, thực hiện hành động tiếp theo
    if (isValid) {
        errorMessage.style.color = "green";
        errorMessage.innerText = "Đăng nhập thành công!";
        // Thêm hành động khác sau khi login thành công (ví dụ: chuyển trang)
    }
});

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
