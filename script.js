const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const editToggle = $("#editToggle"), editorBar = $("#editorBar");
let editing = false;
let posts = [{"id": 1, "title": "Como escolher seu primeiro PC gamer", "text": "Aprenda a montar um computador equilibrado, entendendo o papel de cada componente antes de investir.", "category": "GUIA • HARDWARE", "image": "neon", "body": [{"type": "p", "text": "Montar ou comprar o primeiro PC gamer pode parecer complicado. São muitos componentes, nomes técnicos e faixas de preço. A melhor forma de começar é pensar nos jogos que você quer jogar, na resolução do seu monitor e em quanto pode investir."}, {"type": "h3", "text": "1. Defina seu objetivo e orçamento"}, {"type": "p", "text": "Faça uma lista dos jogos que pretende jogar e confira os requisitos recomendados. Um computador para jogos competitivos leves tem necessidades diferentes de um PC pensado para lançamentos pesados em alta resolução. Defina também um limite de orçamento e reserve uma parte para monitor, teclado, mouse e headset, caso ainda não tenha esses itens."}, {"type": "h3", "text": "2. Entenda as peças principais"}, {"type": "p", "text": "O <strong>processador (CPU)</strong> executa instruções e influencia o desempenho geral. A <strong>placa de vídeo (GPU)</strong> é especialmente importante para renderizar os gráficos dos jogos. A <strong>memória RAM</strong> ajuda o computador a lidar com várias tarefas, enquanto o <strong>SSD</strong> reduz bastante os tempos de inicialização e carregamento."}, {"type": "p", "text": "A placa-mãe precisa ser compatível com o processador e com a memória escolhida. A fonte deve ter potência e qualidade adequadas ao conjunto; não vale economizar escolhendo uma fonte genérica. Um gabinete com boa circulação de ar também ajuda a manter temperaturas controladas."}, {"type": "h3", "text": "3. Busque equilíbrio, não apenas uma peça potente"}, {"type": "p", "text": "Um erro comum é gastar quase todo o orçamento na placa de vídeo e deixar o restante do computador desequilibrado. Compare testes de desempenho de configurações completas e procure avaliações confiáveis. Verifique também as possibilidades de atualização futura."}, {"type": "h3", "text": "4. Confira antes de comprar"}, {"type": "ul", "items": ["Confirme a compatibilidade entre processador, placa-mãe e memória.", "Confira as dimensões da placa de vídeo e do gabinete.", "Escolha uma fonte de boa qualidade e com conectores adequados.", "Veja a garantia, a reputação da loja e as condições de pagamento.", "Compare o desempenho em jogos que você realmente pretende jogar."]}, {"type": "p", "text": "Não existe uma configuração perfeita para todo mundo. O melhor PC gamer é aquele que atende aos seus jogos, cabe no seu orçamento e permite upgrades quando fizer sentido."}, {"type": "highlight", "text": "Dica Checkpoint: antes de fechar a compra, monte uma lista com todas as peças e peça uma segunda opinião sobre compatibilidade. Isso evita surpresas e gastos desnecessários."}]}, {"id": 2, "title": "O que observar antes de comprar um jogo", "text": "Um roteiro simples para avaliar gameplay, requisitos, avaliações e recursos antes de gastar seu dinheiro.", "category": "DICAS • JOGOS", "image": "purple", "body": [{"type": "p", "text": "Com tantos lançamentos e promoções, escolher um jogo pode ser difícil. Uma capa bonita ou um trailer empolgante nem sempre mostram como será a experiência depois de algumas horas. Antes de comprar, vale pesquisar alguns pontos."}, {"type": "h3", "text": "Conheça o estilo de jogo"}, {"type": "p", "text": "Veja se o título é de ação, aventura, RPG, corrida, estratégia, simulação ou outro gênero. Leia a descrição e assista a trechos de gameplay sem cortes. Assim você entende o ritmo, a câmera, o combate e o tipo de desafio que vai encontrar."}, {"type": "h3", "text": "Confira se roda no seu equipamento"}, {"type": "p", "text": "No PC, compare os requisitos mínimos e recomendados com as especificações da sua máquina. Observe processador, placa de vídeo, memória RAM, espaço em disco e sistema operacional. Requisitos mínimos indicam uma configuração de entrada; os recomendados costumam oferecer uma experiência mais confortável."}, {"type": "h3", "text": "Leia avaliações com atenção"}, {"type": "p", "text": "Não olhe apenas a nota geral. Procure comentários recentes sobre desempenho, bugs, estabilidade dos servidores, atualizações e suporte dos desenvolvedores. Avaliações ajudam mais quando explicam o motivo da opinião, em vez de apenas elogiar ou criticar."}, {"type": "h3", "text": "Veja os recursos e custos extras"}, {"type": "p", "text": "Confira se o jogo é individual ou multiplayer, se exige assinatura para jogar online, se oferece modo cooperativo e se possui compras dentro do jogo. Também vale observar idioma, legendas, acessibilidade, suporte a controle e política de reembolso da loja."}, {"type": "h3", "text": "Faça uma escolha consciente"}, {"type": "ul", "items": ["Assista a gameplay real para entender a jogabilidade.", "Confira requisitos e espaço necessário no armazenamento.", "Pesquise opiniões de jogadores e análises especializadas.", "Verifique se há conteúdo adicional pago ou passe de temporada.", "Compare preços em lojas oficiais e observe as regras de reembolso."]}, {"type": "p", "text": "Comprar com calma aumenta a chance de encontrar um jogo que combine com seu gosto. Se ainda estiver em dúvida, coloque o título na lista de desejos e acompanhe uma promoção."}, {"type": "highlight", "text": "Dica Checkpoint: escolha pelo tipo de experiência que você quer viver, não apenas pela popularidade do momento."}]}, {"id": 3, "title": "E-sports: muito além de apertar botões", "text": "Entenda como treino, estratégia, comunicação e preparação fazem parte dos esportes eletrônicos.", "category": "E-SPORTS • COMPETIÇÃO", "image": "orange", "body": [{"type": "p", "text": "Os esportes eletrônicos, conhecidos como e-sports, transformaram jogos competitivos em eventos acompanhados por comunidades do mundo inteiro. Por trás de uma partida emocionante existe muito mais do que reflexo rápido: há preparação, estudo e trabalho em equipe."}, {"type": "h3", "text": "Treino com objetivo"}, {"type": "p", "text": "Jogadores competitivos praticam fundamentos, aprendem mapas, treinam movimentos e revisam decisões tomadas durante as partidas. Treinar não significa apenas jogar por muitas horas. É importante identificar erros, definir metas e acompanhar a própria evolução."}, {"type": "h3", "text": "Estratégia e comunicação"}, {"type": "p", "text": "Em jogos de equipe, cada pessoa pode ter uma função específica. Compartilhar informações, combinar jogadas e manter a calma em momentos decisivos pode fazer diferença. Uma equipe bem coordenada costuma aproveitar melhor as habilidades individuais."}, {"type": "h3", "text": "Preparação física e mental"}, {"type": "p", "text": "Sono adequado, pausas, alimentação e atividade física contribuem para o bem-estar e a concentração. A pressão de competir também exige controle emocional. Respeitar limites é importante para manter uma rotina sustentável."}, {"type": "h3", "text": "A comunidade faz parte do espetáculo"}, {"type": "p", "text": "Torneios aproximam jogadores, fãs, narradores, criadores de conteúdo e organizações. A comunidade acompanha campeonatos, debate estratégias e celebra grandes jogadas. O respeito entre participantes e espectadores ajuda a tornar o cenário mais saudável."}, {"type": "h3", "text": "Como começar a acompanhar"}, {"type": "ul", "items": ["Escolha um jogo competitivo que você goste de assistir.", "Aprenda as regras e os objetivos principais.", "Acompanhe campeonatos e canais oficiais das equipes.", "Observe como os times se comunicam e adaptam estratégias.", "Participe das comunidades com respeito aos outros jogadores."]}, {"type": "p", "text": "Os e-sports mostram que videogame também pode envolver disciplina, colaboração e espetáculo. Seja competindo ou torcendo, há muitas formas de fazer parte desse universo."}, {"type": "highlight", "text": "GG! No Checkpoint Games, competição boa é aquela que valoriza habilidade, respeito e diversão."}]}, {"id": 4, "title": "Cinco cuidados para conservar seus equipamentos", "text": "Hábitos simples de limpeza, ventilação e organização ajudam a preservar seu setup gamer.", "category": "DICAS • SETUP", "image": "neon", "body": [{"type": "p", "text": "Um setup gamer é um investimento. Poeira, calor, líquidos e falta de cuidado podem reduzir a vida útil dos equipamentos. A boa notícia é que algumas atitudes simples ajudam a manter tudo em boas condições."}, {"type": "h3", "text": "1. Mantenha a ventilação livre"}, {"type": "p", "text": "Deixe espaço ao redor do gabinete e não bloqueie entradas ou saídas de ar. Evite colocar o computador encostado em cortinas, paredes muito próximas ou locais fechados que acumulem calor."}, {"type": "h3", "text": "2. Faça a limpeza com segurança"}, {"type": "p", "text": "Desligue o equipamento e desconecte os cabos antes de limpar. Use pano macio e seco nas superfícies. Para limpeza interna, siga as orientações do fabricante ou procure assistência técnica se não tiver experiência. Nunca aplique líquidos diretamente nos componentes."}, {"type": "h3", "text": "3. Proteja os periféricos"}, {"type": "p", "text": "Evite comer ou beber sobre teclado e mouse. Guarde o headset em suporte adequado e não force os cabos ao conectar ou desconectar. Uma organização simples reduz quedas, torções e danos."}, {"type": "h3", "text": "4. Mantenha software atualizado"}, {"type": "p", "text": "Atualizações do sistema e dos drivers podem corrigir falhas e melhorar a compatibilidade. Baixe arquivos de fontes oficiais e evite programas desconhecidos que prometem otimizações milagrosas."}, {"type": "h3", "text": "5. Use energia com cuidado"}, {"type": "p", "text": "Utilize uma fonte de alimentação confiável e instalações elétricas em boas condições. Se houver quedas frequentes de energia ou dúvidas sobre proteção elétrica, procure orientação técnica adequada."}, {"type": "p", "text": "A manutenção não precisa ser complicada. Criar uma rotina de inspeção e limpeza, respeitando as recomendações de cada fabricante, ajuda a conservar seu computador e seus acessórios."}, {"type": "highlight", "text": "Dica Checkpoint: nunca abra uma fonte de alimentação. Ela pode armazenar cargas perigosas mesmo depois de desligada; procure um profissional."}]}, {"id": 5, "title": "Por que jogar com amigos é tão divertido?", "text": "Cooperação, boas histórias e comunidades mostram que a experiência gamer também é social.", "category": "CULTURA GAMER", "image": "purple", "body": [{"type": "p", "text": "Muitos jogos ficam ainda mais especiais quando compartilhados. Uma missão cooperativa, uma partida disputada ou uma noite tentando superar um desafio podem render histórias que os amigos lembram por muito tempo."}, {"type": "h3", "text": "Cooperar muda a experiência"}, {"type": "p", "text": "Em jogos cooperativos, cada participante pode contribuir de uma maneira. Dividir tarefas, combinar estratégias e ajudar quem está aprendendo cria uma experiência diferente de jogar sozinho."}, {"type": "h3", "text": "A diversão está nos momentos inesperados"}, {"type": "p", "text": "Nem sempre a melhor lembrança é uma vitória. Uma jogada improvisada, um erro engraçado ou uma virada inesperada também podem transformar uma sessão comum em uma memória divertida."}, {"type": "h3", "text": "Comunidades aproximam pessoas"}, {"type": "p", "text": "Fóruns, grupos e comunidades de jogos permitem trocar dicas, encontrar parceiros e conhecer pessoas com interesses parecidos. É importante manter a educação, respeitar diferenças e não compartilhar dados pessoais com desconhecidos."}, {"type": "h3", "text": "Jogue no seu ritmo"}, {"type": "p", "text": "Nem todo mundo tem o mesmo tempo disponível ou o mesmo nível de habilidade. Combinar horários, escolher jogos adequados ao grupo e respeitar pausas ajuda a manter a diversão sem transformar o lazer em obrigação."}, {"type": "p", "text": "No fim, videogame é também uma forma de conexão. Seja em uma aventura cooperativa ou em uma conversa depois da partida, compartilhar a experiência pode ser tão importante quanto vencer."}, {"type": "highlight", "text": "Dica Checkpoint: convide alguém para experimentar um jogo novo com você. Às vezes, a melhor descoberta gamer começa com um convite."}]}, {"id": 6, "title": "Gráficos não são tudo: o que faz um game ser bom?", "text": "Jogabilidade, narrativa, áudio, ritmo e acessibilidade também constroem uma experiência marcante.", "category": "ANÁLISE • JOGOS", "image": "orange", "body": [{"type": "p", "text": "Imagens impressionantes podem chamar atenção em um trailer, mas não garantem que um jogo seja divertido. Uma experiência marcante nasce da combinação de vários elementos que funcionam bem juntos."}, {"type": "h3", "text": "Jogabilidade que responde bem"}, {"type": "p", "text": "Controles precisos e mecânicas compreensíveis ajudam o jogador a sentir que suas decisões importam. Um bom desafio ensina regras, permite experimentar e recompensa a evolução sem depender de frustração artificial."}, {"type": "h3", "text": "Uma história que envolve"}, {"type": "p", "text": "Narrativa não precisa estar presente da mesma forma em todos os gêneros. Em alguns jogos, personagens e diálogos conduzem a experiência; em outros, o próprio mundo, as escolhas e as descobertas contam a história."}, {"type": "h3", "text": "Som, música e atmosfera"}, {"type": "p", "text": "Efeitos sonoros dão retorno às ações, músicas ajudam a criar emoção e o ambiente pode reforçar a sensação de estar dentro daquele universo. O áudio é parte importante da imersão."}, {"type": "h3", "text": "Ritmo, variedade e acessibilidade"}, {"type": "p", "text": "Missões variadas, progressão bem dosada e opções de dificuldade ajudam a manter o interesse. Legendas, remapeamento de controles e ajustes visuais ou sonoros podem tornar o jogo mais acessível a diferentes pessoas."}, {"type": "p", "text": "Gráficos são um recurso poderoso, mas não substituem ideias bem executadas. Um jogo simples visualmente pode ser inesquecível quando oferece mecânicas criativas, personalidade e momentos emocionantes."}, {"type": "highlight", "text": "Pergunta Checkpoint: qual jogo marcou você não pelos gráficos, mas pela experiência que proporcionou?"}]}];
const storageKey = "checkpointGamesContentV1";

