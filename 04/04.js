/*
  1. DOM에서 제어할 노드를 가져 오기 
  2. 6개 버튼 클릭을 확인 
  3. 버튼 클릭이 되면 
      - 해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(user) => 이미지 변경
      - 랜덤수를 생성 => 컴퓨터 숫자(com) => 이미지 변경
      - 사용자 선택수(user)와 컴퓨터 선택수(com)을 비교
      - 결과 출력   
*/

document.addEventListener('DOMContentLoaded', ()=>{
  //1. DOM에서 제어할 노드를 가져 오기 
  const comImg = document.getElementById('com') ;
  const userImg = document.querySelector('#user');
  const msg = document.querySelector('#msg');

  const bts = document.querySelectorAll('.bt4') ;
});