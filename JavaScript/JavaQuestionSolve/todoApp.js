let todo =[];
let req = prompt("please enter your request");
while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    else if(req=="list"){
        console.log("-------------------");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------------");
    
    }else if(req == "add"){
        let task = prompt("please enter the taks you want to add");
        todo.push(task);
        console.log("taks added");
        
    }else if(req=="delete"){
        let idx = prompt("please enter the task delete idx");
        todo.splice(idx,1); 
        console.log("taks delete");
    }
    else  {
        req = prompt("wrong request");
        console.log("wrong request"); 
        }
    req = prompt("please enter your request");
    

}