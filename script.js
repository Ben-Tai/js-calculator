var entries = [];
var total = 0;
var temp = '';
var val = 0;

//display number in answer
function display(x){
    document.querySelector('#answer').value = x;
}
function pushAndReset(){
    entries.push(temp)
    entries.push(val)
    temp = ''
    display(val)
}    
//add click event to numbered buttons, to get their number
var keys = document.getElementsByTagName("button");
    for (var i=0; i<keys.length; i++){
    keys[i].addEventListener("click",  function(event){
        val = (event.target.textContent)
        //add number to string and show in display
        if (!isNaN(val) || val === '.') {
            temp += val
            display(temp)
        //clear temp/entries
        } else if (val == 'AC') {
            entries = []
            temp = ''  
            total = 0 
           display(total)
        }else if (val == 'CE'){
            temp = ''
            display(total)
        //push temp to entries[0] + symbol to entries [1]
        } else if (isNaN(val)){
            pushAndReset()
       
        //push temp to entries[2]
        } if (val === '=') {
            entries.push(temp);
            function answer(){
                x = entires
            }
        // set entires[0] as number
          var nt = Number(entries[0]);
        // loop through array and set entries[1] as symbol and entries [1+] and nextNum
          for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i+1])
            var symbol = entries[i];
        //calculate
            if (symbol === '+') { nt += nextNum; } 
            else if (symbol === '-') { nt -= nextNum; } 
            else if (symbol === '*') { nt *= nextNum; } 
            else if (symbol === '/') { nt /= nextNum; }
        //loop for further calculations    
            i++;
          }
          
          // Swap the '-' symbol so text input handles it correctly
          if (nt < 0) {
            nt = Math.abs(nt) + '-';
          }
          // display
          document.querySelector('#answer').value = nt;
              entries = [];
          temp = '';
          
        } 
      });
    }


  

    // 



