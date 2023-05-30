






const socket = io();
socket.on("connection", () => console.log(`socket with id ${socket.id} connect server`))









const join = document.querySelector(".chat")
const formjoin = document.querySelector(".prom")
const nama = document.querySelector(".nama")
const room = document.querySelector(".room")
const btnJoin = document.querySelector(".btn-join")
const konchat = document.querySelector(".tampilchat");
const btnsend = document.querySelector(".formsend")
const pesan = document.querySelector(".pesan")
const tampilan = document.querySelector(".real-time")
const realtimesolo =document.querySelector(".real-timesolo")
const riwayat = document.querySelector(".lastmsg")
const riwayatsolo = document.querySelector(".lastmsgsolo")
const judul = document.querySelector(".header")
const UserON = document.querySelector(".ON")
const createroom = document.querySelector(".buat-room")
const concreate = document.querySelector(".chat-create")
const routerjoin = document.querySelector(".Join-room")
const listroom = document.querySelectorAll(".list-room")
const roomlist = document.querySelector(".room-list")
const msg = document.querySelector(".msg")
const ENDPOINT =" http://localhost:3001"


// buble chat versi grup
const createBublechat = (chat) => {
//    untuk pennanda 
   let kamu = document.createElement("div")
   kamu.classList.add("penanda")
   tampilan.appendChild(kamu)
   if(nama.value == chat.user){
       kamu.style.justifyContent = "flex-end"
   }

    
    // divnya
   let namaPesan = document.createElement('div')
   namaPesan.classList.add("chatuser")
   kamu.appendChild(namaPesan)

//    nama
    let namas = document.createElement('h4')
    namas.classList.add("namauserchat")
    if( nama.value == chat.user){
        namas.classList.add("you")
    }else{
        namas.classList.add("other")
    }
    namas.textContent=`${chat.user}`
    namaPesan.appendChild(namas)
//    pesan
    let pesantot = document.createElement('h4')
    pesantot.classList.add("namauserchat")
    pesantot.textContent=`${chat.pesan}`
    namaPesan.appendChild(pesantot)
//    time
    let time = document.createElement('h5')
    time.classList.add("p")
    time.textContent=`${chat.time}`
    namaPesan.appendChild(time)
   }


// // buble chat aft login versi grup
const createBublechato = (chat) => {
//    untuk pennanda 
   let kamu = document.createElement("div")
   kamu.classList.add("penanda")
   tampilan.appendChild(kamu)
   if(datapro == chat.user){
       kamu.style.justifyContent = "flex-end"
   }

    
    // divnya
   let namaPesan = document.createElement('div')
   namaPesan.classList.add("chatuser")
   kamu.appendChild(namaPesan)

//    nama
    let namas = document.createElement('h4')
    namas.classList.add("namauserchat")
    namas.id = idProfile
    if( datapro== chat.user){
        namas.classList.add("you")
    }else{
        namas.classList.add("other")
    }
    namas.textContent=`${chat.user}`
    namaPesan.appendChild(namas)
//    pesan
    let pesantot = document.createElement('h4')
    pesantot.classList.add("namauserchat")
    pesantot.textContent=`${chat.pesan}`
    namaPesan.appendChild(pesantot)
//    time
    let time = document.createElement('h5')
    time.classList.add("p")
    time.textContent=`${chat.time}`
    namaPesan.appendChild(time)
   }




// riwayat chat sudah login
const cmiw =() => {

    fetch(`${ENDPOINT}/Listchato`)
    .then((response) => response.json())
    .then((response) => {
     let Riwchat ="";
     console.log(roomjoin)
     response.filter(e => {
         if(e.room == roomjoin){
             return e
         }
         return e.room === roomjoin;
     }).map(e => {
        Riwchat += logpose(e)
    })
    riwayat.innerHTML =Riwchat
    })
}


// no token
const cmiwo =() => {

    fetch(`${ENDPOINT}/Listchato`)
    .then((response) => response.json())
    .then((response) => {
     let Riwchat ="";
     
     response.filter(e => {
         if(e.room == room.value){
             return e
         }
         return e.room === room.value;
     }).forEach((e) => {
        Riwchat += logpose(e)
    })
    riwayat.innerHTML =Riwchat
    })
}





