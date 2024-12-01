document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender =
      document.querySelector('input[name="gender"]:checked')?.value ||
      "Chưa chọn";
    const country = document.getElementById("country").value;

    // Hiển thị thông tin trong console
    console.log("Thông tin người dùng:");
    console.log("Họ và tên:", name);
    console.log("Email:", email);
    console.log("Giới tính:", gender);
    console.log("Quốc gia:", country);

    alert(`Cảm ơn bạn đã đăng ký, ${name}!`);
  });
