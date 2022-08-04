function validate()
{
    if(document.getElementById("title").value==="")
    {
        alert("Title is required To add your note");
        return -1;
    }
    
}
var objectCreated=[];
function checkStorage()
{
    if(typeof(Storage)!=="undefined")
    {
        console.log("Storage is available");
        return 1;
    }
    else{
        console.log("Not available");
        return -1;
    }
}
var imp;
function editbutton()
{
    /*document.getElementById("save").style.visibility="visible";
    document.getElementById("save").style.backgroundColor="red";*/

    var child=document.getElementById("adding").childNodes;
    //alert(child.length)
    for(var i=0;i<child.length;i++)
    {
      //  alert(child[i].id);
        //alert(event.srcElement.parentElement.id);
        if(parseInt(child[i].id)==parseInt(event.srcElement.parentElement.id))
        {
            //childAsParent=child[i].children;
            document.getElementById("title").value=JSON.parse(localStorage.getItem("objectCreated"))[i][1];
            document.getElementById("notes").value=JSON.parse(localStorage.getItem("objectCreated"))[i][2];
            imp=i;
            break;
        }
    }
    
}
function savechanges()
{
    let i=imp;
    let date=new Date(); 
    var olddate=JSON.parse(localStorage.getItem("objectCreated"))[i][3];
    alert(olddate);
 /*  document.getElementById("save").style.visibility="hidden";*/
    objectCreated.push([
        i,
        document.getElementById("title").value,
        document.getElementById("notes").value,
        olddate,
        (date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
        ])
        let temp=JSON.parse(localStorage.getItem("objectCreated"));
        for(let j=0;j<JSON.parse(localStorage.getItem("objectCreated")).length;j++)
        {
            if(i==j)
            {
                localStorage.setItem("objectCreated",JSON.stringify(objectCreated));
            }
            else
            localStorage.setItem("objectCreated",JSON.stringify(objectCreated));
        
        }
       // JSON.parse(localStorage.removeItem("objectCreated"))[i];
       // localStorage.setItem("objectCreated",JSON.stringify(objectCreated));
       forsave(i);
       
}
var objectDeleted=[];
var deletedKeys=[];
var keepObjects=[];
function handleClick(me,e)
{

    if(e.srcElement.id=="delbutton")
    {
        
        alert("deletekey "+e.target.parentElement.id);
        deletedKeys.push(e.target.parentElement.id);
        localStorage.setItem("deletedKeys",JSON.stringify(deletedKeys));
        document.getElementById("adding").innerHTML="";
        keep();
    }
        
    
        
      //  localStorage.setItem("deletedKeys",JSON.stringify(deletedKeys));
      //  objectDeleted.push(JSON.parse(localStorage.getItem("objectCreated"))[JSON.parse(localStorage.getItem("deletedKeys")).length]);
      //  localStorage.setItem("objectDeleted",JSON.stringify(objectDeleted));

    if(event.srcElement.id=="editbutton")
    {
        editbutton();
    }
    if(event.srcElement.id=="arch")
    {
        archievebutton();
    }
} 
var archieve=[];
function archievebutton()
{
    document.getElementById("default2").innerHTML="";
    archieve.push(event.target.parentElement.id);
    localStorage.setItem("archieve",JSON.stringify(archieve));
    event.target.parentElement.remove();

}
function myArch()
{
    for(let i=0;i<JSON.parse(localStorage.getItem("archieve")).length;i++)
    {
        createarch(JSON.parse(localStorage.getItem("archieve"))[i]);
    }
}    
function forsave(i)
{ 


        let newdiv=document.createElement("div");
        document.getElementById("addarch").append(newdiv);
        newdiv.setAttribute("id",i);
        let arr=JSON.parse(localStorage.getItem("objectCreated"))[i];
        let check=document.createElement("input");
        check.type="checkbox";
        check.style.float="right";
        check.style.marginTop="5px";
        check.style.marginRight="5px";
        check.style.visibility="hidden";
        newdiv.append(check);
        for(let j=0;j<arr.length;j++)
        {
            newdiv.append(JSON.parse(localStorage.getItem("objectCreated"))[i][j]);
        }
        let delbutton=document.createElement("button");
        delbutton.append(document.createTextNode("Delete"));
        delbutton.setAttribute("id","delbutton");
        let editbutton=document.createElement("button");
        editbutton.append(document.createTextNode("Edit"));
        editbutton.setAttribute("id","editbutton")
        let removearch=document.createElement("button");
        removearch.append(document.createTextNode("Remove Archieve"));
        removearch.setAttribute("id","removeArch");
        newdiv.append(editbutton);
        newdiv.append(delbutton);
        newdiv.append(removearch);
        styling(newdiv,delbutton,editbutton,removearch);
    }
function createarch(i)
{
        
        let newdiv=document.createElement("div");
        document.getElementById("addarch").append(newdiv);
        newdiv.setAttribute("id",i);
        let arr=JSON.parse(localStorage.getItem("objectCreated"))[i];
        let check=document.createElement("input");
        check.type="checkbox";
        check.style.float="right";
        check.style.marginTop="5px";
        check.style.marginRight="5px";
        check.style.visibility="hidden";
        newdiv.append(check);
        for(let j=0;j<arr.length;j++)
        {
            newdiv.append(JSON.parse(localStorage.getItem("objectCreated"))[i][j]);
        }
        let delbutton=document.createElement("button");
        delbutton.append(document.createTextNode("Delete"));
        delbutton.setAttribute("id","delbutton");
        let editbutton=document.createElement("button");
        editbutton.append(document.createTextNode("Edit"));
        editbutton.setAttribute("id","editbutton")
        let removearch=document.createElement("button");
        removearch.append(document.createTextNode("Remove Archieve"));
        removearch.setAttribute("id","removeArch");
        newdiv.append(editbutton);
        newdiv.append(delbutton);
        newdiv.append(removearch);
        styling(newdiv,delbutton,editbutton,removearch);
}


function create(i)
{
        
        let newdiv=document.createElement("div");
        document.getElementById("adding").append(newdiv);
        newdiv.setAttribute("id",i);
        let arr=JSON.parse(localStorage.getItem("objectCreated"))[i];
        let check=document.createElement("input");
        check.type="checkbox";
        check.style.float="right";
        check.style.marginTop="5px";
        check.style.marginRight="5px";
        check.style.visibility="hidden";
        newdiv.append(check);
        for(let j=0;j<arr.length;j++)
        {
            newdiv.append(JSON.parse(localStorage.getItem("objectCreated"))[i][j]);
        }
        let delbutton=document.createElement("button");
        delbutton.append(document.createTextNode("Delete"));
        delbutton.setAttribute("id","delbutton");
        let editbutton=document.createElement("button");
        editbutton.append(document.createTextNode("Edit"));
        editbutton.setAttribute("id","editbutton")
        let arch=document.createElement("button");
        arch.append(document.createTextNode("Archieve"));
        arch.setAttribute("id","Arch");
        newdiv.append(editbutton);
        newdiv.append(delbutton);
        newdiv.append(arch);
        styling(newdiv,delbutton,editbutton,arch);
}




function store()
{
    
    let validation=validate();
    let locStorage=checkStorage();
    if(validation==(-1)||locStorage==(-1))
    {
        alert("failed");
        return;
    }
    else
    {
        let date=new Date();
        
        if(localStorage.length==0)
        {
            objectCreated[0]=[
            0,
            document.getElementById("title").value,
            document.getElementById("notes").value,
            (date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
            ]
            localStorage.setItem("objectCreated",JSON.stringify(objectCreated));
            keep();
        }
        else
        {
            objectCreated.push([
            JSON.parse(localStorage.getItem("objectCreated"))[JSON.parse(localStorage.getItem("objectCreated")).length-1][0]+1,
            document.getElementById("title").value,
            document.getElementById("notes").value,
            (date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
        ])
            localStorage.setItem("objectCreated",JSON.stringify(objectCreated));
            keep();
        }
        document.getElementById("title").value="";
        document.getElementById("notes").value="";



        document.getElementById("default1").innerHTML=""; 
        
       

        createNode();
    }
    
    //onvis();
    //setTimeout(onhid,3000);
}
window.onload=function()
{
    localStorage.clear();
}

function createNode(k)
{
    document.getElementById("adding").innerHTML=""; 
    if(localStorage.length==0)
    return; 

   for(let i=0;i<JSON.parse(localStorage.getItem("objectCreated")).length;i++)
    {

        let newdiv=document.createElement("div");
        document.getElementById("adding").append(newdiv);
        newdiv.setAttribute("id",i);
        let arr=JSON.parse(localStorage.getItem("objectCreated"))[i];
        let check=document.createElement("input");
        check.type="checkbox";
        check.style.float="right";
        check.style.marginTop="5px";
        check.style.marginRight="5px";
        check.style.visibility="hidden";
        newdiv.append(check);
        for(let j=0;j<arr.length;j++)
        {
            newdiv.append(JSON.parse(localStorage.getItem("objectCreated"))[i][j]);

        }
       // let divchild=newdiv.childNodes;
        
        let delbutton=document.createElement("button");
        delbutton.append(document.createTextNode("Delete"));
        delbutton.setAttribute("id","delbutton");
        let editbutton=document.createElement("button");
        editbutton.append(document.createTextNode("Edit"));
        editbutton.setAttribute("id","editbutton")
        let arch=document.createElement("button");
        arch.append(document.createTextNode("Archieve"));
        arch.setAttribute("id","arch");
        newdiv.append(editbutton);
        newdiv.append(delbutton);
        newdiv.append(arch);
        styling(newdiv,delbutton,editbutton,arch);
    }
  
 
    document.getElementById("input").style.visibility="visible";
    document.getElementById("goall").style.visibility="visible";
    document.getElementById("showall").style.visibility="visible";
    document.getElementById("search").style.visibility="visible";
    document.getElementById("archieve").style.visibility="visible";
    document.getElementById("backup").style.visibility="visible";
}

function styling(newdiv,delbutton,editbutton,arch)
{
    newdiv.style.backgroundColor="black";
    newdiv.style.color="white";
    newdiv.style.width="300px";
    newdiv.style.height="150px";
    newdiv.style.marginLeft="100px";
    newdiv.style.marginTop="10px";
    newdiv.style.border="2px solid black";
    newdiv.style.borderRadius="16px";
    newdiv.style.position="relative";            
    newdiv.style.overflow="scroll";

     
    delbutton.style.width="70px";
    delbutton.style.height="30px";
    delbutton.style.fontSize="12px";
    delbutton.style.right="0";
    delbutton.style.position="absolute";
    delbutton.style.float="right";
    delbutton.style.bottom="0";
    delbutton.style.marginBottom="0";
    delbutton.style.paddingBottom="0";
    delbutton.style.color="white";

    editbutton.style.color="white";
    editbutton.style.height="30px";
    editbutton.style.position="absolute";
    editbutton.style.bottom="0";
    editbutton.style.left="0";
    editbutton.style.width="70px";
    editbutton.style.fontSize="12px";
    editbutton.setAttribute("id","editbutton")

    arch.style.color="white";
    arch.style.height="30px";
    arch.style.position="absolute";
    arch.style.bottom="0";
    arch.style.left="115px";
    arch.style.width="70px";
    arch.style.fontSize="12px";
    arch.setAttribute("id","arch");
    arch.style.backgroundColor="blue";
}

function search()
{
    var flag=false;
    //alert("in search");
    let input=document.getElementById("input").value;
   // alert(input);
    for(let i=0;i<JSON.parse(localStorage.getItem("objectCreated")).length;i++)
    {
        let title=JSON.parse(localStorage.getItem("objectCreated"))[i][1];
        let op=input.localeCompare(title);
      //  alert(op);
        if(op==0)
        {
           // alert(title);]
            flag=true;
            let child=document.getElementById("adding").childNodes;
            child[i].scrollIntoView();
            child[i].style.border="6px solid red"
        }
    }
    if(flag==false)
    {
        alert("not found");
    }
}
function deleteAll()
{
   document.getElementById("gosome").style.visibility="visible";
   
    let child=document.getElementById("adding").childNodes;
 //   alert(child.length)
 //checkboxes
    for(let i=0;i<child.length;i++)
    {
        child[i].firstChild.style.visibility="visible";
    }
    document.getElementById("gosome").style.visibility="visible";
}
function deleteSome()
{
    let confirmation=confirm("Do you Want to delete all the notes")
    //alert(confirmation);
    if(confirmation)
    {
        var n=0;
        var arr=[];
        let child=document.getElementById("adding").childNodes;
     //   alert(child.length)
        for(let i=0;i<child.length;i++)
        {
       //     alert("i "+i+" "+child[i].firstChild.checked);
           if(child[i].firstChild.checked)
            {
                arr.push(child[i].id);
                deletedKeys.push(child[i].id);
                localStorage.setItem("deletedKeys",JSON.stringify(deletedKeys));
                //child[i-n].remove();
               // n++;
            }
        }
    }
    keep();
}

function showall()
{
    document.getElementById("addarch").innerHTML="";
    var combArr=[];
    document.getElementById("adding").innerHTML="";
    for(let i=0;i<JSON.parse(localStorage.getItem("keepObjects")).length;i++)
    {
        combArr.push(parseInt(JSON.parse(localStorage.getItem("keepObjects"))[i]));
    }
    /*for(let i=0;i<JSON.parse(localStorage.getItem("archieve")).length;i++)
    {
        combArr.push(parseInt(JSON.parse(localStorage.getItem("archieve"))[i]));
    }*/
    combArr.sort(function(a, b){return a- b});
    alert(combArr);
   
    for(let i=0;i<combArr.length;i++)
    {
        create(combArr[i]);
    }

    
}
function backup()
{
    var combArr=[];
    document.getElementById("adding").innerHTML="";
    for(let i=0;i<JSON.parse(localStorage.getItem("keepObjects")).length;i++)
    {
        combArr.push(parseInt(JSON.parse(localStorage.getItem("keepObjects"))[i]));
    }
    for(let i=0;i<JSON.parse(localStorage.getItem("deletedKeys")).length;i++)
    {
        combArr.push(parseInt(JSON.parse(localStorage.getItem("deletedKeys"))[i]));
    }
    combArr.sort(function(a, b){return a- b});
    alert(combArr);
   
    for(let i=0;i<combArr.length;i++)
    {
        create(combArr[i]);
    }
}
/*window.onload=function()
{
    if(localStorage.length==0)
    return;
   // document.getElementById("default").innerHTML=""; 
    if(localStorage.length!=0) 
    {
        document.getElementById("left").style.visibility="visible";
        document.getElementById("default").innerHTML=""; 
        for(let i=0;i<JSON.parse(localStorage.getItem("keepObjects")).length;i++)
        {
       // alert(JSON.parse(localStorage.getItem("keepObjects"))[i])
            create(JSON.parse(localStorage.getItem("keepObjects"))[i]);
        }
    }
    
}*/

function keep()
{
    let objarr=JSON.parse(localStorage.getItem("objectCreated"));
    let objarrid=[];
    let delarr=[]
    if(JSON.parse(localStorage.getItem("deletedKeys"))!=null)
    {
        let delsize=JSON.parse(localStorage.getItem("deletedKeys")).length;
        for(let i=0;i<delsize;i++)
        {
            delarr.push(parseInt(JSON.parse(localStorage.getItem("deletedKeys"))[i]))
        }
    }
    for(let i=0;i<JSON.parse(localStorage.getItem("objectCreated")).length;i++)
    {
    
       // alert(delarr.some(e=>e===parseInt(objarr[i][0])))
      
        if(delarr.some(e=>e===parseInt(objarr[i][0])))
        {
           
        }
        else{
            objarrid.push(i);
            localStorage.setItem("keepObjects",JSON.stringify(objarrid));
         //   alert("in keep "+objarrid);
        }
    }
   // alert(objarrid);
   // alert("keepObject")
   document.getElementById("adding").innerHTML="";
    for(let i=0;i<JSON.parse(localStorage.getItem("keepObjects")).length;i++)
    create(JSON.parse(localStorage.getItem("keepObjects"))[i]);
    
}