/* Author: 

*/
var index = 0
var max = 6;
var fetchbtn = document.getElementById('getdata')
fetchbtn.addEventListener('click',btnclickhandler)

function btnclickhandler(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
                var json = JSON.parse(xhr.responseText);
                for(var i = index; i < max; i++){
                    var string = (i+1)+") "+json[i].title+":"+json[i].body;
                    var list = document.createElement("li");
                    var textnode = document.createTextNode(string); 
                    list.appendChild(textnode);
                    document.getElementById("myList").appendChild(list);
                    var count = Object.keys(json).length;
                    if(i == count-1){
                      document.getElementById("getdata").style.display = "none";
                      break;
                    }
                }
                index = index+6;
                max = max+6;
            }
    }
    xhr.send()
}




















