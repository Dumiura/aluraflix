const videosBlushDiv = document.getElementById('videosBlush')
const videosBaseDiv = document.getElementById('videosBase')
const videosSombraDiv = document.getElementById('videosSombra')


const editVideo = document.getElementById('editVideo')
const newVideo = document.getElementById('newVideo')
const nomeInput = document.getElementById('nome')
const linkVideoInput = document.getElementById('linkVideo')
const linkImageInput = document.getElementById('linkImage')
const categoria = document.getElementById('categoria')
const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const salvarNovo = document.getElementById('salvarNewVideo');
const limparNovo = document.getElementById('limparNewVideo');
const nomeInputNovo = document.getElementById('nomeNovo')
const categoriaInputNovo = document.getElementById('categoriaNovo')
const linkImageInputNovo = document.getElementById('linkImageNovo')
const linkVideoInputNovo = document.getElementById('linkVideoNovo')
const newvideoButton = document.getElementById('newvideoButton')
const closerNewVideo = document.getElementById('closerNewVideo')
const alertDelete = document.getElementById('alertDelete')
const confirmDelete = document.getElementById('confirmDelete')
const cancelDelete = document.getElementById('cancelDelete')


const closer = document.getElementById('closer')

closer.addEventListener('click',()=>{
  editVideo.style.display = 'none'
})

closerNewVideo.addEventListener('click', ()=>{
  newVideo.style.display = 'none'
})

function createElement(e, classes){
  const element = document.createElement(e);
  element.classList = classes;
  return element;
}

function createVideo(cat, linkImage, linkVideo, nome, where){
    const video = createElement('div', 'col-4 video')
    const imageDiv = createElement('div', 'container-fluid imageDiv')
    imageDiv.style.background = `url(${linkImage}) no-repeat center`
    imageDiv.style.backgroundSize = '100% 100%'
    imageDiv.addEventListener('click', ()=>{
      window.location.replace(linkVideo)
    })
    // const title = createElement('p', 'fs-3 fw-2 text-white text-video text-center')
    // title.innerText = nome

    const barra = createElement('div', 'd-flex justify-content-evenly p-3 barra')

    const apagar = createElement('div', 'd-flex gap-3 cursor')
    apagar.addEventListener('click', ()=>{
      alertDelete.style.display = 'flex'
      confirmDelete.addEventListener('click', async ()=>{
        try {
          await deleteDoc(doc(db, 'videos', nome)); // Ensure 'nome' is correctly defined
          video.remove();
          alertDelete.style.display = 'none'; // Hide the delete alert after successful deletion
        } catch (error) {
          console.error("Error deleting document: ", error);
        }
      })
      cancelDelete.addEventListener('click', ()=>{
        alertDelete.style.display = 'none'
      })
    })
    const iconTrash = createElement('img', 'icon my-auto')
    iconTrash.src = "images/trash.png"
    const apagarText = createElement('p', 'text-uppercase text-white my-auto')
    apagarText.innerText = 'deletar'
    
    const editar = createElement('div', 'd-flex gap-3 cursor')
    editar.addEventListener('click', ()=>{
      editVideo.style.display = 'flex'
      linkImageInput.value = linkImage
      linkVideoInput.value = linkVideo
      nomeInput.value = nome
      categoria.value = cat
      limpar.addEventListener('click', ()=>{
        linkImageInput.value = '';
        linkVideoInput.value = '';
        nomeInput.value = '';
        categoria.value = '';
      })
      salvar.addEventListener('click', ()=>{
        if(linkImageInput.value == '' || linkVideoInput.value == '' || nomeInput.value == ''){

        }else{
          deleteDoc(doc(db, 'videos', `${nome}`))
          video.remove()
          setDoc(doc(videosRef, `${nomeInput.value}`), {
            cat: categoria.value,
            linkImage: linkImageInput.value,
            linkVideo: linkVideoInput.value,
            nome: nomeInput.value
          })
          editVideo.style.display = 'none'
        }
      })
    })

    const iconEdit = createElement('img', 'icon my-auto')
    iconEdit.src = "images/pencil.png"
    const editarText = createElement('p', 'text-uppercase text-white my-auto')
    editarText.innerText = 'editar'

    apagar.appendChild(iconTrash)
    apagar.appendChild(apagarText)
    editar.appendChild(iconEdit)
    editar.appendChild(editarText)
    barra.appendChild(apagar)
    barra.appendChild(editar)



    video.appendChild(imageDiv)
    // video.appendChild(title)
    video.appendChild(barra)
    where.appendChild(video)
}




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc, onSnapshot, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBv2IYOu4LFr-S3Pt5i6_LSfDpCdEEAmEQ",
  authDomain: "miura-video.firebaseapp.com",
  databaseURL: "https://miura-video-default-rtdb.firebaseio.com",
  projectId: "miura-video",
  storageBucket: "miura-video.appspot.com",
  messagingSenderId: "749188910496",
  appId: "1:749188910496:web:0374f88a954b881846a8c5",
  measurementId: "G-7ZHRYKVZQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const videosRef = collection(db, 'videos')

onSnapshot(collection(db, 'videos'), (snapshot) => {
  snapshot.docChanges().forEach((change)=>{
      if(change.type === 'added'){
          const dados = change.doc.data();
          if(dados.cat =='blush'){
            createVideo(dados.cat, dados.linkImage, dados.linkVideo, dados.nome, videosBlushDiv)
          }
          else if(dados.cat == 'base'){
            createVideo(dados.cat, dados.linkImage, dados.linkVideo, dados.nome, videosBaseDiv)
          }
          else if(dados.cat == 'sombra')
            createVideo(dados.cat, dados.linkImage, dados.linkVideo, dados.nome, videosSombraDiv)
      }
  })
})

newvideoButton.addEventListener('click', ()=>{
  newVideo.style.display = 'block'
})

salvarNovo.addEventListener('click', ()=>{
  setDoc(doc(videosRef, `${nomeInputNovo.value}`), {
    nome: nomeInputNovo.value,
    cat: categoriaInputNovo.value,
    linkImage: linkImageInputNovo.value,
    linkVideo: linkVideoInputNovo.value
  })
  cleanNewvideoInput()
  newVideo.style.display = 'none'
})

function cleanNewvideoInput(){
  nomeInputNovo.value = '';
  categoriaInputNovo.value = '';
  linkImageInputNovo.value = '';
  linkVideoInputNovo.value = '';
}

limparNovo.addEventListener('click',()=>{
  cleanNewvideoInput()
})