function snapshot(){
 const content={}; $$("[data-editable]").forEach(el=>content[el.dataset.editable]=el.innerHTML);
 return {content,posts};
}
let remoteSaveTimer;
function save(){ try{localStorage.setItem(storageKey, JSON.stringify(snapshot()));}catch(e){alert("Não foi possível salvar. Use imagens menores.");}
 if(window.cgSupabase && window.cgAdminSession){clearTimeout(remoteSaveTimer);remoteSaveTimer=setTimeout(async()=>{const {error}=await window.cgSupabase.from("site_content").upsert({id:1,payload:snapshot(),updated_at:new Date().toISOString()});if(error)console.error("Falha ao sincronizar conteúdo",error);},700);}
}
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
  if(post.imageUrl||post.imageData){visual.style.backgroundImage=`linear-gradient(#0002,#0002),url("${post.imageUrl||post.imageData}")`;visual.style.backgroundSize="cover";visual.style.backgroundPosition="center";}
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
function openArticle(post){
 $("#dialogCategory").textContent=post.category||"CHECKPOINT GAMES • ARTIGO";
 $("#dialogTitle").textContent=post.title;
 const body=$("#dialogBody");body.innerHTML="";
 const blocks=Array.isArray(post.body)&&post.body.length?post.body:[{type:"p",text:post.text||"Este artigo ainda não possui conteúdo completo."}];
 blocks.forEach(block=>{
  let el;
  if(block.type==="h3"){el=document.createElement("h3");el.textContent=block.text||"";}
  else if(block.type==="ul"){el=document.createElement("ul");(block.items||[]).forEach(item=>{const li=document.createElement("li");li.textContent=item;el.append(li);});}
  else if(block.type==="highlight"){el=document.createElement("div");el.className="article-highlight";el.textContent=block.text||"";}
  else{el=document.createElement("p");el.textContent=block.text||"";}
  body.append(el);
 });
 $("#articleDialog").showModal();
}
function choosePostImage(id){
 const picker=document.createElement("input");picker.type="file";picker.accept="image/*";
 picker.onchange=async()=>{const file=picker.files[0];if(!file)return;const post=posts.find(x=>x.id===id);if(window.cgSupabase&&window.cgAdminSession){const path=`posts/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`;const {error}=await window.cgSupabase.storage.from("site-images").upload(path,file,{upsert:true});if(error){alert("Falha ao enviar imagem. Confira o bucket e as permissões no Supabase.");return;}post.imageUrl=window.cgSupabase.storage.from("site-images").getPublicUrl(path).data.publicUrl;post.imageData=null;}else{alert("Entre na área administrativa para enviar imagens.");return;}renderPosts();save();};picker.click();
}
function setEditing(value){
 editing=value;document.body.classList.toggle("editing",editing);editorBar.hidden=!editing;
 editToggle.textContent=editing?"✎ Editando":"✎ Editar site";
 $$("[data-editable]").forEach(el=>{el.contentEditable=editing?"true":"false";el.spellcheck=editing;});
 renderPosts();
}

