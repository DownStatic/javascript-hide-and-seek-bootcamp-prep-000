function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector(".target")
}

function increaseRankBy(n){
  var lists = document.querySelectorAll(".ranked-list")
  for (let i= 0; i<lists.length;i++){
    lists[i].innerHTML = parseInt(n) + parseInt(lists[i].innerHTML)
  }
}