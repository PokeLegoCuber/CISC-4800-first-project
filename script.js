function burgerCount() 
{
  if(typeof(Storage) !== "undefined") 
  {
    if (sessionStorage.clickcount) 
    {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } 
    else 
    {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("vote-burger1").innerHTML = "Vote: " + sessionStorage.clickcount;
  } 
  else 
  {
    document.getElementById("vote-burger1").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function burgerCount2() 
{
  if(typeof(Storage) !== "undefined") 
  {
    if (sessionStorage.clickcount2) 
    {
      sessionStorage.clickcount2 = Number(sessionStorage.clickcount2)+1;
    } 
    else 
    {
      sessionStorage.clickcount2 = 1;
    }
    document.getElementById("vote-burger2").innerHTML = "Vote: " + sessionStorage.clickcount2;
  } 
  else 
  {
    document.getElementById("vote-burger2").innerHTML = "Sorry, your browser does not support web storage...";
  }
}