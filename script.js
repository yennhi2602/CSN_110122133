function navigateToPage() {
    window.location.href = "trangchu.html"; 
}

document.querySelectorAll('.news-item a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); 
      window.location.href = link.href; 
    });
  });
  function showDetails(eventId) {
   
    const details = document.querySelectorAll('.detail-content');
    details.forEach(detail => {
        detail.classList.remove('active');
    });

    const activeDetail = document.getElementById(eventId);
    activeDetail.classList.add('active');
}



const data = [
    { title: "hội kiến trúc", url: "chihoi8.html" },
    { title: "văn học", url: "chihoi1.html" },
    { title: "âm nhạc", url: "chihoi3.html" },
    { title: "tổ chức", url: "tochuc.html" },
    { title: "điều lệ", url: "dieule.html" },
    { title: "danh sách hội viên", url: "dshoivien.html" },
    { title: "giới thiệu chung", url: "gioithieuchung.html" },
    { title: "hội thảo", url: "tintuc4.html" },
    { title: "đại hội", url: "hoatdong1.html" },
    { title: "văn nghệ", url: "chi hoi7.html" },
    { title: "tập huấn", url: "tintuc8.html" },
    { title: "hội thi", url: "hoatdong4.html" }
];

function searchFunction() {
    const input = document.getElementById("search-input").value.toLowerCase();  // Lấy giá trị tìm kiếm và chuyển về chữ thường
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";  // Xóa kết quả cũ khi người dùng nhập mới

    // Lọc các phần tử trong mảng data khớp với giá trị tìm kiếm
    const filteredData = data.filter(item => item.title.toLowerCase().includes(input));

    // Nếu có kết quả tìm kiếm
    if (filteredData.length > 0) {
        resultsDiv.style.display = "block";  // Hiển thị phần kết quả
        filteredData.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");

            const resultLink = document.createElement("a");
            resultLink.href = item.url;
            resultLink.textContent = item.title;
            resultItem.appendChild(resultLink);

            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.style.display = "none";  // Ẩn phần kết quả nếu không có kết quả tìm kiếm
    }
}

// Lắng nghe sự kiện submit trên form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn hành động gửi mặc định
    
    // Hiển thị thông báo cảm ơn
    document.getElementById('thankYouMessage').style.display = 'block';
    
    // Ẩn biểu mẫu sau khi gửi
    document.getElementById('contactForm').style.display = 'none';
});