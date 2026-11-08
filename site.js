
const menuBtn=document.querySelector('.mobile');
const menu=document.querySelector('.menu');
if(menuBtn&&menu) menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));

async function loadNextRace(){
  const el=document.querySelector('[data-next-race]');
  if(!el) return;
  try{
    const r=await fetch('https://api.jolpi.ca/ergast/f1/current/next.json');
    const d=await r.json();
    const race=d?.MRData?.RaceTable?.Races?.[0];
    if(race) el.innerHTML=`<div class="muted">PROSSIMO GP</div><div class="big">${race.raceName}</div><div>${race.Circuit?.circuitName||''}</div><div class="muted">${race.date||''} ${race.time?race.time.slice(0,5):''}</div>`;
  }catch(e){}
}
loadNextRace();
