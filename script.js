var entries = [];
var total = 0;
var temp = '';
var val = 0;


//add click event to numbered buttons, to get their number
var keys = document.getElementsByTagName("button");
for (var i=0; i<keys.length; i++){
    keys[i].addEventListener("click",  function(event){
        val = (event.target.textContent)
        //add number to string and show in display
        if (!isNaN(val) || val === '.') {
            temp += val
            document.querySelector('#answer').value = temp;
        //clear temp/entries
        } else if (val == 'AC') {
            entries = []
            temp = ''  
            total = 0 
            document.querySelector('#answer').value = total;
        }else if (val == 'CE'){
            temp = ''
            document.querySelector('#answer').value = total;
        //push temp to entries[0] + symbol to entries [1]
        } else if (val == '+'){
            entries.push(temp);
            entries.push('+');
            temp = ''
            document.querySelector('#answer').value = val;
        }else if (val == 'x'){
            entries.push(temp);
            entries.push('*');
            temp = ''
            document.querySelector('#answer').value = val;
        }else if (val == '-'){
            entries.push(temp);
            entries.push('-');
            temp = ''
            document.querySelector('#answer').value = val;
        }else if (val == '/'){
            entries.push(temp);
            entries.push('/');
            temp = ''
            document.querySelector('#answer').value = val;
        //push temp to entries[2]
        } else if (val === '=') {
            entries.push(temp);
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
          // display answer
          document.querySelector('#answer').value = nt;
              entries = [];
          temp = '';
          
        } 
      });
    }


  

    // 



