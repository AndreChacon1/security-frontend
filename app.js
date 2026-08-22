const API_BASE = "";
const API_KEY = "my-super-secret-api-key-12345";

const responseOutput = document.getElementById("responseOutput");
const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");

function displayResponse(data) {
    responseOutput.textContent = JSON.stringify(data, null, 2);
}

function displayError(error) {
    responseOutput.textContent = "Error: " + error;
}

async function getData() {
    try {
        const res = await fetch(`${API_BASE}/api/data`, {
            method: "GET",
            headers: {
                "x-api-key": API_KEY,
            },
        });
        const data = await res.json();
        displayResponse(data);
    } catch (err) {
        displayError(err.message);
    }
}

async function postData() {
    try {
        const res = await fetch(`${API_BASE}/api/data`, {
            method: "POST",
            headers: {
                "x-api-key": API_KEY,
            },
        });
        const data = await res.json();
        displayResponse(data);
    } catch (err) {
        displayError(err.message);
    }
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);
