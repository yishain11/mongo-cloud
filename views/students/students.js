const createStudentForm = document.getElementById("createF");
const getBtn = document.getElementById("getBtn");
const getForm = document.getElementById("getForm");
const updateF = document.getElementById("updateF");
const deleteF = document.getElementById("deleteF");

deleteF.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(deleteF);
  const dataJson = {};
  for (let [key, val] of data.entries()) {
    if (val) {
      dataJson[key] = val;
    }
  }
  console.log("deleteF dataJson", dataJson);
  fetch("/api/readStudents", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataJson),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
    });
});

updateF.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(updateF);
  const dataJson = {};
  for (let [key, val] of data.entries()) {
    if (val) {
      dataJson[key] = val;
    }
  }
  console.log("getForm dataJson", dataJson);
  fetch("/api/readStudents", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataJson),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
    });
});

getForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(getForm);
  const dataJson = {};
  for (let [key, val] of data.entries()) {
    if (val) {
      dataJson[key] = val;
    }
  }
  console.log("getForm dataJson", dataJson);
  fetch("/api/readStudents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataJson),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
    });
});

getBtn.onclick = () => {
  fetch("/api/readStudents")
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
    });
};
createStudentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(createStudentForm);
  const dataJson = {};
  for (const [key, val] of data.entries()) {
    dataJson[key] = val;
  }
  console.log("dataJson", dataJson);
  fetch("/api/createStudent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataJson),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
    });
});
