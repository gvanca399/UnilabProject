
const getuser = async () => {
    try {
        const ul =document.querySelector('ul');
        const post = await fetch('../fetch/post.json')
        .then(res => res.json())
        post.forEach(post => {
            console.log(post.title)
            const li = document.createElement('li');
            li.innerText=`${post.title}`;
            ul.appendChild(li);
        });
    } catch (err) {
        console.log(err)
    }
}
getuser();