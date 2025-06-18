const userBtn = document.querySelector("#user_btn");
const root = document.querySelector("#roots");
const clear = document.querySelector("#clear");
 const title = document.querySelector("#title_btn");

const handleUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users",{
        method: "GET",
        // headers: {
        "Content-Type": "application/json"
        //}
    })
        .then((response) => response.json())
        .then((data) => {
            root.innerHTML = data.map((user)=>{
                return `
                    <div class="user">
                        <h2>${user.name}</h2>
                        <div>
                        <span><p>Email:</p></span> <span><p> <a href="#">${user.email}</a></p></span>
                        <span><p>Phone:</p></span> <span class='content'><p>${user.phone}</p></span>
                        </div>
                    </div>
                `;
            }).join(" ");
    //          root.style.display = "grid";
    // root.style.gridTemplateColumns = "1fr 1fr 1fr";
    // root.style.justifyContent = "center";
    // root.style.marginLeft = "auto";
            // data.forEach((user) => {
            //     const userDiv = document.createElement("div");
            //     userDiv.classList.add("user");
            //     userDiv.innerHTML = `
            //         <h2>${user.name}</h2>
            //         <p>Email: ${user.email}</p>
            //         <p>Phone: ${user.phone}</p>
            //         <p>Website: ${user.website}</p>
            //     `;
            //     root.appendChild(userDiv);
            // });
        })
        .catch((error) => console.error("Error fetching users:", error));
}

async function fetchAndDisplayUsers() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
   

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const post = await response.json();
    root.innerHTML = '';

    root.innerHTML = post.slice(0,10).map(post => {
    //   const userDiv = document.createElement("div");
    //   userDiv.innerHTML = `
    return    `<div class="user">
                <h2>${post.title}</h2>
                <p><strong>Author ID:</strong> ${post.userId}</p>
                <p><strong>ID:</strong> ${post.id}</p>
                <p>${post.body}</p>
                <hr/>
                </div>
            `;
            postList.appendChild(postDiv);
        }).join(" ");

    //   `;
     
    // }).join(" ");
    // root.style.display = "grid";
    // root.style.gridTemplateColumns = "1fr 1fr";
    // // root.style.gap = "20px";
    // root.style.justifyContent = "center";
    // root.style.marginLeft = "300px";
    // // root.style.alignContent = "center";


  } catch (error) {
    root.innerHTML = `<p style="color: red;">Failed to fetch users: ${error.message}</p>`;
  }
}




userBtn.addEventListener("click", handleUser);
clear.addEventListener('click', function(){
    root.innerHTML = "";
    root.innerHTML = "";
})
title.addEventListener("click", fetchAndDisplayUsers);

