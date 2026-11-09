const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const editToggle = $("#editToggle"), editorBar = $("#editorBar");
let editing = false;
const defaultContent = {};
$$("[data-editable]").forEach(el => defaultContent[el.dataset.editable] = el.innerHTML);
let posts = [
 {id:1,title:"O que faz um jogo ser inesquecível?",text:"Uma boa experiência vai muito além dos gráficos: história, mecânicas e imersão contam.",category:"ANÁLISE • JOGOS",image:"neon"},
 {id:2,title:"A evolução dos games e da tecnologia",text:"Da primeira geração aos mundos atuais, veja como a tecnologia transformou a forma de jogar.",category:"TECNOLOGIA",image:"purple"},
 {id:3,title:"Comunidade: jogar também é compartilhar",text:"Amizades, criatividade e experiências coletivas fazem parte da cultura dos games.",category:"CULTURA GAMER",image:"orange"}
];
const storageKey = "checkpointGamesContentV1";

function snapshot(){
 const content={}; $$("[data-editable]").forEach(el=>content[el.dataset.editable]=el.innerHTML);
 return {content,posts};
}
function save(){ localStorage.setItem(storageKey, JSON.stringify(snapshot())); }
function applySaved(){
 try{
  const data=JSON.parse(localStorage.getItem(storageKey)||"null"); if(!data)return;
  if(data.content) Object.entries(data.content).forEach(([key,value])=>{const el=$(`[data-editable="${CSS.escape(key)}"]`);if(el)el.innerHTML=value;});
  if(Array.isArray(data.posts)){posts=data.posts;renderPosts();}
 }catch(e){console.warn("Não foi possível carregar o conteúdo salvo.",e);}
}
function renderPosts(){
 const grid=$("#postGrid"); grid.innerHTML="";
 posts.forEach(post=>{
  const article=document.createElement("article"); article.className="post-card"; article.dataset.postId=post.id;
  const visual=document.createElement("div"); visual.className=`post-image image-${post.image||"neon"}`;
  if(post.imageData){visual.style.backgroundImage=`linear-gradient(#0002,#0002),url("${post.imageData}")`;visual.style.backgroundSize="cover";visual.style.backgroundPosition="center";}
  const stamp=document.createElement("span");stamp.textContent="GAME\nON";visual.append(stamp);
  const info=document.createElement("div");info.className="post-info";
  const category=document.createElement("span");category.className="category";category.textContent=post.category||"ARTIGO";
  const title=document.createElement("h3");title.textContent=post.title;
  const desc=document.createElement("p");desc.textContent=post.text;
  const read=document.createElement("button");read.className="read-more";read.textContent="Ler artigo ↗";read.addEventListener("click",()=>openArticle(post));
  info.append(category,title,desc,read);article.append(visual,info);
  if(editing){const del=document.createElement("button");del.className="delete-post";del.textContent="Excluir artigo";del.addEventListener("click",()=>{if(confirm("Excluir este artigo?")){posts=posts.filter(p=>p.id!==post.id);renderPosts();save();}});article.append(del);
   visual.title="Clique para escolher uma imagem";visual.addEventListener("click",()=>choosePostImage(post.id));}
  grid.append(article);
 });
}
function openArticle(post){$("#dialogTitle").textContent=post.title;$("#dialogText").textContent=post.text;$("#articleDialog").showModal();}
function choosePostImage(id){
 const picker=document.createElement("input");picker.type="file";picker.accept="image/*";
 picker.onchange=()=>{const file=picker.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{const p=posts.find(x=>x.id===id);p.imageData=reader.result;renderPosts();save();};reader.readAsDataURL(file);};picker.click();
}
function setEditing(value){
 editing=value;document.body.classList.toggle("editing",editing);editorBar.hidden=!editing;
 editToggle.textContent=editing?"✎ Editando":"✎ Editar site";
 $$("[data-editable]").forEach(el=>{el.contentEditable=editing?"true":"false";el.spellcheck=editing;});
 renderPosts();
}
editToggle.addEventListener("click",()=>setEditing(!editing));
$("#doneEditing").addEventListener("click",()=>{save();setEditing(false);alert("Alterações salvas neste navegador!");});
document.addEventListener("input",e=>{if(editing&&e.target.matches("[data-editable]"))save();});
$("#addPost").addEventListener("click",()=>{
 const title=prompt("Título do novo artigo:");if(!title)return;
 const text=prompt("Resumo do artigo:")||"Edite este resumo no próximo acesso ao modo de edição.";
 posts.unshift({id:Date.now(),title,text,category:"NOVO ARTIGO",image:"purple"});renderPosts();save();
});
$("#exportContent").addEventListener("click",()=>{
 const blob=new Blob([JSON.stringify(snapshot(),null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);
 const a=document.createElement("a");a.href=url;a.download="checkpoint-games-conteudo.json";a.click();URL.revokeObjectURL(url);
});
$("#importContent").addEventListener("change",e=>{
 const file=e.target.files[0];if(!file)return;const reader=new FileReader();
 reader.onload=()=>{try{const data=JSON.parse(reader.result);if(data.content)Object.entries(data.content).forEach(([k,v])=>{const el=$(`[data-editable="${CSS.escape(k)}"]`);if(el)el.innerHTML=v;});if(Array.isArray(data.posts)){posts=data.posts;renderPosts();}save();alert("Conteúdo importado!");}catch(err){alert("Arquivo inválido.");}};
 reader.readAsText(file);e.target.value="";
});
$("#closeDialog").addEventListener("click",()=>$("#articleDialog").close());
$("#articleDialog").addEventListener("click",e=>{if(e.target===$("#articleDialog"))$("#articleDialog").close();});
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$$("nav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
$("#contactForm").addEventListener("submit",e=>{
 e.preventDefault();const data=new FormData(e.currentTarget);
 const subject=encodeURIComponent("Mensagem pelo site Checkpoint Games");
 const body=encodeURIComponent(`Nome: ${data.get("name")}\nE-mail: ${data.get("email")}\n\nMensagem:\n${data.get("message")}`);
 location.href=`mailto:projetoivob2@gmail.com?subject=${subject}&body=${body}`;
});
applySaved();
