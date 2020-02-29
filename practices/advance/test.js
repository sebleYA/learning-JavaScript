
function show(){
    
    //var firstName, lastName, id; 

    var firstName = document.theForm.elements[0].value;
    var lastName = document.theForm.elements[1].value;
    var id = document.theForm.elements[2].value;
   // test to be deleted
    console.log(firstName, lastName, id);
    
    alert("first Name: "+firstName + " last name: "+ lastName + " ID: "+ id)
    alert(firstName +" "+ lastName +  " Thanks for submitting...")
    alert('Bye')
    clear() 
}
function clear(){
  firstName=document.theForm.elements[0].value="" 
}