function loading() {
    const mask = document.createElement("div");
    mask.style.cssText =
        "position:absolute; z-index:9; display:block; left:0; top:0;";

    // 화면 넓이, 높이 설정
    mask.style.width = "100vw";
    mask.style.height = "100vh";

    // 화면 투명도 설정
    mask.style.opacity = "0.3";

    // 화면 배경색 설정
    mask.style.backgroundColor = "#000000";

    const img = document.createElement("img");
    img.setAttribute("src", "images/loading.gif");
    img.style.cssText = "position: relative; display: block; margin: 0px auto;";

    // 이미지 크기 설정
    img.style.width = "50px";
    img.style.height = "50px";

    const loadingImg = document.createElement("div");
    loadingImg.setAttribute("id", "loadingImg");
    loadingImg.style.cssText =
        "position:absolute; z-index:9; display:block; left:50%; top:50%;";

    // 이미지 화면 중앙정렬 설정
    loadingImg.style.width = img.style.width;
    loadingImg.style.height = img.style.height;
    loadingImg.style.marginLeft =
        (loadingImg.style.width.replace("px", "") / 2) * -1 + "px";
    loadingImg.style.marginTop =
        (loadingImg.style.height.replace("px", "") / 2) * -1 + "px";

    loadingImg.append(img);

    // 페이지에 로딩 화면 설정
    document.body.append(mask);
    document.body.append(loadingImg);
}
