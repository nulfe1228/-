const imgList = document.getElementById('lookbook_list')


// 이미지 리스트
for (let i = 0; i < 65; i++) {
    // Image 객체 생성
    const img = document.createElement('img');
    // src 속성에 파일 주소 지정
    img.src = `images/model-${i+1}.jpg`;
    // 요소에 삽입
    imgList.appendChild(img);
}



// 페이지 이동
function shopPage(){
    window.location.href = 'https://www.michaelkors.com/michael-kors-collection.html'
}

function lastSeasonPage(){
    window.location.href = 'https://www.michaelkors-collection.com/runway/ss24-michael-kors-collection'
}
