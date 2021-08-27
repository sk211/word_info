const randomFriend = () => {
    fetch("https://randomuser.me/api/?results=50")
        .then(res => res.json())
        .then(data => displayFriend(data))
}
randomFriend()
const displayFriend = friend => {
    const result = friend.results
    const colMd = document.getElementById("sectionContainer")
    const div = document.createElement('div')
    for (const friend of result) {


        colMd.innerHTML = `
           <div class="card" style="">
                        <img src="${friend.picture.large}" class="card-img-top img-fluid" >
                        <div class="card-body">
                            <h5 class="card-title">${friend.name.title} ${friend.name.first} ${friend.name.last}</h5>
                            
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span class="fw-bold">Email : </span>  ${friend.email}</li>
                            <li class="list-group-item"><span class="fw-bold">Gender : </span>${friend.gender}</li>
                            <li class="list-group-item"><span class="fw-bold">Country : </span>${friend.location.country}</li>
                        </ul>
                      
                    </div>
    `;
    }
    colMd.appendChild = div
}
