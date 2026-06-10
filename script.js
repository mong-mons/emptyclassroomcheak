function showBuilding(building) {
    const roomList = document.getElementById("room-list");

    if (building === "인문관") {
        roomList.innerHTML = `
            🔴 101호 · 현대문학개론<br>
            🟢 102호 · 비어 있음
        `;
    }

    else if (building === "사회관") {
        roomList.innerHTML = `
            🔴 201호 · 사회학개론<br>
            🟢 202호 · 비어 있음
        `;
    }

    else if (building === "공학관") {
        roomList.innerHTML = `
            🔴 301호 · 자료구조<br>
            🟢 302호 · 비어 있음
        `;
    }
}
