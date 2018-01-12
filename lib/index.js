//Close alert window:
$().alert('close');

//Initialize global variables containers:
var alerEnd = document.getElementsByClassName("end-line");
var alerOut = document.getElementsByClassName("container");

//Retrieve content of blocks with three different methods:
function childNode(checkAttr){
    var childAlert = newAlert();
    var childBlock = childAlert.block;
    var childHead = document.getElementsByClassName("card-header");
    
    if(checkAttr === 'first'){
        childAlert.heading.innerHTML = childHead[0].innerHTML;
        childAlert.text.innerHTML = "Retrieving content using innerHTML.";
    } else if(checkAttr === 'second'){
        childAlert.heading.innerHTML = childHead[0].firstChild.nodeValue;
        childAlert.text.innerHTML = "Retrieving content using nodeValue.";
    } else if(checkAttr === 'third'){
        childAlert.heading.innerHTML = childHead[0].childNodes[0].nodeValue;
        childAlert.text.innerHTML = "Retrieving content using first child."
    }
    
    alerOut[0].insertBefore(childBlock,alerEnd[0]);
}

//Retrieve code of body and full document:
function rootNodes(checkAttr){
    var rootAlert = newAlert();
    var rootBlock = rootAlert.block;
    
    if(checkAttr === 'first'){
        rootAlert.heading.innerHTML = "Retrieving body.";
        rootAlert.text.innerHTML = document.body.innerHTML;
    } else if(checkAttr === 'second'){
        rootAlert.heading.innerHTML = "Retrieving full document.";
        rootAlert.text.innerHTML = document.documentElement.innerHTML;
    }
    
    alerOut[1].insertBefore(rootBlock,alerEnd[1]);
}

//Using nodeName, nodeValue and nodeType:
function nodeFunction(checkAttr){
    var nodeAlert = newAlert();
    var nodeBlock = nodeAlert.block;
    var testHeading = document.getElementsByClassName("card-title");
    
    if(checkAttr === 'first'){
        nodeAlert.heading.innerHTML = "nodeName retriev info about title above";
        nodeAlert.text.innerHTML = testHeading[2].nodeName;
    } else if(checkAttr === 'second'){
        nodeAlert.heading.innerHTML = "nodeValue retriev value of title above";
        nodeAlert.text.innerHTML = testHeading[2].nodeValue;
    } else if(checkAttr === 'third'){
        nodeAlert.heading.innerHTML = "nodeType retriev number of type of title above";
        var minCheck = testHeading[2].nodeType;
        nodeAlert.text.innerHTML = miniChecking(minCheck);
    }
    
    alerOut[2].insertBefore(nodeBlock,alerEnd[2]);
}

//Mini checking function for nodeType:
function miniChecking(checkAttr){
    switch(checkAttr){
        case 1:
            return "ELEMENT_NODE";
            break;
        case 2:
            return "ATTRIBUTE_NODE";
            break;
        case 3:
            return "TEXT_NODE";
            break;
        case 8:
            return "COMMENT_NODE";
            break;
        case 9:
            return "DOCUMENT_NODE";
            break;
        case 10:
            return "DOCUMENT_TYPE_NODE";
            break;
    }
}

//Creation element with textNode:
function createElNode(){
    var textNodeAlert = newAlert();
    var textNodeBlock = textNodeAlert.block;
    var textSection = document.createElement("p");
    var textSecContent = document.createTextNode("It's included and embed section of text!");
    
    textSection.appendChild(textSecContent);
    textNodeBlock.appendChild(textSection);
    textNodeAlert.heading.innerHTML = "Created element with textNode";
    
    alerOut[0].insertBefore(textNodeBlock,alerEnd[0]);
}

//Creation element with insertBefore:
function createInsertEl(){
    var insertAlert = newAlert();
    var insertBlock = insertAlert.block;
    var insertTag = insertAlert.text;
    var insertSection = document.createElement("p");
    var insertContent = document.createTextNode("It's included element before p-tag");
    
    insertSection.appendChild(insertContent);
    insertBlock.insertBefore(insertSection,insertTag);
    insertAlert.heading.innerHTML = "Created element with insertBefore!";
    alerOut[1].appendChild(insertBlock);
}

//Removing child and parent elements:
function removeElParent(checkAttr){
    var removeAlert = newAlert();
    var removeBlock = removeAlert.block;
    var removeBtn = document.createElement("button");
    removeBtn.setAttribute("type","button");
    removeBtn.setAttribute("class","btn btn-outline-danger");
    removeBtn.textContent = "Remove heading";
    removeBlock.appendChild(removeBtn);
    console.log(removeBlock);
    
    if(checkAttr === 'first'){
        removeAlert.heading.innerHTML = "Remove element through parent";
        removeAlert.text.innerHTML = "Click to the button below for deleting heading of alert.";
        removeBtn.addEventListener("click", function(){deleteElement(checkAttr)});
        alerOut[2].appendChild(removeBlock);
    } else if(checkAttr === 'second'){
        removeAlert.heading.innerHTML = "Remove element through child";
        removeAlert.text.innerHTML = "Click to the button below for deleting heading of alert."
        removeBtn.addEventListener("click", function(){deleteElement(checkAttr)});
        alerOut[2].appendChild(removeBlock);
    }
    
    function deleteElement(checkEl){
        var removeHead = removeAlert.heading;
        if(checkEl === 'first'){
            removeBlock.removeChild(removeHead);
        } else if(checkEl === 'second'){
            removeHead.parentNode.removeChild(removeHead);
        }
    }
}

