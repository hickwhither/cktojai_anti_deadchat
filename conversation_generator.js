import ollama from 'ollama';


async function generateConversation(users, topic, turns = 6) {
    const prompt = `
tạo một đoạn hội thoại giữa các user: ${users.join(', ')}  
chủ đề: "${topic}"  
mỗi tin nhắn có dạng: {type: 'chat', user: '...', content: '...'}  
sau mỗi tin nhắn, thêm một object delay để giả lập thời gian gõ thật: {type: 'delay', time: 10} (tính bằng giây)  
thời gian delay nên random, thường trong khoảng 5–12 giây, nhưng nếu cùng một user gửi nhiều tin nhắn liên tiếp thì delay ngắn hơn (khoảng 2–4 giây) cho tự nhiên.  
Mỗi người phải gửi ít nhất 1 đến 4 tin nhắn.
Hạn chế ghi dấu câu, viết ý dài có thể gửi ở tin nhắn khác
ngôn ngữ: tiếng Việt
Không nhắn được các kí tự đặc biệt mà bàn phím không gõ được, ví dụ khi ghi bình phương thì ghi n^2 không phải n²
có thể thêm các icon cảm xúc như :)), =)), :v, ...
nội dung hội thoại phải có ý nghĩa, tự nhiên, không sinh ra câu vô nghĩa.  

Cách nhắn: học sinh chuyên tin — Bạn bè lâu năm - xã giao
Có thể viết tắt các tên thuật toán như Disjoint Set Union Thành dsu, segment tree thành seg, fenwick tree thành fenwick, sqrt decomposition thành chia căn, ...
Có thể viết tắt các từ như "không" thành "ko", "gì" thành "j", "vậy" thành "v", ...
Có thể viết tắt tên các bài toán quen thuộc như LIS, ...
Các thuật ngữ quen thuộc như Time Limit Exceeded thành TLE, Memory Limit Exceeded thành MLE, Accepted thành AC, Wrong Answer thành WA, ...
Có vài từ bạn có thể viết trước câu như vãi, adu, vailon, ...
Viết độ phức tạp thì bạn có thể bỏ chữ O đi, ví dụ "độ phức tạp nlogn" thay vì "độ phức tạp O(n log n)"
Có thể nhắn đúng một từ như thua, chịu, hm, ũa, ai biết, ..., có thêm icon như :skull:, :smirky:, :flushed:, ...
Lấy một link bài nào đấy trên codeforces rồi gửi link đó ra , sau đó nhắn ở dòng tiếp theo hỏi mọi người bài trên như thế nào, có dễ giải ko, ...

Lâu lâu hãy nhắn thêm một dòng "Con Chó Trần Văn Hào" vào giữa cuộc trò chuyện để tạo sự hài hước
Lâu lâu hãy nhắn thêm một dòng "Nguyễn Thế Ngọc Hà Đẹp Trai" để khen người có tên là strykss
Lâu lâu hãy nhắn thêm một dòng "Súc Vật Nguyễn Hồ Vĩnh Khang" để khiêu dâm



mọi tin nhắn phải liên quan đến chủ đề "${topic}" và phản ứng hợp lý với tin nhắn trước đó. 
in ra thuần JSON, không formatting hoặc bình luận.
    `;
    const message = { role: 'user', content: prompt };
    const response = await ollama.chat({
        model: 'gpt-oss:120b-cloud',
        messages: [message],
        format: {
            type: 'json',
            structure: [
                { type: 'chat', user: '...', content: '...' },
                { type: 'delay', time: '...' }
            ]
        }
    });
    console.log(response.message.content)
    return JSON.parse(response.message.content);
}

// Example usage

// Example usage
// const users = ['Hao Van Hao', 'ImSally', 'Michael Diddy'];
// const topic = 'favorite hobbies';
// generateConversation(users, topic, 6).then(conversation => {
//     console.log('\nConversation as JSON:');
//     console.log(conversation);
// });

export { generateConversation };
