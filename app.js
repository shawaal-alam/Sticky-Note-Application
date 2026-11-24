// var firstname = "Shawaal "
// var lastname = "Alam "

// document.writeln(`<h1> Wellcome: ${firstname} ${lastname} user </h1> `)


// var num = 10
// document.writeln(`10 x 1 = ${num * 1} <br />`)

// var num1 = 10
// document.writeln("10 x 1 = " + num1 * 1 + "<br />")

// var num = 10
// document.writeln("10 x 2 = " + num * 2 + "<br />")



// var parent = document.getElementById("parent")

// var h1Element = document.createElement("h1")
// var h1Text = document.createTextNode("Hello world")
// // h1Element.innerHTML = "Hello world"
// console.log(h1Text, "h1Text")

// h1Element.append(h1Text)
// console.log(h1Element, "h1Element")

// parent.appendChild(h1Element)




// var parent = document.getElementById("parent")
// for(var i = 1 ; i<=10 ; i++){

//     console.log(i)

//     var mycards = `<div class="card" style="width: 18rem;">
//   <div class="card-body">1
//     <h5 class="card-title"> ${i} Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
//    </div>`
//     parent.innerHTML += mycards   // mycards 1 qisam ka child hai parent ka 
// }



// var parent = document.getElementById("parent")
// for(var i = 1 ;i<=10;i++ ){

//     console.log(i)

//     var cards =   ` <div class="card" style="width: 18rem;">
//         <div class="card-body">
//             <h5 class="card-title"> ${i} Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s
//                 content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>`

//   parent.innerHTML += cards    //  + humne isliye lagaya k note text hamare pass update hota rahe 10 time tak ui par show ho

// }



// var parent = document.getElementById("parent")

// for(var i = 1 ; i <= 10 ; i++){
// console.log(i)
//     var parentdiv = document.createElement("div")
//     parentdiv.className = "card"
//     parentdiv.style.width = "18rem"

//     var cardbodydiv = document.createElement("div")

//     cardbodydiv.className = "card-body"

//    var cardtitleh5 = document.createElement("h5")
//     cardtitleh5.className = "card-title"
//    cardtitleh5.innerHTML = i+" Card Note"

//    var para = document.createElement("p")
//    para.className = "card-text"
//    para.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card’s content"

//    cardbodydiv.append(cardtitleh5)
//    parentdiv.append(cardbodydiv)
//    cardtitleh5.append(para)

//    parent.append(parentdiv)

// }  







 // NOTE APPLICATION   ====>   1 


var parent = document.getElementById("parent")

function  Addnote(){
    var input =document.getElementById("input")
    //   console.log(input.value)
      if(input.value.length <5){
        alert("min 5 corrector")
        return   // hamari input   value/text/length  agar 5 se kam hai to  alert chalao  our return kar do  
    }

    var cardUI = `<div class="card" style="width: 20rem ;" >
          <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
        <div class="card-body" id="">
            <h5 class="card-title">${input.value}</h5>
                <button class= "btn btn-info" onclick="editbtn(this)">Edit </button>
                <button class= "btn btn-danger" onclick = " deletebtn(this)">delete</button>
            
            </div>
        </div>`

        parent.innerHTML += cardUI
        input.value = ""

}

function  deletebtn(deleteelem){
 deleteelem.parentNode.parentNode.remove()

}


function  editbtn(editelem){
   console.log(editelem.previousElementSibling)
  var editevalue =  prompt("Enter Edit value", editelem.previousElementSibling.innerHTML)
  editelem.previousElementSibling.innerHTML = editevalue
} 




function deleteAll(){
    parent.innerHTML = ""
}