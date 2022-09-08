const textArea = document.querySelectorAll('textarea.article-detaile-desc');
const filterBtns = document.querySelectorAll( '.mob-filters button' );
const modal = document.querySelector( '.modal' );

function adjustHeight(el){
    el.style.height = el.scrollHeight +"px";
}

if( textArea ){

    window.addEventListener( 'load', ()=>{
        textArea.forEach( el =>{
            adjustHeight(el);
        } )
    } )

}

if( filterBtns ){

    filterBtns.forEach( filterBtn => {
        filterBtn.addEventListener( 'click', (e)=>{
            const ctr = e.currentTarget.dataset.ctr;
            if( ctr === 'filter' ){
                modal.querySelector( '.title' ).textContent = '絞り込み検索';
                modal.classList.add( 'active' );
                document.getElementById( 'backdrop' ).addEventListener( 'click', e =>{
                    modal.classList.remove( 'active' );
                } )
                modal.querySelector('form').style.display = 'block';
                modal.querySelector('.lists').style.display = 'none';
                modal.querySelector('.btn').style.display = 'flex';
            }

            if( ctr === 'sort' ){
                modal.querySelector( '.title' ).textContent = '並び替え';
                modal.classList.add( 'active' );
                document.getElementById( 'backdrop' ).addEventListener( 'click', e =>{
                    modal.classList.remove( 'active' );
                } )
                modal.querySelector('.lists').style.display = 'block';
                modal.querySelector('.btn').style.display = 'none';
                modal.querySelector('form').style.display = 'none';
            }
        } )
    } )

}


