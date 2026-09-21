const IMG = 'https://www.daisyazyl.cz/images/animals/';
const WEB = 'https://www.daisyazyl.cz/sverenec/kocka-';

const STORIES = [
  { slug:'vojtisek', name:'Vojtíšek', sub:'kocourek · trvalý obyvatel azylu', tag:'Ochrnuté koťátko',
    imgs:['k8dEKaySlk-1200','6Py9wrPJB6-1200','9SymLv17h1-1200'],
    before:'Doplazil se na cizí zahradu se zoufalým nářkem – ochrnutý na zadní nožičky, s pánví rozdrcenou na několika místech. Starší zranění, nejspíš po autě, které musel v bolestech přečkat sám.',
    now:'Bez složité operace, jen díky rehabilitaci a péči, začal znovu chodit. Dnes šplhá po stěnách a pozoruje svět z výšek. Obrovský mazel, který u nás zůstane natrvalo.',
    care:['rehabilitace','RTG na klinice v Praze','léčba horeček a průjmů','doživotní dohled'] },
  { slug:'uhlik', name:'Uhlík', sub:'kocour · trvalý obyvatel azylu', tag:'Postřelený',
    imgs:['dlqyxPlgHk-1200','GmKFR-Au6g-1200'],
    before:'Nalezen u lesa v kaluži krve. Rentgen odhalil, že byl postřelen – úlomky střely mu poškodily míchu i tkáň kolem plic. Zůstal ochrnutý a odkázaný na pomoc druhých.',
    now:'Přes všechno utrpení je z něj neuvěřitelný mazel, kterému říkáme „pan kocourek“. S fyzioterapií nacvičujeme spinální chůzi a každý den mu pomáháme s vyprazdňováním.',
    care:['fyzioterapie','ruční vymačkávání','neustálý dohled','speciální dieta'] },
  { slug:'simba', name:'Simba', sub:'kocour · našel domov', tag:'Měl být utracen',
    imgs:['3of_aofCCN-400','_Nva5jii-m-720','WEUZb9gREV-800'],
    before:'Devítiměsíční kotě srazilo auto a zlomilo mu čelist. Majitel ho přivezl na veterinu s jediným požadavkem – utratit. Paní doktorka odmítla a zavolala nám.',
    now:'Po náročné operaci a fixaci čelisti drátky začal sám baštit a hrát si. Z kocourka určeného k eutanazii je dnes šťastný, veliký kocour ve svém novém domově.',
    care:['operace čelisti v Hradci Králové','odstranění sraženiny z ucha','rekonvalescence'] },
  { slug:'snezenka', name:'Sněženka', sub:'kočička · hledá virtuálního adoptivce', tag:'Vyhozená přes plot',
    imgs:['AY6A7OacW6-1200','aNFHWvC3Of-1200','2EuC0aJLwF-1200'],
    before:'Někdo ji i se sourozenci přehodil přes plot statku jako odpad. Nejdrobnější z koťat, usoplená, se zvětšeným srdcem a těžce zasaženými plícemi – bojovala o každý nádech.',
    now:'Po opakovaných hospitalizacích a týdnech v kyslíkovém stanu se krok za krokem zlepšila. Díky vlastnímu oxygenerátoru mohla léčba probíhat přímo v azylu.',
    care:['kyslíkový stan','opakovaná hospitalizace','klidový režim','dlouhodobá léčba plic'] },
  { slug:'felix-z-marnice', name:'Felix z márnice', sub:'kocour · senior v azylu', tag:'Roky na hřbitově',
    imgs:['n-ubmpLeFr-1200','YYF9P3uZqd-1200','rn9kM9opL--1200'],
    before:'Dlouhé roky přežíval v bývalé márnici na hřbitově v Jaroměři. Přišel extrémně zesláblý, se zánětem očí, horečkou a velmi špatným krevním obrazem.',
    now:'Vyšetření odhalila oční formu FIP a neregenerativní anémii. Léčba zabírá a Felix je neuvěřitelný bojovník – přejeme mu u nás ten nejdelší a nejklidnější kočičí důchod.',
    care:['léčba FIP','železo a vitamin B12','pohotovost Hradec Králové'] },
  { slug:'kaja', name:'Kája', sub:'kočička · trvalá obyvatelka azylu', tag:'Dvakrát odepsaná',
    imgs:['ihY58Ov_7i-1200','HflV3kfg7s-1200','nN7tPzQson-1200'],
    before:'Srazil ji řidič a ujel. Zůstala ležet s ochrnutýma nohama. Dvě kliniky po rentgenu nabídly jediné řešení: „Utratit. Bude to moc práce.“',
    now:'U nás se ukázalo, že nožičkami hýbe a reaguje na dotek. Dnes se pohybuje s lehkostí a je živým důkazem, že zvíře s komplikací není „odpad k likvidaci“.',
    care:['rehabilitace','kompletní vyšetření','každodenní péče'] },
  { slug:'fanda', name:'Fanda', sub:'kocour · záchrana ze Svémyslic 2026', tag:'Ze skládky',
    imgs:['18QoV2dfZD-1200','Vg3xz8E1jP-1200','tHXru9Ivpq-1200'],
    before:'Žil v odpadcích na skládce ve Svémyslicích. Krátce po záchraně přestal jíst, měl bledé sliznice a kolaboval – kritická anémie.',
    now:'Život mu zachránila transfuze krve, kterou daroval náš azylový kocour Mikeš. Léčba mykoplazmat se daří a Fanda je mazlivý parťák, který si pro pohlazení chodí sám.',
    care:['noční pohotovost','krevní transfuze','léčba mykoplazmat','dočasná péče'] },
  { slug:'eliska', name:'Eliška', sub:'kočičí seniorka · našla domov', tag:'10 let na ulici',
    imgs:['65dgOF8lWK-1200','MZ_IY_C-TG-1200','eaCTu3DZi2-1200'],
    before:'Většinu z deseti let prožila jako pouliční kočka. Majitelé ji opustili, pak odvezli na druhý konec města – vychrtlá a zbídačená se po sedmi měsících vrátila a spala na schodech.',
    now:'V azylu nabrala síly a ocenila klid a plnou mističku. Dnes si užívá nejkrásnější kočičí důchod v adopci u své nové paničky.',
    care:['výživa a péče o játra','vyšetření','adopce'] },
];

