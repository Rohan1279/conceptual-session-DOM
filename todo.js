document.getElementById("input-value").addEventListener("keyup", (event) => {
  const inputValueText = event.target.value;
  const inputBtn = document.getElementById("input-btn");
  //   console.log(inputValueText.length);

  //input condition 1
  if (inputValueText.length !== 0) {
    inputBtn.removeAttribute("disabled");
  } else {
    inputBtn.setAttribute("disabled", true);
  }

  //input condition
  //   if (typeof inputValueText !== String) {
  //     inputBtn.removeAttribute("disabled");
  //   } else{ inputBtn.setAttribute("disabled", true)};
});

let taskCount = 0;
const inputBtn = document
  .getElementById("input-btn")
  .addEventListener("click", function (event) {
    taskCount++;
    // get input value
    // const inputValue = document.getElementById("input-value").value;
    const inputValue = document.getElementById("input-value");
    const inputValueText = inputValue.value;
    // console.log(inputValueText);

    //where to add
    const contentContainer = document.getElementById("content-container");
    //   what to add
    const newContent = document.createElement("tr");
    newContent.innerHTML = `
        <th>${taskCount}</th>
        <td>${inputValueText}</td>
        <td>
        <button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-secondary done-btn">Done</button>
        </td>
    `;
    // add
    contentContainer.appendChild(newContent);
    // remove input value
    // document.getElementById("input-value").value= '';
    inputValue.value = "";
    //disable Add item button after adding item
    event.target.setAttribute("disabled", true);

    //   delete
    const deleteBtn = document.getElementsByClassName("delete-btn");
    for (let button of deleteBtn) {
      button.addEventListener("click", (event) => {
        // console.log(event.target); // <button class="btn btn-danger delete-btn">Delete</button>
        // console.log(event.target.parentNode); // <td>...</td>
        // console.log(event.target.parentNode.parentNode); // <tr>...</tr>
        event.target.parentNode.parentNode.style.display = "none";
      });
      // done
    }
    const doneBtn = document.getElementsByClassName("done-btn");
    for (let button of doneBtn) {
      button.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.setAttribute(
          "style",
          "text-decoration: line-through"
        );
      });
    }
  });

// fix count