let namechat = ''
const cuyo = localStorage.getItem("token");
const logpose = (e) => {

if(cuyo){

    if(e.user == datapro){
        namechat = e.user
        return`
        <div class="penandariw">
        <div class="chatuser">
          <h4 class="namauserchat you">${e.user}</h4>
          <h4 class="namauserchat yee"   id="${e._id}">${e.pesan}</h4>
          <h5 class="p">${e.time}</h5>
        </div>
      </div>
        `
    }else{
        return `
        <div class="penanda" >
        <div class="chatuser">
          <h4 class="namauserchat other" id="${e.iduser}">${e.user}</h4>
          <h4 class="namauserchat">${e.pesan}</h4>
          <h5 class="p">${e.time}</h5>
        </div>
      </div>
        `
    }
}else{
    console.log(e.user)
    if(e.user == nama.value ){
        return`
        <div class="penandariw">
        <div class="chatuser">
          <h4 class="namauserchat you">${e.user}</h4>
          <h4 class="namauserchat ">${e.pesan}</h4>
          <h5 class="p">${e.time}</h5>
        </div>
      </div>
        `
    }else{
        return`
        <div class="penanda">
        <div class="chatuser">
           <h4 class="namauserchat other">${e.user}</h4>
           <h4 class="namauserchat">${e.pesan}</h4>
           <h5 class="p">${e.time}</h5>
        </div>
        </div>
        `
    }
}
}








let roomjoinsolo = ''
let idroooo = ''
const batal = document.querySelector('.cc')
const bb = document.querySelectorAll('.bbb')
const tampilchatSolo = document.querySelector('.tampilchatsolo')
let idchT = []
const BodyChat = document.querySelector('.bodychat')
BodyChat.addEventListener('click',(e) => {
    e.preventDefault()
    const click = e.target.className == "namauserchat yee";
    const chatother = e.target.className == "namauserchat other";
// kalau mau chat userLain
   if(gettoken){

       if(chatother){
           let idny = e.target.id
           roomjoinsolo = idny
           const userroom = `${idny}${idProfile}`
           idroooo = userroom
           let nameuser = e.target.textContent
           Swal.fire({  
               confirmButtonText: `Chat Dengan ${nameuser}`,
               width:`300px`
             }).then((result) => {
               if (result.isConfirmed) {


                   alert('commingSoon')

               } 
                 })
           }
}



    if(click){
        let id = e.target.id
        idchT.push(id)

       e.target.parentElement.classList.add('dipilih')
        bb[0].style.display = 'none'
        batal.style.display ="block"
        trash.style.display="block"
        console.log(idchT)
    }
})




 




batal.addEventListener('click',(e) => {
    e.preventDefault()
    batal.style.display ="none"
    trash.style.display="none"
    bb[0].style.display = 'block'
    idchT = []
    const chatuser = document.querySelectorAll('.chatuser')
    for(let i =0 ; i <= chatuser.length ; i ++){
         chatuser[i].classList.remove('dipilih')
    }
 

})
const trash = document.querySelector('.trash')
trash.addEventListener('click',() => {
  
   if(datapro == namechat){
       Swal.fire({
        title: 'Are you sure to delete message?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
          if(result.isConfirmed){
            for(let i = 0; i <= idchT.length; i ++){

                fetch(`${ENDPOINT}/delete/chat/${idchT[i]}`,{
                    method:"DELETE",
                    body:null,
                    headers:{
                        'Content-Type':'application/json'
                    }
                   }).then(e => {
                     cmiw()
                     batal.style.display ="none"
                     trash.style.display="none"
                     bb[0].style.display = 'block'
                    idchT = []
                 })
            }
          }
      })
      

   }
   if(idchT == ''){
    alert('ini bukan pesan kamu')
   }
})

// const ee = document.querySelector('.ee')
// const checkbox= document.querySelector('#checked')
// checkbox.addEventListener('click',() => {
//     if(checkbox.checked){
//        trash.classList.add('block')
//     }else{
//        trash.classList.remove('block')
//     }
// })



   
//    join room


