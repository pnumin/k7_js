document.addEventListener('DOMContentLoaded', () => {
  const txt1 = document.querySelector('#txt1') ;
  const bt81 = document.querySelectorAll('.bt81') ; 
  const bt82 = document.querySelectorAll('.bt82') ; 

  let arr = [] ;
  let obj = {
    '사과' : '🍎',
    '바나나' : '🍌',
    '오렌지' : '🍊', 
    '수박' : '🍉',
  }

  //배열 추가
  for (let bt of bt81) {
    bt.addEventListener('click', (e)=>{
      e.preventDefault();
      console.log(bt.textContent)

      // if (bt.textContent == '사과') arr.push('🍎') ;
      // else if (bt.textContent == '바나나') arr.push('🍌') ;
      // else if (bt.textContent == '오렌지') arr.push('🍊') ;
      // else if (bt.textContent == '수박') arr.push('🍉') ;

      arr.push(obj[bt.textContent]) ;
      txt1.value = arr.join(' ') ;
    });
  }

  //배열 삭제
  for(let bt of bt82) {
    bt.addEventListener('click', (e)=>{
      e.preventDefault() ;

      console.log(arr)
      console.log(obj[bt.textContent.replace('삭제', '')])

      //배열 필터
      const k = obj[bt.textContent.replace('삭제', '')] ;
      // arr = arr.filter((item) => { return item != k});
      arr = arr.filter( item => item != k);

      txt1.value = arr.join(' ') ;
    });
  }
});