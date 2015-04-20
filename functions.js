

// Function A (GOOD)
var isArmstrong = function(num){


	str_num= String(num)
    
	sum = 0;
    for (var x =0; x<str_num.length; x++){
        sum = sum+Math.pow(parseInt(str_num[x]),str_num.length)}

    
	if (sum == num )
		return true
	else
		return false


}


// Function B (GOOD)



var allArmstrongs = function() {

var result = "";  


for(var x = 0; x <= 99999; ++x)



if(isArmstrong(x)){



result = result + String(x) + ','; 
}

return result; 

}



// Function C (GOOD)
var allSubstrings1 = function substrings(str){  
  var substr = "";  
  for (var x = 0; x < str.length; x++)   
  {  
    for (var y = x + 1; y <= str.length; y++)   
    {  
      substr = substr + str.substring(x,y) + ',';  
        
}
    }  
    
 return substr;  
}  


// Function D (GOOD)
var allSubstrings2 = function (str){  
  var substr = [];  
  for (var x = 0; x < str.length; x++)   
  {  
    for (var y = x + 1; y <= str.length; y++)   
    {  
      substr.push(str.substring(x,y));  
    }  
  }  
 return substr;  
}  

//Function E (GOOD) 

var maxWord = function (str) {
    var input = str.split(" ");
    var max = 0;
    var result = null;
    for (var x = 0; x < input.length; x++) {
        if (max < input[x].length) {
            max = input[x].length;
            result = input[x];
        }
    }
    return result;
}