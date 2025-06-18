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
             root.style.display = "grid";
    root.style.gridTemplateColumns = "1fr 1fr 1fr";
    root.style.justifyContent = "center";
    root.style.marginLeft = "auto";
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
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
   

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();
    root.innerHTML = '';

    root.innerHTML = users.map(user => {
    //   const userDiv = document.createElement("div");
    //   userDiv.innerHTML = `
    return ` <div class="use">
        <ul>
        <h2>${user.name} (${user.username})</h2>
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        </ul>
        
        
        <ul>
        <h3>Address</h3>
          <li><strong>Street:</strong> ${user.address.street}</li>
          <li><strong>Suite:</strong> ${user.address.suite}</li>
          <li><strong>City:</strong> ${user.address.city}</li>
          <li><strong>Zipcode:</strong> ${user.address.zipcode}</li>
          <li><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</li>
        </ul>

        
        <ul>
        <h3>Company</h3>
          <li><strong>Name:</strong> ${user.company.name}</li>
          <li><strong>Catchphrase:</strong> "${user.company.catchPhrase}"</li>
          <li><strong>BS:</strong> ${user.company.bs}</li>
        </ul>
        
        </div>
      `;
     
    }).join(" ");
    root.style.display = "grid";
    root.style.gridTemplateColumns = "1fr 1fr";
    // root.style.gap = "20px";
    root.style.justifyContent = "center";
    root.style.marginLeft = "300px";
    // root.style.alignContent = "center";


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

