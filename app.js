
let alese = document.querySelector(".alese");

let btn = document.querySelector(".button.generare");
let btna = document.querySelector(".alege");
let vectales = [];
let vectgen = [];
let nrcastig = 0;
let vectcastig = [];
// btn.addEventListener('click', () => {

//     alese.innerHTML = `

//     <div class="cerc unu">
//             ${vec[0]}
//         </div>
//         <div class="cerc unu">
//             ${vec[1]}
//         </div>
//         <div class="cerc unu">
//         ${vec[2]}
//         </div>
//         <div class="cerc unu">
//         ${vec[3]}
//         </div>
//         <div class="cerc unu">
//         ${vec[4]}
//         </div>
//         <div class="cerc unu">
//         ${vec[5]}
//         </div>

//     `

// })

//functie ce genereza un numar intre 1 si 49 random

let generator = () => {
  return Math.floor(Math.random() * 49 + 1);
};

let generate6 = () => {
  let arr = [];

  while (arr.length < 6) {
    let number = generator();

    if (arr.includes(number) == false) {
      arr.push(number);
    }
  }
  return arr;
};

//functie ce returneaza uun string de tip html cu toate numerel dintr-un vector

let vect2HTML = (vec, where,title) => {
  let sect = document.querySelector("." + where);

    sect.innerHTML = `
        <h1>
            ${title}
        </h1>
        <div class="cerc e1">
            ${vec[0]}
        </div>
        <div class="cerc e2">
            ${vec[1]}
        </div>
        <div class="cerc e3">
        ${vec[2]}
        </div>
    
        <div class="cerc e4">
        ${vec[3]}
        </div>
        <div class="cerc e5">
        ${vec[4]}
        </div>
        <div class="cerc e6">
        ${vec[5]}
        </div>
    `;
};

btn.addEventListener("click", () => {
    let vectx = generate6();
    vect2HTML(vectx, "extras", "Numere extrase");
    let text = ` Ati ghicit `;
  let castig = 0;
  vectcastig = [];
  vectgen = vectx;
    castig = +castig;
    for (let i = 0; i < 6; i++){
        if (vectx.includes(vectales[i])) {
            castig++;
          vectcastig.push(vectales[i]);
        }
    }
    text += `${castig}`;
    if (castig === 0||castig>1) {
        text += ` numere`;
    } else {
        text += ' numar';
    }
 
  nrcastig = castig;
  if (castig > 0) {
    fWin();
  } else {
    fLoose();
  }
});

btna.addEventListener("click", () => {
  let vecta = [];
  let inr = 6;
  let text = "Ati ales : ";
  while (vecta.length < 6) {
    let n = prompt("Adaugati 6 numere din intervalul 1-49 separate prin virgula: ");
    let tmpv = n.split(",").map(Number);
    // n = +n;
    vecta = [];
    for (let m = 0; m < 6; m++) {
      if (tmpv[m] > 0 && tmpv[m] < 50 && !vecta.includes(tmpv[m])) {
        vecta.push(tmpv[m]);
        inr--;
      }
    }
  }
    // if (n > 0 && n < 50 && !vecta.includes(n)) {
    //   vecta.push(n);
    //   inr = vecta.length;
    // }
    // text = "Ati ales : ";
    for (let j = 0; j < vecta.length; j++) {
      text += ` ${vecta[j]}`;
    }

    //alert(text);
    
    
    vectales = vecta;

    vect2HTML(vecta, "alese", "numere alese ");
});

let fWin = () => {



  let body = document.querySelector("body");
  let textNr = ``;
  for (let i = 0; i < vectcastig.length; i++){
    textNr += vectcastig[i] + ',';
 
  }
  if (vectcastig.length === 1) {
    adtext = 'numar';
  }else{
    adtext = "numere";
  }
  let mesaj = textNr.substr(0, textNr.length - 1);
  body.innerHTML = `
  <img src="https://media.giphy.com/media/xUPGcJaL5ODxniWMNO/giphy.gif">
  <h1>
      Ai reusit sa castigi 
  </h1>
  
  <section class="rezultat">
       Ai reusit sa ghicesti ${nrcastig} ${adtext}: ${mesaj}
  </section>
  
  `
  body.innerHTML +=`
  <section class="afis ales">
  <h1>
    Ati ales
</h1>
<div class="cerc e1">
  ${vectales[0]}
</div>
<div class="cerc e2">
  ${vectales[1]}
</div>
<div class="cerc e3">
${vectales[2]}
</div>

<div class="cerc e4">
${vectales[3]}
</div>
<div class="cerc e5">
${vectales[4]}
</div>
<div class="cerc e6">
${vectales[5]}
</div>
  </section>
  <section class="afis generat">
  <h1>
    S-au extras:
</h1>
<div class="cerc e1">
  ${vectgen[0]}
</div>
<div class="cerc e2">
  ${vectgen[1]}
</div>
<div class="cerc e3">
${vectgen[2]}
</div>

<div class="cerc e4">
${vectgen[3]}
</div>
<div class="cerc e5">
${vectgen[4]}
</div>
<div class="cerc e6">
${vectgen[5]}
</div>
  </section>
  `;
}
  
let fLoose = () => {

  let bod = document.querySelector("body");
  //let sect = document.querySelector(".afis.alese")
  bod.innerHTML = `
  <img src="/animated-sad-image-0029.gif">
  <h3>
      Nu ai reusit sa ghicesti niciun numar!
  </h3>
  <section class="afis ales">
  <h1>
    Ati ales
</h1>
<div class="cerc e1">
  ${vectales[0]}
</div>
<div class="cerc e2">
  ${vectales[1]}
</div>
<div class="cerc e3">
${vectales[2]}
</div>

<div class="cerc e4">
${vectales[3]}
</div>
<div class="cerc e5">
${vectales[4]}
</div>
<div class="cerc e6">
${vectales[5]}
</div>
  </section>
  <section class="afis ales">
  <h1>
    S-au extras:
</h1>
<div class="cerc e1">
  ${vectgen[0]}
</div>
<div class="cerc e2">
  ${vectgen[1]}
</div>
<div class="cerc e3">
${vectgen[2]}
</div>

<div class="cerc e4">
${vectgen[3]}
</div>
<div class="cerc e5">
${vectgen[4]}
</div>
<div class="cerc e6">
${vectgen[5]}
</div>
  </section>
  `;
};