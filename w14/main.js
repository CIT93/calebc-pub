const OUTPUT = document.getElementById("output");

function renderPosts(data) {
    OUTPUT.innerHTML = '';
    let num = 1
    data.forEach(title => {
        const titleElm = document.createElement('p');
        titleElm.textContent = `Title ${num++}: ${title}`;
        OUTPUT.appendChild(titleElm);
    });
}


//getPosts and start works but need something for renderPosts for the title to appear....
async function getPost() {
    try{
    const fCall = await fetch('https://jsonplaceholder.typicode.com/posts')
    const fData = await fCall.json()
    console.log(fData.length)
    const fTitle = []
    for(let i = 0; i < fData.length; i++) {
        fTitle.push(fData[i].title);
    }
    console.log(fTitle)
    return fTitle
    }
    catch(e){
        console.log('error', e)
    }
}
//NOTE if result is commented nothing will appear as it waiting for getPosts()
//result is waiting on a return value back into the start() 
//think of start() as the structure of building and getPost() is what goes inside of it
async function start() {
    try{
    const result = await getPost();
    renderPosts(result)
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}
start(); 