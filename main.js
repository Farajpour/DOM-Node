  var newDiv = document.createElement("div"); 
  var newH1 = document.createElement("h1");
  var newContent = document.createTextNode("Create <H1> ELEMENT By Node"); 
    newDiv.appendChild(newH1); 
    newH1.appendChild(newContent);

  var newP1 = document.getElementById("p1");
  var p1Content = document.createTextNode("Create <P1> Content </P1> By Node");
    newDiv.appendChild(newP1);
    newP1.appendChild(p1Content); 

  var newP2 = document.getElementById("p2");
  var p2Content = document.createTextNode("Create <P2> Content </P2> By Node");
    newDiv.appendChild(newP2);
    newP2.appendChild(p2Content);

  var newP3 = document.getElementById("p3");
  var p3Content = document.createTextNode("Create <P2> Content </P2> By Node");
    newDiv.appendChild(newP3);
    newP3.appendChild(p3Content);    

 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 

//////////////////////////////////////////////////////

  var newDiv = document.createElement("div"); 
  var newP4 = document.createElement("p");
  var newP5 = document.createElement("p");
  var newContent1 = document.createTextNode("Create <P> ELEMENT By Node"); 
  var newContent2 = document.createTextNode("Create <P> ELEMENT By Node");
    newDiv.appendChild(newP4);  
    newP4.appendChild(newContent1);
    newDiv.appendChild(newP5);
    newP5.appendChild(newContent2);

  var newH2 = document.getElementById("h2");
  var h2Content = document.createTextNode("Create <H1> Content </H1> By Node");
    newDiv.appendChild(newH2);
    newH2.appendChild(h2Content);     

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div2"); 
  document.body.insertBefore(newDiv, currentDiv);

