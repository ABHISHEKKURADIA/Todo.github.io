const input=document.createElement("input");
        const button=document.createElement("button");
        var table=document.createElement("table");
        var e=document.getElementsByTagName("body")[0];
        var container=document.createElement("div");
        var span=document.createElement("span");
        container.className="container col";
        e.appendChild(container);
        input.className="form-control-sm";
        input.setAttribute("type","text");
        container.appendChild(input).placeholder="Add a List";
        button.className="btn btn-primary";
        container.appendChild(button).innerHTML="Add item";
        container.childNodes[1].setAttribute("onClick","return addItem()");
        container.appendChild(span);
        // var btn=e.childNodes[3].addEventListener("click",close);
        container.appendChild(table);