
function printRepoCount(responseText) {
    responseObj = JSON.parse(responseText);
    
    console.log(responseObj);
    var i = 0;
    // while( i < responseObj.length){
    //   var diaryRequest = new XMLHttpRequest();
    //   diaryRequest.onload = getDiaryContent;
    //   console.log(responseObj[i].html_url);
    //   // diaryRequest.onload = getDiaryContent(responseObj[i].name);
    //   diaryRequest.open('GET', responseObj[i].html_url, true);
    //   i += 1;
    //   console.log(i);
    // }
      var diaryRequest = new XMLHttpRequest();
      diaryRequest.onload = getDiaryContent;
      console.log(responseObj[i].html_url);

      diaryRequest.onreadystatechange = function () {
        if(diaryRequest.readyState == 4 && diaryRequest.status ==200){
          getDiaryContent(diaryRequest.responseText);
        }
      }
      diaryRequest.open('GET', responseObj[i].html_url, true);
      diaryRequest.send();

  }

function getDiaryContent(responseText){
  console.log('asdasd');
  var contents = responseText;
  document.querySelector("p").innerHTML += contents;
  console.log(responseText);
}

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if(request.readyState == 4 && request.status ==200){
    printRepoCount(request.responseText);
  }
}
request.open('GET', 'https://api.github.com/repos/mayjunjuly0313/Daily_MarkDown/contents/', true);

  request.send();
  

  function ff(){
    alert("assadsad");
  }

  // "markdown-body entry-content container-lg"

  