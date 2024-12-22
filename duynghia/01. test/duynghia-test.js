// Lấy form và thẻ div để hiển thị kết quả
const registrationForm = document.getElementById("registrationForm");
const resultDiv = document.getElementById("result");

// Lắng nghe sự kiện 'submit' của form
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn không cho form reload trang

  // Lấy giá trị từ các trường nhập liệu
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById("country").value;

  console.log("password.length", password.length);

  // Kiểm tra dữ liệu
  if (!name || !email || !password || !gender) {
    resultDiv.innerHTML =
      '<p style="color: red;">Vui lòng điền đầy đủ thông tin!</p>';
    return;
  }

  // Hiển thị thông tin dưới form: text
  resultDiv.innerHTML = `
    <h3>Thông tin đăng ký:</h3>
    <p><strong>Họ và tên:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mật khẩu ẩn:</strong> ${"*".repeat(password.length)}</p>
    <p><strong>Mật khẩu hiện:</strong> ${password}</p>
    <p><strong>Giới tính:</strong> ${gender.value === "male" ? "Nam" : "Nữ"}</p>
    <p><strong>Quốc gia:</strong> ${
      country === "vietnam"
        ? "Việt Nam"
        : country === "usa"
        ? "Hoa Kỳ"
        : "Nhật Bản"
    }</p>
  `;
});

// Lắng nghe sự kiện 'reset' của form
registrationForm.addEventListener("reset", function () {
  resultDiv.innerHTML = ""; // Xóa nội dung hiển thị khi form được reset
});
