
const btnLoginSign = document.querySelector('.tampillog')
const logsig = document.querySelector('.logsig')
const logsig2 = document.querySelector('.logsig2')
const tot = document.querySelector('.tot')
const btnlog = document.querySelector('.login')
const btnsig = document.querySelector('.sign')
const profile = document.querySelector('.profile')
const logout = document.querySelector('.logout')
btnLoginSign.addEventListener('click',(e) => {
    e.preventDefault()
    const btnlogin= e.target.className == "login";
    const btnsign= e.target.className == "sign";
    // const navclick = e.target.className == "nav"
    // const navclose = e.target.className == "tampillog"

    if(btnlogin){
        join.style.display ="none";
        logsig.style.display ="flex";
        logsig2.style.display ="none";
        btnLoginSign.style.display ="none"
    }
    if(btnsign){
        join.style.display ="none";
        logsig2.style.display ="flex";
        logsig.style.display ="none";
        btnLoginSign.style.display ="none"
    }
   
    
    
    // if(navclick){
    //   console.log('ok')
    // }
    // if(navclose){
    //     nav.style.display= "block";
    //     navClose.style.display= "none";
    // }
})

logout.addEventListener('click',() => {
    localStorage.removeItem("token")
    window.location="/"
})
profile.addEventListener('click',() => {
    join.style.display ="none";
    roomlist.style.display = 'none'
    tot.style.display ="flex";
    btnLoginSign.style.display ="none"
})







// register 
const fromreg = document.querySelector(".pee")
const nameReg = document.querySelector(".name-reg")
const emailReg = document.querySelector(".email-reg")
const passReg = document.querySelector(".pass-reg")


const msgReg =document.querySelector('.errReg')
const msgLog =document.querySelector('.errLog')
fromreg.addEventListener('submit',(e) => {
    e.preventDefault()
    fetch(`${ENDPOINT}/sign`,{
        method: "POST",
        body: JSON.stringify({
          name:nameReg.value,
          email:emailReg.value,
          password:passReg.value,
        }),
        headers:{
            'Content-Type':'application/json'
        }
        
    }).then(response => response.json())
    .then(response => {
        if(!response.message){
            logsig.style.display ="flex";
            logsig2.style.display ="none";
        }else{

            msgReg.innerHTML = `!! ${response.message}`
        }
    })
})



// login 
const fromlogin = document.querySelector(".ptim")
const Email = document.querySelector(".email")
const password = document.querySelector(".pass")

fromlogin.addEventListener('submit',(e) => {
    e.preventDefault()
    fetch(`${ENDPOINT}/login`,{
        method: "POST",
        body: JSON.stringify({
          email:Email.value,
          password:password.value,
        }),
        headers:{
            'Content-Type':'application/json'
        }
        
    }).then(response => response.json())
    .then(response => {
      
        console.log(response)
        if(!response.message){
          localStorage.setItem("token",response.token)
          window.location="/"
        }else{

            msgLog.innerHTML = `!! ${response.message}`
        }
       
       
    })
})



// if login



let gettoken = localStorage.getItem("token");
const inptchatlog = document.querySelector('.iflog')
const inptchatnolog = document.querySelector('.nolog')
const btncreate = document.querySelector('.crt')
const searchUser = document.querySelector('.search-otheruser')



if(gettoken){
    btnlog.style.display = 'none'
    btnsig.style.display = 'none'
    profile.style.display = 'block'
    logout.style.display = 'block'
    btncreate.style.display = 'block'
    logsig.style.display ="none";
    join.style.display ="none";
    roomlist.style.display="block"
    searchUser.style.display="block"
    inptchatnolog.style.display="none"
    getListRoom()
}else{
    inptchatlog.style.display="none"
}





// route log sig

const routeLog = document.querySelector(".routeLog")
const routeSig = document.querySelector(".routeReg")


routeLog.addEventListener("click",(e) => {
    e.preventDefault()
    logsig.style.display ="flex";
    logsig2.style.display ="none";
})
routeSig.addEventListener("click",(e) => {
    e.preventDefault()
    logsig2.style.display ="flex";
    logsig.style.display ="none";
})


let datapro = ''
let idProfile = ''

// profile
const namepro = document.querySelector('.proname')
const emailpro = document.querySelector('.emailpro')
const idpro = document.querySelector('.idpro')
const aaa = async() => {

    await fetch(`${ENDPOINT}/profile`,{
          headers:{
              "token":gettoken
          }
      }).then(res => res.json()).then((res) => {
          datapro = res.name
          idProfile = res.id
          namepro.innerHTML = res.name
          emailpro.innerHTML = `Email:${res.email}`
          idpro.innerHTML = `ID:${res.id}`
      })
  }
  
  aaa()


  const transisi = document.querySelectorAll('.aokwk')
  const nav = document.querySelector('.bi-list')
const navClose = document.querySelector('.tampillog')
const closEe = document.querySelector('.coki')
const AnimSearch = document.querySelector('.searchUser')