konchat.style.display ="none"
formjoin.addEventListener("submit",function(e){
    e.preventDefault()
    fetch(`${ENDPOINT}/findRoom`,{
        method: "POST",
        body: JSON.stringify({
          room:room.value,
          
        }),
        headers:{
            'Content-Type':'application/json'
        }
        
    }).then((e) => {
      if(e.status <=400){
        socket.emit("join",room.value)
        konchat.style.display ="block"
        join.style.display = "none"
        judul.innerHTML =`${room.value}` ;
        cmiwo()
          
      }else{
        msg.innerHTML = `room with name ${room.value} not found`
      }

        
    })
   
     
    });


    // pesan dikirim
    let roomjoin =""
btnsend.addEventListener("submit",async function(e){
    e.preventDefault()
    if(gettoken){
        const data = {
            user:datapro,
            room:roomjoin,
            pesan:pesan.value,
            time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        }
         createBublechato(data);
         await socket.emit("data-user",data)
      
         fetch(`${ENDPOINT}/Listchat`,{
            method: "POST",
            body: JSON.stringify({
                user:datapro,
                pesan:pesan.value,
                iduser:idProfile,
                time: new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
                room:roomjoin
            }),
            headers:{
                'Content-Type':'application/json'
            }
            
        })
        pesan.value= ''
       

    }

})

socket.on("message",(kirimPesan) => {
     createBublechat(kirimPesan);
});







// back join room
const back = document.querySelectorAll(".back")
for(let i = 0; i < back.length ; i ++){
    back[i].addEventListener("click",(e) => {
        e.preventDefault()
        window.location = '/'
        // konchat.style.display ="none"
        // room.value = ""
        // nama.value = ""
        // concreate.style.display ="none";
        // join.style.display = "flex"
    })
}
const cok = document.getElementById('cok')
cok.addEventListener('click',() => {
    

        get()

})





let nameandroom =''
let roomId = ''
let  hapusUser = ''
// list room 
const asu = document.querySelector(".bodyClick")
asu.addEventListener("click",function(e){
    e.preventDefault()
    // join rooom
    if(gettoken){
        if(e.target.id == 'asu'){
            Swal.fire({
                title: 'Are you sure to Join?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Join'
              }).then((result) => {
                if (result.isConfirmed) {
                 
                    const id = e.target.parentElement.dataset.id
                    fetch(`${ENDPOINT}/${id}`).then(response => response.json())
                    .then(response => {
                          
                        roomjoin = response.room
                       let nmAndRm = `${datapro}${response.room}`
                                        fetch(`${ENDPOINT}/Listuserchat`,{
                                            method: "POST",
                                            body: JSON.stringify({
                                                nameuser:datapro,
                                                namaAndroom:nmAndRm,
                                                roomUser:response.room,
                                                idRoom:response._id,
                                                admin:false
                                            }),
                                            headers:{
                                                'Content-Type':'application/json'
                                            }
                                            
                                        }).then(e => {
                                            if(e.status <= 300){
                                                roomlist.style.display = "none"
                                                socket.emit("join",response.room)
                                               
                                                 
                                                konchat.style.display ="block"
                                                judul.innerHTML =`${response.room}` ;
                                                cmiw()
                                            }else{
                                                Swal.fire('Grup is Full or You is Joined', '', 'info')
                                            }
                                        })
                                    
                                       
                         
                           
                        
                    
                    });
                }
                
              })
            
        }
        if(e.target.id == "oy"){
            const id = e.target.parentElement.dataset.id
            fetch(`${ENDPOINT}/${id}`).then(response => response.json())
            .then(response => {
                roomjoin = response.room
                nav.style.display = 'none'
                roomlist.style.display = "none"
                socket.emit("join",response.room)
                konchat.style.display ="block"
                judul.innerHTML =`${response.room}` ;
                cmiw()
            })
        }
    }else{

        if(e.target.id == 'asu'){
            const id = e.target.parentElement.dataset.id
             fetch(`${ENDPOINT}/${id}`).then(response => response.json())
             .then(response => {
                nav.style.display = 'none'
                join.style.display = "flex"
                roomlist.style.display = "none"
                room.value = response.room;
             });
        }
    }

    // info room
    let roompri = ''
   
    const userRoom = document.querySelector('.user-room')
    if(e.target.className == "picRoom"){
        const coninforoom = document.querySelector('.info-room-list')
        const judulInfoRoom = document.querySelector('.judul-info-room')
        const id = e.target.parentElement.dataset.id
        fetch(`${ENDPOINT}/${id}`).then(response => response.json())
        .then(response => {
            fungsi()
            nav.style.display ="none"
            roomlist.style.display = "none"
            coninforoom.style.display ="block"
            roompri = response.room  
            roomId = response       
           judulInfoRoom.innerHTML =`${response.room}` ;
            
        });




 const fungsi = () => {
    
     fetch(`${ENDPOINT}/Listuserchato`).then(response => response.json())
     .then((respons) => {
         let mapuserinroom = ''
    
    
     respons.filter(e => {
            if(e.roomUser == roompri ){
                return e
            }
            return e.roomUser === roompri
        }).map((e)=> {
           mapuserinroom += babi(e)
      
        })
        
        userRoom.innerHTML = mapuserinroom
        

            

              // keluar grup
       
             let NameandRoom= `${datapro}${roompri}`
           
             respons.filter(res => {
                    if(res.namaAndroom == NameandRoom){
                         return res
                    }
                    return res.namaAndroom === NameandRoom
                  }).map(e => {
                    if(e.admin == true){
                        hapusgrup.style.display ="block"
                    }
                    nameandroom = e
                  
                  })


                //  hapus grup
              respons.filter(res => {
                   if(res.roomUser == roomId.room){
                    return res
                   }
                  return res.roomUser === roomId.room;
              }).map(e => {
                 hapusUser = e
                 
              })
         
        });
    }

 }


function babi(e){
    return`<div class="bglist-info" >
    <img class="info-img" src="./fototest/picture.png"/>
    <h2 class="info-name">${e.nameuser}</h2>
  </div>`
}
  
    
})                                                   


