const main = {
  init: function () {
    // item을 찾아서 item을 클릭 했을 때 뒤집어지면서 상세정보 보여주기
    const $item = document.querySelectorAll(".item");
    const $scroll = document.querySelector(".scoll-bar-top");
    $item.forEach((value, i) => {
      value.addEventListener("click", (e) => {
        value.classList.toggle("clickitem");
      });
    });
    window.addEventListener("scroll", () => {
      if (document.querySelector("html").scrollTop > 300) {
        $scroll.style.display = "block";
      } else {
        $scroll.style.display = "none";
      }
      $scroll.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      });
    });
  },
};

main.init();
