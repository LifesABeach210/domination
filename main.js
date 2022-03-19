



function StrikeThrough() {
let Strike = document.querySelector('li');
Strike.style.textDecorationLine='line-through';
};
StrikeThrough();
function GetDom(){

    let image3 = document.getElementById('image-3');
    let image2 = document.getElementById('image-2');
    let image = document.getElementById('image-1');
    image.setAttribute('src','https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-24.jpg');
    image2.setAttribute('src','https://wallpapers.com/images/high/cool-colorful-skull-art-sb8o5q3xsj1669li.jpg');
    image3.setAttribute('src','https://wallpapers.com/images/high/cool-smiley-ball-vydwfe94u7f7bgy6.jpg');
   image.style.height='200px';
    image2.style.height = '200px';
    image3.style.height = '200px';
}
GetDom();


//create element img.src = 'Link'//append into page /div/

function removeLi(){
let arg = document.querySelector('li');
arg.remove(arg);



}
removeLi();
removeLi();
removeLi();


function changeText(Tag,ele){
Tag = document.getElementById(Tag);
b = Tag.style.fontSize = ele;



}
changeText('heading','200px');

function creatAndAppend(Id,newList,newText){
getID = document.querySelector(Id);
addItem = document.createElement(newList);
copy.innerText=newText;// change to innertext
addItem.appendChild(copy);
getID.appendChild(addItem);

}

creatAndAppend('#arguments','li','hell');

creatAndAppend('#arguments','img' ,'https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-24.jpg');

function increaseSize(ID,size){
waffle = document.getElementById(ID);
waffle.style.height = size;

}

increaseSize('image-1','200px');


function makeInvis(Tag , style){
    fresh = document.getElementsByID(Tag);
    fresh.style.visibility = style;//classname set to invisible 
}
    
makeInvis('#lorem','hidden');

function Create(Div,NewEle,Text){

newDiv = document.createElement(Div)
NewElee = document.createElement(NewEle);//innertext
b.appendChild(newDiv);
newDiv.appendChild(NewElee);
NewElee.appendChild(NewText);


}
Create('div','h2','Hellllllllooooooooo');