//Repacing function for elements:
function replaceElement(){
    var replaceAlert = newAlert();
    var replaceBlock = replaceAlert.block;
    replaceAlert.heading.innerHTML = "Try to replace elements";
    replaceAlert.text.innerHTML = "Click to the button below for replacing heading of alert.";
    var replaceBtn = document.createElement("button");
    replaceBtn.setAttribute("type","button");
    replaceBtn.setAttribute("class","btn btn-outline-warning");
    replaceBtn.textContent = "Replace heading";
    replaceBlock.appendChild(replaceBtn);
    
    alerOut[3].appendChild(replaceBlock);
    replaceBtn.addEventListener("click",replacing);
    
    function replacing(){
        var replacedElement = document.createElement("h4");
        replacedElement.setAttribute("class","alert-heading");
        var replacedContent = document.createTextNode("Congrats! You are done!");
        replacedElement.appendChild(replacedContent);
        var replacedHead = replaceAlert.heading;
        replaceBlock.replaceChild(replacedElement,replacedHead);
    }
}

//Function for automatic count all tags:
function countTags(){
    var countAlert = newAlert();
    var countBlock = countAlert.block;
    countAlert.heading.innerHTML = "Number of tags";
    countAlert.text.innerHTML = "Titles = " + document.getElementsByTagName("title").length + "<br/>" + "Navigations = " + document.getElementsByTagName("nav").length + "<br/>" + "Buttons = " + document.getElementsByTagName("button").length + "<br/>" + "Links = " + document.getElementsByTagName("a").length + "<br/>" + "Forms = " + document.getElementsByTagName("form").length + "<br/>" + "Divs = " + document.getElementsByTagName("div").length + "<br/>" + "p = " + document.getElementsByTagName("p").length + "<br/>" + "h4 = " + document.getElementsByTagName("h4").length;
    
    alerOut[0].appendChild(countBlock);
}

//Function for retrieving test-containers:
function retrieveTestCont(){
    var retAlert = newAlert();
    var retBlock = retAlert.block;
    retAlert.heading.innerHTML = "Retrieving and changing elements";
    /*
    var retBtn = document.createElement("button");
    retBtn.setAttribute("type","button");
    retBtn.setAttribute("class","btn btn-outline-warning");
    retBtn.textContent = "Change view of containers";*/
    
    //Automatic creation all progress-bar containers:
    createProgressBar();
    //Dynamic PB-elements:
    function createProgressBar(){
        for(var i=0; i<20; i++){
            /* global prContainer */
            prContainer = document.createElement("div");
            /* global prBar */
            prBar = document.createElement("div");
            var prBarPercent;
            var prBarArray;
            prContainer.setAttribute("class","progress");
            prContainer.setAttribute("style","height: 20px; margin: 10px 0;");
            prBar.setAttribute("class","progress-bar progress-bar-striped bg-warning");
            prBar.setAttribute("role","progressbar");
            prBar.setAttribute("aria-valuemin","0");
            prBar.setAttribute("aria-valuemax","100");
            var prBarPercent = Math.floor((Math.random()*100)+1);
            var prBarArray = [
                "width: " + prBarPercent + "%;",
                prBarPercent,
                prBarPercent + "%"
            ];
            console.log(prBarArray)
            prBar.setAttribute("style",prBarArray[0]);
            prBar.setAttribute("aria-valuenow",prBarArray[1]);
            prBar.innerHTML = prBarArray[2];
            console.log(prBar);
            prContainer.appendChild(prBar);
            console.log(prContainer);
            retBlock.appendChild(prContainer);
            console.log(retBlock);
        }
    }
    
    console.log("PRBAR LENGTH " + prBar);
    
    /*retBtn.addEventListener("click",customizeFunc);*/
    
    /*function customizeFunc(){
        for(var i=0; i<20; i++){
            prBar[i].setAttribute("class","progress-bar progress-bar-striped bg-success progress-bar-animated");
            console.log(prBar[i].innerHTML);
        }
        prBar.setAttribute("class","progress-bar progress-bar-striped bg-success progress-bar-animated");
    }
    
    retAlert.text.innerHTML = "For change view, click the button below.";
    retBlock.appendChild(retBtn);*/
    alerOut[0].appendChild(retBlock);
}

//Function for automatic creation new basic alert-block:
function newAlert(){
    var alerVar = document.createElement("div");
    alerVar.setAttribute("class","alert alert-success alert-dismissible fade show");
    alerVar.setAttribute("role","alert");
    var alerBtn = document.createElement("button");
    alerBtn.setAttribute("type","button");
    alerBtn.setAttribute("class","close");
    alerBtn.setAttribute("data-dismiss","alert");
    alerBtn.setAttribute("aria-label","Close");
    var alerBtnClose = document.createElement("span");
    alerBtnClose.setAttribute("aria-hidden","true");
    alerBtnClose.innerHTML = "&times";
    var alerHead = document.createElement("h4");
    alerHead.setAttribute("class","alert-heading");
    var alerText = document.createElement("p");
    
    alerBtn.appendChild(alerBtnClose);
    alerVar.appendChild(alerBtn);
    alerVar.appendChild(alerHead);
    alerVar.appendChild(alerText);
    
    //Creation object properties for further using:
    var alerObj = {
        "block" : alerVar,
        "button" : alerBtn,
        "close" : alerBtnClose,
        "heading" : alerHead,
        "text" : alerText
    };
    
    return alerObj;
}
