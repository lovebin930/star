let cnt = 999;

setInterval(function(){
    if(cnt < 4){
        cnt++;
    }

    else{
        cnt = 0;
    }

    $('.star ul li').eq(cnt).fadeIn(100);
    $('.star ul li').eq(cnt).siblings().fadeOut(500);
}, 2000)

const boxx = document.querySelector(".boxxxxx");
const boxx_num = [];
boxx_num[0] = [7,4,3,2,5,1,8,6];
boxx_num[1] = [3,1,1,4,2,4,3,2]; // 3 1 1 4 2 4 3 2
                                // 인문 1 // 자연 2 // 예체능 3 // 교육 4 
console.log(boxx_num);

for(i = 1; i <= 4; i++) {
    boxx.innerHTML +=`
    <div class="boxs box${i}">
        <ul>
            <li class="b${i*2-1} b-content"><a href="#"><img src="./${boxx_num[0][i*2-2]}.png" data-bid="${boxx_num[1][i*2-2]}"></a></li>
            <li class="b${i*2} b-content"><a href="#"><img src="./${boxx_num[0][i*2-1]}.png" data-bid="${boxx_num[1][i*2-1]}"></a></li>
        </ul>
    </div>
    `;
}

boxx.innerHTML += `
    <div class="close">
        <button><a href="main-page.html"><img src="images/return.png" alt="#"></a></button>
    </div>
`;

const modal = document.querySelector(".modal");

for(i = 1; i <= 4; i++) {
    modal.innerHTML += `
    <div class="modal${i} modals">
        <img src="./images/r${i}-1.png" alt="r${i}1" class="r11">
        <img src="./images/star-${i}.png" alt="star${i}1" class="star11">
        <img src="./images/r${i}-2.png" alt="r${i}2" class="r11">
        <img src="./images/r${i}-3.png" alt="r${i}3" class="r11">
        <img src="./images/r${i}-4.png" alt="r${i}4" class="r11">
        <button class="close-modal">X</button>
    </div>
    `
};

document.addEventListener("click", e => {
    if(e.target.classList.contains("close-modal")) {
        let modals = document.querySelectorAll(".modals");
        modals.forEach(e => {
            e.classList.remove("see");
        })
    }
    else if(e.target.dataset.bid != "") {
        let bid = e.target.dataset.bid;
        let place = document.querySelector(`.modal${bid}`);
        place.classList.add("see");
    }
})
