document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM 완성') ;
  const msg = document.querySelector('#msg') ;
  const btDiv = document.getElementById('btDiv') ;
  const bt1 = document.createElement('button') ;
  const bt1Txt = document.createTextNode('버튼11');

  bt1.setAttribute('id', 'bt11') ;
  bt1.appendChild(bt1Txt) ;
  btDiv.append(bt1) ;

  bt1.addEventListener('click', ()=>{
    if (msg.innerHTML == '') 
      msg.innerHTML = '<h1>안녕하세요!!</h1>' ;
    else 
      msg.innerHTML = '' ;
  });

});