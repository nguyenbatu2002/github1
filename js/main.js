const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Hàm để ẩn tất cả tab content và xóa border
function removeBorderAndHideContent() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
    tabContentItems.forEach(content => content.classList.remove('show'));
}

// Hàm xử lý khi nhấn vào tab
function selectItem(e) {
    removeBorderAndHideContent();  // reset

    this.classList.add('tab-border'); // thêm border cho tab được chọn

    // Lấy id của content tương ứng (ví dụ: tab-1 -> tab-1-content)
    const tabId = this.id + '-content';
    const contentToShow = document.getElementById(tabId);

    // Thêm lớp "show" để hiển thị tab content tương ứng
    contentToShow.classList.add('show');
}

// Gán sự kiện click cho mỗi tab
tabItems.forEach(item => item.addEventListener('click', selectItem));
