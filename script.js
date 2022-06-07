'use strict';
alert("Don't refresh otherwise you will loose progress !");
const score = document.getElementById('score');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const score3 = document.getElementById('score3');
const vat = document.querySelectorAll('.vatika');
const pit = document.querySelectorAll('.paittika');
const kaph = document.querySelectorAll('.kaphaj');

const func = function () {
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0;

  for (let i = 0; i < vat.length; i++) {
    if (vat[i].checked) {
      sum1 += Number(vat[i].value);
    }
  }
  for (let i = 0; i < pit.length; i++) {
    if (pit[i].checked) {
      sum2 += Number(pit[i].value);
    }
  }
  for (let i = 0; i < kaph.length; i++) {
    if (kaph[i].checked) {
      sum3 += Number(kaph[i].value);
    }
  }
  score1.textContent = `${((sum1 / 34) * 100).toFixed(2)} %`;
  score2.textContent = `${((sum2 / 34) * 100).toFixed(2)} %`;
  score3.textContent = `${((sum3 / 34) * 100).toFixed(2)} %`;
};
score.addEventListener('click', func);
