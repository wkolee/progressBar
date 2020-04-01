/*
const ProgressObject = {
    btn: document.getElementById('btn'),
    dataProgress: function(){
        this.btn = btn;
        this.counter = this.counter;
        btn.onclick = function(){
            //new http request
            const client = new XMLHttpRequest();
            client.onprogress = function(e){
                total = e.total;
                loaded = e.loaded;
                lengthComputable = e.lengthComputable;
                const progressBar = document.getElementById('prog');
                const counter = document.getElementById('counter');
                let percentComplete;
                percentComplete = (loaded / total) * 100;
                progressBar.style.width = percentComplete+'%';
                counter.innerHTML = `${Math.round(percentComplete)}%`
            }
            client.open('GET', 'data.txt');
            client.send(); 
        }
    }
}
ProgressObject.dataProgress();
*/




/***

    2nd way to do it
***/

function Progress(fileName){
    this.fileName = fileName;
    this.btn = document.getElementById('btn');
    this.counter = document.getElementById('counter');
}
Progress.prototype.progress = function(fileName){
    this.btn.onclick =  function(){
        //alert(fileName);
        const client = new XMLHttpRequest();
        client.open('GET', fileName);
        client.onprogress = function(e){
            total = e.total;
            loaded = e.loaded;
            lengthComputable = e.lengthComputable;
            const progressBar = document.getElementById('prog');
            const counter = document.getElementById('counter');
            let percentComplete;
            percentComplete = (loaded / total) * 100;
            progressBar.style.width = percentComplete+'%';
            counter.innerHTML = `${Math.round(percentComplete)}%`
        }
        client.send();
    }
}
const getProg = new Progress();
getProg.progress('b.pdf');
