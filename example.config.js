const botConfigs = [
    {
        name: "Hao Van Hao",
        token: "...",
    },
    {
        name: "Vinh Khang",
        token: "...",
    },
    {
        name: "Michael Diddy",
        token: "...",
    },
    {
        name: "Fan",
        token: "...",
    }
];

const CHANNEL_ID = "1418862671461089484";
const CHANNEL_ID_TESTBOT = "1419358816876625980"; // bot channel

// 6->8 * 60 * 60 = 6h-8h
const randomDelay = () => Math.floor(Math.random() * (8 - 5 + 1) + 6) * 60;

const topics = [
    "Các Thuật Toán Trong Thi Đấu Lập Trình",
    "Những Kỹ Thuật Lập Trình Hiệu Quả",
    "Cách Giải Quyết Vấn Đề Thuật Toán Phức Tạp",
    "Chiến Lược Tối Ưu Hóa Mã Nguồn",
    "Phân Tích Độ Phức Tạp Thuật Toán",
    "Các Cấu Trúc Dữ Liệu Thông Dụng",
    "Các bài tập hay một bài nào đó về CPP",
    "Các Bài toán về LCA",
    "các bài toán về đồ thị như disjktra, floyd, prim, kruskal",
    "các bài toán về quy hoạch động",
    "Các công thức toán học",
    "Các Thuật Toán Tìm Kiếm và Sắp Xếp",
    "Các Thuật Toán Đệ Quy và Quay Lui",
    "Các Thuật Toán Tham Lam (Greedy Algorithms)",
    "Các Thuật Toán Chia Để Trị (Divide and Conquer)",
    "Các Thuật Toán Trực Quan Hóa Dữ Liệu",
    "Các bài toán về Link Cut và Biconnected Component",
    "Các Bài Toán về cây",
    "Các bài toán về li chao tree",
    "Các bài tioasn về segment tree, fenwick tree",

    "Chuyện tình giữa 2 người con trai",
    "Chuyện tình giữa 2 người con gái",
    "Chuyện tình giữa 1 con trai và 1 con gái",
    "Chuyện tình học trò",
    "Sự bất bình đẳng về người da đen",
];

export { botConfigs , CHANNEL_ID, CHANNEL_ID_TESTBOT, randomDelay, topics};