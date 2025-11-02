window.onload = function() {



    //fetch('https://api.jsonbin.io/v3/b/69074a86ae596e708f3f87fe') // URI
    fetch('res/json/posts.json') //.json
        .then((response) => response.json())
        .then(json => {
            //for (let i = 0; i < json.record.length; i++) { //URI
            for (let i = 0; i < json.length; i++) { //.json
                //const el = json.record[i]; // URI
                const el = json[i]; // .json
                let div=document.createElement("div");
                div.className="post";

                let header=document.createElement("div");
                header.className="post-header";
                div.appendChild(header);

                let pfp=document.createElement("img");
                pfp.src='https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg';
                pfp.className='pfp';
                pfp.title=el.author;
                pfp.alt=el.author;
                header.appendChild(pfp);

                let date=document.createElement("p")
                date.appendChild(document.createTextNode(el.date))
                header.appendChild(date);

                if (el.image) {
                    let image=document.createElement("img");
                    image.src=el.image;;
                    image.className="post-image";
                    image.alt="postImage";
                    div.appendChild(image);
                }

                let caption=document.createElement("p");
                caption.appendChild(document.createTextNode(el.caption));
                div.appendChild(caption);
                
                let like=document.createElement("button");
                like.appendChild(document.createTextNode('👍'));
                like.className="like-button"
                div.appendChild(like);

                let main=document.getElementById("main");
                main.appendChild(div);
            }
            

        })



}