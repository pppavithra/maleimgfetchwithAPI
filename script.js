//function ->
function createNode(element){
    return document.createElement(element);
}


//we are parent-child
function getappend(pe,el){
    return pe.appendChild(el);
}

//select the element
const ulelement=document.getElementById("imglst");
const url="https://randomuser.me/api/?gender=male&results=200";//url

//Fetch the data ->console 
fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data.results);
     let randomuserobj = data.results;

      randomuserobj.map((obj)=>{
        //create element 
        let lielement=createNode("li");
        let imgelement=createNode("img");
        let spantag=createNode("h5");//created span tag->firstname+lastname
        // let emailtag=createNode("h3");
        imgelement.src=obj.picture.large;
        spantag.innerHTML=`${obj.name.first} ${obj.name.last}`;
        
        getappend(lielement,imgelement);
        getappend(lielement,spantag);
        getappend(ulelement,lielement)
     })
    }).catch((error)=>{
        console.log(error);
    })


