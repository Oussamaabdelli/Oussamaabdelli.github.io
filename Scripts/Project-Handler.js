var ProjectsDiv=document.getElementById("Projects");
for(let i=0;i<Projects.length;i++)
    {
        //Div
        var currentProject=Projects[i]
        var ProjectDiv =document.createElement("div");
        var divStyle=document.createAttribute("style");
        divStyle.value="display:inline-block;width:300px;margin:10px;";
        ProjectDiv.setAttributeNode(divStyle);
        //h3
        var title =document.createElement("h3");
        var titleNode= document.createTextNode(currentProject.title);
        title.appendChild(titleNode);
        //image
        var image=document.createElement("img");
        var source=document.createAttribute("src");
        source.value="./Images/"+currentProject.img;
        image.setAttributeNode(source);
         var imgStyle=document.createAttribute("style");
        imgStyle.value="width: 180px;height:100px;";
        image.setAttributeNode(imgStyle);

        //p
        var p=document.createElement("p");
        var pNode=document.createTextNode(currentProject.description);
        p.appendChild(pNode);


        ProjectDiv.appendChild(title);
        ProjectDiv.appendChild(image);
        ProjectDiv.appendChild(p);

        ProjectsDiv.appendChild(ProjectDiv);



    }