for(let i = 0; i < listroom.length; i ++){
    
    roomlist.style.display = "none"
    listroom[i].addEventListener("click",function(e){
        e.preventDefault()
        getListRoom()
        roomlist.style.display = "block"
        join.style.display = "none"
        concreate.style.display ="none";
})
}

const bodylistRoom = document.querySelector(".map-room")
const getListRoom = () => {

    fetch(`${ENDPOINT}/ListRoom`)


    .then((response) => response.json())
    .then((response) => {
     let listroom ="";
     let yourro = '';
     response.forEach((m) => (listroom +=  tampilRoom(m)));
     response.filter(e => {
         if(e.admin == `${datapro}${e.room}`){
             return e
         }
         return e.admin === datapro;
     }).map(e => {
         yourro += kkk(e)
     })
       bodyYourRoom.innerHTML = yourro;
        bodylistRoom.innerHTML = listroom;
    })
}


getListRoom()

function tampilRoom(m){
    return`
    <div class="bglist" data-id="${m._id}">
    <h2 class="info-room">room:${m.room}</h2>
    <button class="btn-list" id="asu">Join</button>
    </div>`
}

function kkk(m){
    return` 
    <div class="bglist" data-id="${m._id}">
      <div class="picRoom">
        <img class="roomProfile" src="./fototest/picture.png">
        <h2 class="info-room">${m.room}</h2>
      </div>
      <button class="btn-list" id="oy">Chat</button>
    </div>`
}



const bodyroomYour = document.querySelector('.map-yourroom')
const toogleyour = document.querySelector('.connavroom');
const btnYourrom = document.querySelector('.your-room')
const btnAllrom = document.querySelector('.all-room')
const searchDiv = document.querySelector('.oo')
const bodyYourRoom= document.querySelector('.aftcreate')
toogleyour.addEventListener('click',(e) => {
    e.preventDefault()
    const yourRoom = e.target.className == 'your-room'
    const allRoom = e.target.className == 'all-room'


    if(gettoken){

        if(yourRoom){
            get()
           bodylistRoom.style.display = 'none';
           searchMap.style.display='none';
           searchDiv.style.display = 'none';
           bodyroomYour.style.display = 'block';
           btnYourrom.style.background = 'white';
           btnYourrom.style.color = 'black';
           btnAllrom.style.background = 'black';
           btnAllrom.style.color = 'white';
        }
       
    }else{
       
        bodylistRoom.style.display = 'block';
        bodyroomYour.style.display = 'none';
        btnYourrom.style.background = 'black';
        btnYourrom.style.color = 'white';
        btnAllrom.style.background = 'white';
        btnAllrom.style.color = 'black';

    }
    if(allRoom){
       bodylistRoom.style.display = 'block';
       searchDiv.style.display = 'flex';
       bodyroomYour.style.display = 'none';
       btnYourrom.style.background = 'black';
       btnYourrom.style.color = 'white';
       btnAllrom.style.background = 'white';
       btnAllrom.style.color = 'black';
    }
})

































