const textbox =document.getElementById('textbox');
const toferhenheit =document.getElementById('toferhenheit');
const tocelsius =document.getElementById('tocelsius');
const result =document.getElementById('result');
let temp;

function convert(){
   if(toferhenheit.checked){
      temp=Number(textbox.value);
      temp=temp*9/5+32;
      result.textContent=temp.toFixed(2)+'°F';
   }
   else if(tocelsius.checked){
      temp=Number(textbox.value);
      temp=5/9*temp-32;
      result.textContent=temp.toFixed(2)+'°C';
   }
   else{
      result;
   }

}