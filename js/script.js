// Business Logic
function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element) && element.trim().length !== 0) {
      wordCount++;
    }
  });
  return wordCount;
}
 
// function removeDuplicate(array){
//   return [...new Set(array)]
// }

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word,text)){
    return "";
  }
  let wordCount = 0
  let textArray = text.split(" ")
  if (word == "") {
    return 0
  }
  textArray.forEach(function (element) {
    if (element.toUpperCase().includes(word.toUpperCase())) {
      wordCount++
    }
  })
  return wordCount
}

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  const regexWord = new RegExp(word, "gi");
  const boldedWord = "<b>" + word + "</b>";
  const htmlString = text.replace(regexWord, boldedWord);
  return "<p>" + htmlString + "</p>";
}


function offensiveWord(sentence){
  let htmlString = "<p>";
  let offensiveWord = ["Zoink","muppeteer","biffaron","loopdaloo"]
  let wordArray = sentence.split(" ")
  wordArray.forEach(function(element, index){
    offensiveWord.forEach(function(element2){
      if(element === element2){
        element =("<b>" + element.charAt() +"</b>" + "****")
      }
    })
    htmlString = htmlString.concat(element)
    if(index !== (wordArray.length - 1)){
      htmlString = htmlString.concat(" ")
    }
  })
  return htmlString + "</p>"
}

function threeMostCommon(sentence){
  let countArray = []
  let wordArray = sentence.split(" ");
  let spaceFilter = []
  let sortedArray = []
  wordArray.forEach(function(element){
    if(element.trim() !==""){
      spaceFilter.push(element);
    }
  });
  let Html ="<p>"
  let filteredArray = [...new Set(spaceFilter)]
  filteredArray.forEach(function(element1){
    let counter = 0
    spaceFilter.forEach(function(element2){
      if(element1 === element2){
        counter ++;
      }

     
    });
    countArray.push([ element1 ,counter ])
  });
 forSort(countArray)
if (countArray.length > 3){
  for(let i = 0; i < 3; i++){
    Html = Html.concat("<b>" + countArray[i][0] + "</b>" + ":" + countArray[i][1] + "<br>")
  }
}else 
  for(let i = 0; i < countArray.length; i++){
     Html = Html.concat("<b>" + countArray[i][0] + "</b>" + ":" + countArray[i][1] + "<br>")
  }
  return Html + "<p>"
}

function forSort(element){
  element.sort(function(a,b){
    return b[1]-a[1]
  })
  return element
}

// function boldPassage(word, text) {
//   let offensiveWord = ["Zoink","muppeteer","biffaroni","loopdaloop"]
//   let htmlString = "<p>";
//   let textArray = text.split(" ");
  
 
//   textArray.forEach(function (element, index) {
//     // if (element =offensiveWord ){
//     //  newElement =  htmlString.replace( "<b>" + element.charAt() + "</b>"+"***")
//     // }
//     if (element.toUpperCase().includes(word.toUpperCase())) {
//       let newElement = element.replace(word, "<b>" + word + "</b>")
//       htmlString = htmlString.concat( newElement );
//     } else {
//       htmlString = htmlString.concat(element);
//     }
//     if (index !== (textArray.length - 1)) {
//       htmlString = htmlString.concat(" ");
//     }
//     offensiveWord.forEach(function(element2){
    
//       if (element === element2){
//         //  htmlString = htmlString.concat( "<b>" + offensiveWord.charAt() + "</b>");
//         htmlString = htmlString.concat( "<b>" + element.charAt() + "</b>"+"***")
//       }
//     })
//     return htmlString
//   });
//   return htmlString  + "</p>";
  
// }


// utility function
function noInputtedWord(){
  for (let i = 0; i < arguments.length; i++){
  if (arguments[i].trim().length === 0){
    return true;
  }
  }
  return false;
} 

$(document).ready(function () {
  $("#word").submit(function (event) {
    event.preventDefault()

    let sentence = $("#new").val()
    let word = $("#new2").val()
    let count = wordCounter(sentence)
    let wordCount = numberOfOccurrencesInText(word, sentence)
    let result4 = offensiveWord(sentence)
    let result3 = boldPassage(word, result4)
    let result5 = threeMostCommon(sentence)


    $("#show").text(count)
    $("#show2").text(wordCount)
    $("#bolded-passage").html(result3)
    $("#ff").html(result5)
    // $("#pf").html(result5)
  })




})