nav.addEventListener('click',(e) => {
    nav.style.display= "none";
    navClose.classList.toggle('ok')
    closEe.style.display ="block"
   
    transisi.forEach((e) => {
        e.classList.toggle('transisi')
    })
  
   
})
closEe.addEventListener('click',(e) => {
    closEe.style.display ="none"
    AnimSearch.classList.remove('searchUserAnim')
    setTimeout(() => {
        awkoakwok.style.display="block";
        searchUserr.style.display="none"
        navClose.style.overflowY = "";
        nav.style.display= "block";
        navClose.classList.toggle('ok')
    },1100)
    transisi.forEach((e) => {
        e.classList.toggle('transisi')
    })
})








const crt = document.querySelector('.crt')
crt.addEventListener('click',(e) => {
    e.preventDefault()
    nav.style.display= "none";
    navClose.style.display = "none"
    concreate.style.display ="flex";
    roomlist.style.display = "none"
})





const aftjoin = document.querySelector('.aftjoin')

const get = () => {

    fetch(`${ENDPOINT}/Listuserchato`)
          .then(response => response.json())
          .then(res => {
            let map = ''
           res.filter(res => {
               if(res.nameuser == datapro){``
                   return res
               }
               return res.nameuser === datapro
           })
             .map(res => {
               
                let ths = 'this is admin'
              if(res.idRoom !== ths) {
                map += newrom(res)
            }
            aftjoin.innerHTML = map
             
                 
             })           
           })
}
setTimeout(() => {
    get()

},100)

      function newrom(m){
        console.log(m)
        return` 
        <div class="bglist" data-id="${m.idRoom}">
          <div class="picRoom">
            <img class="roomProfile" src="./fototest/picture.png">
            <h2 class="info-room">${m.roomUser}</h2>
          </div>
          <button class="btn-list" id="oy">Chat</button>
        </div>`
      }

    



















const searchUserr = document.querySelector('.searchUser')
const searchOtheruser = document.querySelector('.search-otheruser')
const awkoakwok = document.querySelector('.awkoakwok')
searchOtheruser.addEventListener('click',(e) => {
    e.preventDefault()
    kontolll()
    setTimeout(() => {

        AnimSearch.classList.toggle('searchUserAnim')
    })
    awkoakwok.style.display="none";
    searchUserr.style.display="block"
    navClose.style.overflowY = "scroll";
})

const mapUserr = document.querySelector('.mapUserrr')
const kontolll =() => {

    fetch(`${ENDPOINT}/Listuser`,{
        headers:{
            "token":gettoken
        }
    })
    .then(res => res.json())
    .then(res => {
    let mapinguser = ''
    
      res.map((e) => {
          mapinguser += AllUser(e)
      })
       mapUserr.innerHTML= mapinguser
    })
}

const formSearchUser = document.querySelector('.btn-cari')
const inputSearchUser = document.querySelector('.input-searchUser')
const judulSearch = document.querySelector('.judul-search')
const hasilCari = document.querySelector('.hasil-Cari')




formSearchUser.addEventListener('click',function(e) {
    e.preventDefault()
    if(inputSearchUser.value == ''){
       inputSearchUser.placeholder ="ini gak boleh kosong!!"
       kontolll()
       judulSearch.innerHTML = "All-User"
    }else{

        fetch(`${ENDPOINT}/FindUser`,{
            method:"POST",
            body:JSON.stringify({
                name:inputSearchUser.value
            }),
            headers:{
                "token":gettoken,
                'Content-Type':'application/json'

            }
        }).then(res => res.json())
        .then(res => {
            let mapHasilcari = ''
            
            res.map((e) => {
               mapHasilcari += AllUser(e)
            })
            mapUserr.innerHTML = mapHasilcari;
            if(mapHasilcari == ""){
                mapUserr.innerHTML = 'User Not Found'
            }
            judulSearch.innerHTML = "Hasil:"
        })
    }
})


 function AllUser(e){
    return`
    <div class="Userrr">
      <img  src="./fototest/picture.png">
      <h4>${e.name}</h4>
     </div>
    `
 }















//  const func = async(res) => {
//        await fetch(`${ENDPOINT}/${res.idRoom}`).then(response => response.json())
//         .then(rescok => {
//          console.log(rescok)
        
        
//          let div = document.createElement('div')
//          div.classList.add('bglist')
//          div.setAttribute(`data-id`,`${rescok._id}`)
//          aftjoin.appendChild(div)

//          let h2 = document.createElement('h2')
//          h2.classList.add('info-room')
//          h2.textContent = `room:${rescok.room}`
//          div.appendChild(h2)

//          let btn = document.createElement(`button`)
//          btn.classList.add('btn-list')
//          btn.textContent = 'Chat'
//          btn.id = 'oy'
//          div.appendChild(btn)


       
           
//         })
//     }
   
    
