const totalItems = 10000;
const employees = Array.from(
  { length: totalItems },
  (_, i) => `Nhân viên ${i + 1}`
);
const listEmployeeElm = document.getElementById("list-employee");

document.getElementById("showListBtn").onclick = function () {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popup").style.display = "block";
  // render();
  optimizeRender();
};

document.getElementById("closePopup").onclick = function () {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
};

function render() {
  listEmployeeElm.innerHTML = employees
    .map((emp) => `<li class="item">${emp}</li>`)
    .join("");
}

function optimizeRender() {
  let currentIndex = 0;
  const chunkSize = 20;

  function renderEmployees() {
    const chunk = employees.slice(currentIndex, currentIndex + chunkSize);
    chunk.forEach((emp) => {
      const li = document.createElement("li");
      li.className = "item";
      li.textContent = emp;
      listEmployeeElm.append(li);
    });
    currentIndex += chunk.length; // cập nhật chỉ số hiện tại

    // Nếu đã hiển thị tất cả nhân viên, xoá sự kiện cuộn
    if (currentIndex >= employees.length) {
      listEmployeeElm.removeEventListener("scroll", handleScroll);
    }
  }

  function handleScroll() {
    if (
      listEmployeeElm.scrollTop + listEmployeeElm.clientHeight >=
      listEmployeeElm.scrollHeight - 100
    ) {
      renderEmployees(); // Gọi hàm để thêm nhân viên
    }
  }

  renderEmployees();

  // Thêm sự kiện cuộn
  listEmployeeElm.addEventListener("scroll", handleScroll);
}
