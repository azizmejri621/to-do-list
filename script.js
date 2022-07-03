



function add(){
  //creating li
  let li = document.createElement('li');
  li.className = "task";
  //retrieving the value from the input
  let text = document.getElementById('text').value;
  //adding the value of the input to li
  li.append(text);
  //creating a button with to remove
  let btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = 'remove';
  li.appendChild(btn);
  if(!text){
     window.alert("please enter a text");
  }
  else{
      //adding li to the document
      document.getElementById('tasks').append(li);
      let input = document.getElementById("text");
      input.value ="";
  };
  btn.addEventListener('click',()=>{
      li.remove();
      console.log("done");
  });
  
}
  
  