// create room
const fromCreate = document.getElementById("create")


const createnama = document.querySelector(".create-nama")
fromCreate.addEventListener("submit",function(e){
    e.preventDefault()

    fetch(`${ENDPOINT}/room`,{
        method: "POST",
        body: JSON.stringify({
          room:createnama.value,
          admin:`${datapro}${createnama.value}`,
        }),
        headers:{
            'Content-Type':'application/json'
        }
        
    }).then((res) => {
        if(res.status <= 300){

            concreate.style.display ="none";
            socket.emit("join",createnama.value)
            roomjoin = createnama.value
        
            konchat.style.display ="block"
            judul.innerHTML =`${createnama.value}` ;
        }

          let crtnmrm = `${datapro}${createnama.value}`
        fetch(`${ENDPOINT}/Listuserchat`,{
            method: "POST",
            body: JSON.stringify({
                nameuser:datapro,
                namaAndroom:crtnmrm, 
                roomUser:createnama.value,
                admin:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
            
        })
    })


})

// btn create room
concreate.style.display ="none";
createroom.addEventListener('click',function (e){
    e.preventDefault()
        join.style.display = "none"
        logsig.style.display ="flex";
    
 
})



// perbaikan
// routerjoin.addEventListener('click',function (e){
//     e.preventDefault()
//     concreate.style.display ="none";
//     roomlist.style.display = "flex"
// })



// keluar grup 



    const keluatgrupdanhapus = document.querySelector('.keluar')
    keluatgrupdanhapus.addEventListener('click',(e) => {
        e.preventDefault()
        
           if(nameandroom.admin == true){
              fetch(`${ENDPOINT}/ListRoom/${roomId._id}`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    admin:"milik developer"
                })
              })
           }
    
     
        
            // alert('berhaisl')
            
            fetch(`${ENDPOINT}/Listuserchat/${nameandroom._id}`,{
             method:"DELETE",
             headers:{
                 'Content-Type':'application/json'
             },
             body:null
 
            }).then(res => {
                window.location = '/'
            })
        
        
    
    })

// hapus grup

const hapusgrup = document.querySelector('.hapus')
hapusgrup.addEventListener('click',(e) => {
    e.preventDefault()
    

    Swal.fire({
        title:`Are You Sure Delete Room:${roomId.room}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'delete'
      }).then((result) => {
        if(result.isConfirmed){
            // All member auto keluar
            fetch(`${ENDPOINT}/Listuserchat/delete`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    roomUser:roomId.room
                })
        
               })
     
            fetch(`${ENDPOINT}/chatuser/deleted`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    room:roomId.room
                })
            })
   
            fetch(`${ENDPOINT}/deleteRoom/${roomId._id}`,{
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json'
                },
                body:null
            }).then(res => {
                window.location ="/"
            })
        }
      })
      
      
      
   
})

// search room 

const search = document.querySelector('.search')
const btnsearch = document.querySelector('.btn-search')
const searchMap = document.querySelector('.search-map')
const load = document.querySelector('.sss')
  

    btnsearch.addEventListener('click',(e) => {
        searchMap.style.display='block'
        e.preventDefault()
        if(search.value !== ''){
         load.style.display ="flex"
         fetch(`${ENDPOINT}/findRoom`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
               room:search.value
            })
         }).then(res => res.json())
         .then(res => {
            bodylistRoom.style.display = 'none'
            let oy = res.room


            let yo = ''
            yo += pili(oy)
            searchMap.innerHTML= yo

         })
          
        }else{
           search.placeholder = 'ini ga boleh kosong!!!!'
        }
    })




function pili(m){
    return`
    <div class="bglist" data-id="${m._id}">
    <h2 class="info-room">room:${m.room}</h2>
    <button class="btn-list" id="asu">Join</button>
    </div>`
}














//ada pesan langsung up elementnya


