// scripts.js - abre video modal y ejercicios
document.addEventListener('DOMContentLoaded',() => {
  // modal elements
  const modal = document.getElementById('videoModal');
  const videoWrapper = document.getElementById('videoWrapper');
  const modalClose = document.getElementById('modalClose');

  // open modal when any .video-thumb clicked
  document.querySelectorAll('.video-thumb').forEach(v=>{
    v.addEventListener('click',()=>{
      const src = v.dataset.video;
      videoWrapper.innerHTML = <iframe src="${src}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
      modal.style.display='flex';
    });
  });

  // close
  const closeModal = ()=>{
    modal.style.display='none';
    videoWrapper.innerHTML='';
  };
  if(modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });

  // index quiz
  const qCheck = document.getElementById('q-check');
  if(qCheck){
    qCheck.addEventListener('click',()=>{
      const a = document.getElementById('q-answer').value.toLowerCase();
      const res = document.getElementById('q-result');
      const ok = ['mi','unos','mi,unos','unos,mi']; // respuestas aceptadas
      const clean = a.replace(/\s+/g,'').replace(/,/g,',');
      if(ok.includes(clean) || clean.includes('mi') && clean.includes('unos')) {
        res.textContent = '✅ Bien: "mi" y "unos" son determinantes.';
        res.style.color='green';
      } else {
        res.textContent = '❌ Intenta de nuevo. Busca palabras que acompañen al sustantivo.';
        res.style.color='crimson';
      }
    });
  }

  // James exercise
  const jCheck = document.getElementById('j-check');
  if(jCheck){
    jCheck.addEventListener('click',()=>{
      const a = document.getElementById('j-answer').value.toLowerCase();
      const r = document.getElementById('j-result');
      if(a.includes('aquellos') && a.includes('dos')) {
        r.textContent='✅ Correcto: "aquellos" (demostrativo) y "dos" (numeral).';
        r.style.color='green';
      } else {
        r.textContent='❌ Faltan determinantes. Intenta mencionar "aquellos" y "dos".';
        r.style.color='crimson';
      }
    });
  }

  // Pablo activity
  const pCheck = document.getElementById('p-check');
  if(pCheck){
    pCheck.addEventListener('click',()=>{
      const a = document.getElementById('p-answer').value.toLowerCase();
      const r = document.getElementById('p-result');
      // ver si contiene un demostrativo, un posesivo y un numeral simple
      const dem = ['este','ese','aquellos','aquel','estos','esas','aquella'];
      const pos = ['mi','tu','su','nuestro','mis','tus','sus'];
      const num = ['uno','dos','tres','primero','segundo','tercero'];
      const hasDem = dem.some(w=>a.includes(w));
      const hasPos = pos.some(w=>a.includes(w));
      const hasNum = num.some(w=>a.includes(w));
      if(hasDem && hasPos && hasNum){
        r.textContent='✅ Excelente: tu oración contiene los tres tipos solicitados.';
        r.style.color='green';
      } else {
        r.textContent='❌ Tu oración aún no contiene los tres tipos (demostrativo, posesivo, numeral).';
        r.style.color='crimson';
      }
    });
  }
});