const RESIDENTS = [
  ['arya','Arya','7pXCfrO_lh-800'],['kiara','Kiara','yjU3iDnLRQ-1086'],['pajda','Pajda','UD8Xz4Nfw0-800'],
  ['mikes','Mikeš','Y11Xchg5hc-1200'],['andulka','Andulka','bHjCOg76wV-1200'],['bobisek','Bobíšek','bxxZnPUVCv-1200'],
  ['noemi','Noemi','42qV9mHmRW-1200'],['bee','Bee','bnRakz5Xg5-1127'],['oliver','Oliver','6V0Oo8eTIr-1200'],
  ['stepanka','Štěpánka','PioIrQv_QC-1200'],['kleofas','Kleofáš','eCRFx96IMo-1200'],['zelfik','Zelfík','HJvrTVN5Pi-1200'],
];

const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

document.getElementById('stories').innerHTML = STORIES.map(s => `
<article class="story">
  <div class="pics">
    <span class="tag">${esc(s.tag)}</span>
    <img class="main" src="${IMG+s.imgs[0]}.webp" alt="${esc(s.name)} z Daisy azylu" loading="lazy">
    ${s.imgs.length>1?`<div class="thumbs">${s.imgs.map((im,i)=>`<button class="${i?'':'on'}" data-src="${IMG+im}.webp" aria-label="Fotka ${i+1}"><img src="${IMG+im}.webp" alt="" loading="lazy"></button>`).join('')}</div>`:''}
  </div>
  <div class="txt">
    <h3>${esc(s.name)}</h3>
    <div class="sub">${esc(s.sub)}</div>
    <div class="phase"><div class="lbl">Když k nám přišel${/a$|ka$/.test(s.name)?'a':''}</div><p>${esc(s.before)}</p></div>
    <div class="phase now"><div class="lbl">Dnes</div><p>${esc(s.now)}</p></div>
    <ul class="care">${s.care.map(c=>`<li>${esc(c)}</li>`).join('')}</ul>
    <a class="more" href="${WEB+s.slug}/" target="_blank" rel="noopener">Celý příběh na daisyazyl.cz ↗</a>
  </div>
</article>`).join('');

document.querySelectorAll('.thumbs button').forEach(b => b.addEventListener('click', () => {
  const pics = b.closest('.pics');
  pics.querySelector('.main').src = b.dataset.src;
  pics.querySelectorAll('.thumbs button').forEach(x => x.classList.toggle('on', x === b));
}));

document.getElementById('residents').innerHTML = RESIDENTS.map(([slug,name,img]) =>
  `<a class="res" href="${WEB+slug}/" target="_blank" rel="noopener"><img src="${IMG+img}.webp" alt="${esc(name)}" loading="lazy"><span>${esc(name)}</span></a>`).join('');

/* --- QR platby: SPAYD (QR Platba ČBA) s rozšířením pro trvalý příkaz (FRQ, DT) --- */
const IBAN = 'CZ3206000000000267695286';
function firstPaymentDate(){
  const d = new Date(); d.setDate(d.getDate() + 1);
  return d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0');
}
function spayd(amount){
  return ['SPD','1.0','ACC:'+IBAN,'AM:'+amount.toFixed(2),'CC:CZK','FRQ:1M','DT:'+firstPaymentDate(),
          'RN:DAISY AZYL Z.S.','MSG:PRAVIDELNY DAR DAISY AZYL'].join('*');
}
const TIERS = [
  { am:39,  what:'Na krmivo pro kočky, které o jídlo roky bojovaly.' },
  { am:179, what:'Na odčervení, očkování, léky a kastrace nováčků.', best:true },
  { am:329, what:'Na vyšetření, operace a léčbu nejtěžších případů.' },
];
document.getElementById('qrs').innerHTML = TIERS.map(t => {
  const qr = qrcode(0, 'M'); qr.addData(spayd(t.am)); qr.make();
  const url = qr.createDataURL(8, 2);
  return `<div class="qr${t.best?' best':''}">
    ${t.best?'<span class="rib">Nejčastější volba</span>':''}
    <div class="amt">${t.am} Kč</div><div class="per">měsíčně · trvalý příkaz</div>
    <div class="what">${t.what}</div>
    <div class="code"><img src="${url}" alt="QR kód pro trvalý příkaz ${t.am} Kč měsíčně"></div>
    <div class="scan">Naskenujte v mobilním bankovnictví</div>
    <a class="dl" href="${url}" download="daisy-azyl-qr-${t.am}kc.gif">Stáhnout QR kód</a>
  </div>`;
}).join('');

document.querySelectorAll('.copy').forEach(b => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'zkopírováno ✓'; }
  catch(e) { b.textContent = b.dataset.copy; }
  setTimeout(() => b.textContent = 'kopírovat', 2000);
}));
