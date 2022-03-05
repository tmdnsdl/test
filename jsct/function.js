function MenuCreateFunction() {
    const form = document.form;
    const model_id = document.getElementsByClassName("model_id");
    const name = document.getElementById("name").value;
    const domain = document.getElementById("domain").value;
    const url = document.getElementById("url").value;
    const detail = document.getElementById("detail").value;
    let flag = false;
    let modelFlag = false;

    model_id.forEach((element) => {
        const model_option = element.options[element.selectedIndex].value;
        if (model_option != null && model_option != "선택하세요") {
            modelFlag = true;
        } else {
            modelFlag = false;
        }
    });

    if (name === "" || name === null) {
        flag = true;
    }
    if (name === "" && (url === "" || url === null)) {
        flag = false;
    }

    if (name === "" || name === null) {
        alert("대메뉴 명을 기입해주세요");
    } else if (flag === false && (domain === "" || domain === null)) {
        alert("도메인을 선택해주세요");
    } else if (flag === false && (detail === "" || detail === null)) {
        alert("세부 영역을 선택해주세요");
    } else if (flag === false && modelFlag === false) {
        alert("AI모델 ID를 선택해주세요");
    } else if (confirm("대메뉴를 추가하겠습니까?") === true) {
        form.submit();
    }
}

function checkUrl() {
    const url = document.getElementById("url").value;
    const domain = document.getElementById("domain");
    const detail = document.getElementById("detail");
    const model_id = document.getElementsByClassName("model_id");
    const addSelect = document.getElementsByClassName("ml10");
    const blank_pattern = /^\s+|/s + $ / g;

    if (url === "" || url === null) {
        domain.disabled = true;
        detail.disabled = true;
        model_id.forEach((element) => {
            element.disabled = true;
        });
        addSelect.forEach((element) => {
            element.disabled = true;
        });
        return false;
    } else if (url.replace(blank_pattern, "") === "") {
        domain.disabled = true;
        detail.disabled = true;
        model_id.forEach((element) => {
            element.disabled = true;
        });
        addSelect.forEach((element) => {
            element.disabled = true;
        });
        return false;
    } else {
        domain.disabled = false;
        detail.disabled = false;
        model_id.forEach((element) => {
            element.disabled = false;
        });
        addSelect.forEach((element) => {
            element.disabled = false;
        });
        return true;
    }
}

function setUrl() {
    const url = document.getElementById("url").value;
    const domain = document.getElementById("domain");
    const detail = document.getElementById("detail");
    const model_id = document.getElementsByClassName("model_id");
    const addSelect = document.getElementsByClassName("ml10");
    const blank_pattern = /^\s+|/s + $ / g;

    if (url.replace(blank_pattern, "") === "") {
        domain.disabled = true;
        detail.disabled = true;
        model_id.forEach((element) => {
            element.disabled = true;
        });
        addSelect.forEach((element) => {
            element.disabled = true;
        });
        return false;
    } else {
        domain.disabled = false;
        detail.disabled = false;
        model_id.forEach((element) => {
            element.disabled = false;
        });
        addSelect.forEach((element) => {
            element.disabled = false;
        });
        return true;
    }
}
