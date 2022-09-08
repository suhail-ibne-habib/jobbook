const textArea = document.querySelectorAll('textarea.article-detaile-desc');

function adjustHeight(el){
    el.style.height = el.scrollHeight +"px";
}

window.addEventListener( 'load', ()=>{
    textArea.forEach( el =>{
        adjustHeight(el);
    } )
} )