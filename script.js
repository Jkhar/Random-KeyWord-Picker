const tagsEle = document.getElementById('tags');
const textareaTag = document.getElementById('textarea');

textareaTag.focus();

textareaTag.addEventListener('keyup' , (e) => {
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout( ()=>{
            e.target.value ='';
        },1000);

        randomSelect();
    }
});

const createTags = (input) => {
    const tags = input.split(',')
        .filter(tag => tag.trim() !=='')
        .map(tag => tag.trim());
    
        tagsEle.innerHTML ='';
        
        tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.classList.add('tag');
            tagEl.innerHTML=tag;
            tagsEle.appendChild(tagEl);
        });
}

const randomSelect = () => {
    const times =30; 

    const interval = setInterval( ()=>{
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout( () =>{
            unHighlightTag(randomTag);
        },100)
    },100);

    setTimeout( () => {
        clearInterval(interval);
        setTimeout( () => {
            const randomTag =pickRandomTag();
            highlightTag(randomTag);
        },100);
    },100*times);
}

const pickRandomTag = () => { 
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() *tags.length)];
}

const highlightTag = (tag) => {
    tag.classList.add('highlight');
}
const unHighlightTag = (tag) => {
    tag.classList.remove('highlight');
}