$("#doneEditing").addEventListener("click",()=>{save();setEditing(false);alert("Alterações sincronizadas quando houver conexão com o Supabase.");});
document.addEventListener("input",e=>{if(editing&&e.target.matches("[data-editable]"))save();});
$("#addPost").addEventListener("click",()=>{
 const title=prompt("Título do novo artigo:");if(!title)return;
 const text=prompt("Resumo do artigo:")||"Edite este resumo no próximo acesso ao modo de edição.";
 const full=prompt("Escreva o conteúdo completo do artigo:")||text;
 posts.unshift({id:Date.now(),title,text,category:"NOVO ARTIGO",image:"purple",body:[{type:"p",text:full}]});renderPosts();save();
});
$("#exportContent").addEventListener("click",()=>{
 const blob=new Blob([JSON.stringify(snapshot(),null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);
 const a=document.createElement("a");a.href=url;a.download="checkpoint-games-conteudo.json";a.click();URL.revokeObjectURL(url);
});
$("#importContent").addEventListener("change",e=>{
 const file=e.target.files[0];if(!file)return;const reader=new FileReader();
 reader.onload=()=>{try{const data=JSON.parse(reader.result);if(data.content)Object.entries(data.content).forEach(([k,v])=>{const el=$(`[data-editable="${CSS.escape(k)}"]`);if(el)el.innerHTML=v;});if(Array.isArray(data.posts)){posts=data.posts;renderPosts();}save();alert("Conteúdo importado! Agora clique em Concluir edição para finalizar.");}catch(err){alert("Arquivo inválido.");}};
 reader.readAsText(file);e.target.value="";
});
$("#closeDialog").addEventListener("click",()=>$("#articleDialog").close());
$("#articleDialog").addEventListener("click",e=>{if(e.target===$("#articleDialog"))$("#articleDialog").close();});
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
$$("nav a").forEach(a=>a.addEventListener("click",()=>$("#mainNav").classList.remove("open")));
$("#contactForm").addEventListener("submit",async e=>{
 e.preventDefault();const data=new FormData(e.currentTarget);
 const payload={name:String(data.get("name")),email:String(data.get("email")),message:String(data.get("message"))};
 if(!window.cgSupabase){alert("O formulário ainda precisa da configuração do Supabase.");return;}
 const {error}=await window.cgSupabase.from("opinions").insert(payload);
 if(error){console.error(error);alert("Não foi possível enviar agora. Tente novamente mais tarde.");return;}
 alert("Opinião enviada! Obrigado por contribuir com o Checkpoint Games.");e.currentTarget.reset();
});
// Integração segura com Supabase: credenciais públicas; autorização real via Auth + RLS.
const SUPABASE_URL = "https://kpsyqmilwburtamrdqbg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Vg3JNwU_Qrek84lPFPA09Q_PHyqgqoP";
const ADMIN_EMAIL = "ivonobre90215@gmail.com";
window.cgSupabase = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
window.cgAdminSession = null;
const adminDialog=$("#adminDialog"), adminStatus=$("#adminStatus");
$("#adminOpen").addEventListener("click",()=>adminDialog.showModal());
$("#adminClose").addEventListener("click",()=>adminDialog.close());
$("#adminLoginForm").addEventListener("submit",async e=>{e.preventDefault();adminStatus.textContent="Verificando acesso...";const email=$("#adminEmail").value.trim().toLowerCase(),password=$("#adminPassword").value;
 if(email!==ADMIN_EMAIL){adminStatus.textContent="E-mail não autorizado.";return;}
 const {data,error}=await window.cgSupabase.auth.signInWithPassword({email,password});
 if(error){adminStatus.textContent="Não foi possível entrar. Confira o e-mail e a senha cadastrados no Supabase Auth.";return;}
 window.cgAdminSession=data.session;$("#adminLoginForm").hidden=true;$("#adminTools").hidden=false;adminStatus.textContent="Acesso autorizado.";
 await loadRemoteContent();
});
async function loadRemoteContent(){const {data,error}=await window.cgSupabase.from("site_content").select("payload").eq("id",1).maybeSingle();if(!error&&data?.payload){const payload=data.payload;if(payload.content)Object.entries(payload.content).forEach(([k,v])=>{const el=$(`[data-editable="${CSS.escape(k)}"]`);if(el)el.innerHTML=v;});if(Array.isArray(payload.posts)){posts=payload.posts;renderPosts();}}
 const {data:games}=await window.cgSupabase.from("spotlight_games").select("game_index,image_url,video_url").order("game_index");if(games)games.forEach(row=>{if(spotlightGames[row.game_index]){spotlightGames[row.game_index].imageUrl=row.image_url;spotlightGames[row.game_index].videoUrl=row.video_url;}});showSpotlight(spotlightIndex);
}
$("#adminEdit").addEventListener("click",()=>{setEditing(!editing);adminDialog.close();});
$("#adminLogout").addEventListener("click",async()=>{await window.cgSupabase.auth.signOut();window.cgAdminSession=null;setEditing(false);$("#adminLoginForm").hidden=false;$("#adminTools").hidden=true;$("#adminPassword").value="";adminStatus.textContent="Sessão encerrada.";});
function youtubeEmbed(value){try{const u=new URL(value);let id="";if(u.hostname.includes("youtu.be"))id=u.pathname.slice(1);else if(u.hostname.includes("youtube.com")){id=u.searchParams.get("v")||u.pathname.split("/" ).filter(Boolean).pop();}if(!/^[A-Za-z0-9_-]{11}$/.test(id))return null;return "https://www.youtube-nocookie.com/embed/"+id;}catch{return null;}}
$("#uploadSpotlight").addEventListener("click",async()=>{if(!window.cgSupabase||!window.cgAdminSession){alert("Entre na área administrativa primeiro.");return;}const options=spotlightGames.map((g,i)=>`${i+1}. ${g.title}`).join("\n");const choice=Number(prompt("Qual jogo receberá a mídia?\n"+options+"\nDigite 1, 2 ou 3:"));if(!Number.isInteger(choice)||choice<1||choice>spotlightGames.length)return;const gameIndex=choice-1;const kind=prompt("Digite IMAGEM para enviar uma imagem ou VIDEO para adicionar um link do YouTube:");if(!kind)return;let values={game_index:gameIndex};if(kind.trim().toLowerCase().startsWith("v")){const raw=prompt("Cole o link do vídeo do YouTube:");if(!raw)return;const embed=youtubeEmbed(raw);if(!embed){alert("Link inválido. Use um vídeo normal do YouTube ou youtu.be.");return;}values.video_url=embed;}else{const picker=document.createElement("input");picker.type="file";picker.accept="image/jpeg,image/png,image/webp,image/gif";picker.onchange=async()=>{const file=picker.files[0];if(!file)return;if(file.size>5*1024*1024){alert("A imagem deve ter no máximo 5 MB.");return;}const path=`spotlight/${gameIndex}-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`;const {error}=await window.cgSupabase.storage.from("site-images").upload(path,file,{upsert:true});if(error){alert("Falha no upload: "+error.message+". Execute o SQL atualizado no Supabase para criar o bucket e as permissões.");return;}values.image_url=window.cgSupabase.storage.from("site-images").getPublicUrl(path).data.publicUrl;await saveSpotlightMedia(values,gameIndex,"imagem");};picker.click();return;}await saveSpotlightMedia(values,gameIndex,"vídeo");adminDialog.close();});
async function saveSpotlightMedia(values,index,label){const {error}=await window.cgSupabase.from("spotlight_games").upsert(values);if(error){alert("Não foi possível salvar: "+error.message+". Execute o SQL atualizado no Supabase.");return;}if(values.image_url)spotlightGames[index].imageUrl=values.image_url;if(values.video_url)spotlightGames[index].videoUrl=values.video_url;showSpotlight(spotlightIndex);alert(""+label.charAt(0).toUpperCase()+label.slice(1)+" salvo para "+spotlightGames[index].title+"!");adminDialog.close();}
async function loadPublicContent(){if(!window.cgSupabase)return;const {data}=await window.cgSupabase.from("site_content").select("payload").eq("id",1).maybeSingle();if(data?.payload){const payload=data.payload;if(payload.content)Object.entries(payload.content).forEach(([k,v])=>{const el=$(`[data-editable="${CSS.escape(k)}"]`);if(el)el.innerHTML=v;});if(Array.isArray(payload.posts)){posts=payload.posts;renderPosts();}}const {data:games}=await window.cgSupabase.from("spotlight_games").select("game_index,image_url,video_url").order("game_index");if(games)games.forEach(row=>{if(spotlightGames[row.game_index]){spotlightGames[row.game_index].imageUrl=row.image_url;spotlightGames[row.game_index].videoUrl=row.video_url;}});showSpotlight(spotlightIndex);}
(async()=>{if(!window.cgSupabase)return;await loadPublicContent();const {data}=await window.cgSupabase.auth.getSession();if(data?.session?.user?.email?.toLowerCase()===ADMIN_EMAIL){window.cgAdminSession=data.session;await loadRemoteContent();}})();

applySaved();


// Banner rotativo: alterna recomendações automaticamente e permite navegação manual.
const spotlightGames = [
 {title:"Cyberpunk 2077",category:"RPG • MUNDO ABERTO",description:"Explore Night City em uma aventura futurista de ação e escolhas, em um mundo marcado por tecnologia e conflitos.",rating:"Classificação indicativa: 18 anos. Contém violência, linguagem imprópria e temas adultos.",url:"https://www.cyberpunk.net/",kicker:"NIGHT CITY • RPG",art:"CYBER<br>PUNK",artClass:"art-cyberpunk",mark:"CG / 01"},
 {title:"The Witcher 3: Wild Hunt",category:"RPG • FANTASIA",description:"Embarque em uma jornada de fantasia como Geralt de Rívia, explorando um mundo cheio de missões, criaturas e escolhas.",rating:"Jogo com violência e temas maduros. Consulte a classificação indicativa oficial da sua edição e região.",url:"https://www.thewitcher.com/",kicker:"CONTINENTE • FANTASIA",art:"THE<br>WITCHER",artClass:"art-witcher",mark:"CG / 02"},
 {title:"Forza Horizon 5",category:"CORRIDA • MUNDO ABERTO",description:"Acelere por paisagens inspiradas no México, descubra eventos e personalize sua experiência sobre quatro rodas.",rating:"Consulte a classificação indicativa oficial da sua edição e região antes de jogar.",url:"https://forza.net/",kicker:"HORIZON • RACING",art:"FORZA<br>HORIZON",artClass:"art-forza",mark:"CG / 03"}
];
let spotlightIndex=0;
let spotlightTimer;
let spotlightMediaTimer;
let spotlightShowingVideo=false;
function youtubePlayerUrl(value){try{const u=new URL(value);let id="";if(u.hostname.includes("youtu.be"))id=u.pathname.slice(1);else if(u.hostname.includes("youtube.com")||u.hostname.includes("youtube-nocookie.com")){id=u.searchParams.get("v")||u.pathname.split("/").filter(Boolean).pop();}if(!/^[A-Za-z0-9_-]{11}$/.test(id))return null;return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=1&rel=0&playsinline=1&loop=1&playlist=${id}`;}catch{return null;}}
function renderSpotlightMedia(){const game=spotlightGames[spotlightIndex];const image=$("#spotlightImage");const video=$("#spotlightVideo");const hasImage=!!game.imageUrl;const videoUrl=game.videoUrl?youtubePlayerUrl(game.videoUrl):null;const hasVideo=!!videoUrl;let useVideo=spotlightShowingVideo&&hasVideo;if(!hasImage&&hasVideo)useVideo=true;if(!hasVideo&&hasImage)useVideo=false;if(useVideo){image.hidden=true;image.removeAttribute("src");video.hidden=false;const current=video.getAttribute("src");if(current!==videoUrl)video.src=videoUrl;}else{video.hidden=true;video.removeAttribute("src");if(hasImage){image.src=game.imageUrl;image.hidden=false;}else{image.hidden=true;image.removeAttribute("src");}}}
function showSpotlight(index){
 const game=spotlightGames[index];
 const art=$("#spotlightArt");
 if(!art)return;
 const gameImage=$("#spotlightImage");
 renderSpotlightMedia();
 if(game.imageUrl||game.videoUrl){art.classList.add("has-game-image");}else{art.classList.remove("has-game-image");}
 $("#spotlightCategory").textContent=game.category;
 $("#spotlightTitle").textContent=game.title;
 $("#spotlightDescription").textContent=game.description;
 $("#spotlightRating").textContent=game.rating;
 $("#spotlightLink").href=game.url;
 $("#spotlightKicker").textContent=game.kicker;
 $("#spotlightArtTitle").innerHTML=game.art;
 $(".spotlight-art-mark",art).textContent=game.mark;
 art.className="spotlight-art "+game.artClass;if(game.imageUrl||game.videoUrl)art.classList.add("has-game-image");
 $("#spotlightCount").textContent=String(index+1).padStart(2,"0")+" / 03";
 $$("#spotlightDots button").forEach((dot,i)=>dot.classList.toggle("active",i===index));
 const card=$("#spotlightCard");card.style.animation="none";void card.offsetWidth;card.style.animation="";
}
function moveSpotlight(step){
 spotlightIndex=(spotlightIndex+step+spotlightGames.length)%spotlightGames.length;
 showSpotlight(spotlightIndex);restartSpotlight();
}
function restartSpotlight(){
 clearInterval(spotlightTimer);clearInterval(spotlightMediaTimer);spotlightShowingVideo=false;renderSpotlightMedia();
 spotlightMediaTimer=setInterval(()=>{const game=spotlightGames[spotlightIndex];if(game.imageUrl&&game.videoUrl){spotlightShowingVideo=!spotlightShowingVideo;renderSpotlightMedia();}},6000);
 spotlightTimer=setInterval(()=>{spotlightIndex=(spotlightIndex+1)%spotlightGames.length;spotlightShowingVideo=false;showSpotlight(spotlightIndex);},12000);
}
if($("#spotlightCard")){
 $("#spotlightPrev").addEventListener("click",()=>moveSpotlight(-1));
 $("#spotlightNext").addEventListener("click",()=>moveSpotlight(1));
 $$("#spotlightDots button").forEach((dot,i)=>dot.addEventListener("click",()=>{spotlightIndex=i;showSpotlight(i);restartSpotlight();}));
 showSpotlight(0);restartSpotlight();
}
