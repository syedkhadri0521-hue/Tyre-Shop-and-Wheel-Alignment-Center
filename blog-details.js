const params = new URLSearchParams(window.location.search);

const blogId = params.get("id");

const blog = blogs.find(function(item){

    return item.id == blogId;

});

if (blog) {

    document.querySelector(".blog-title").innerHTML = blog.title;

    document.querySelector(".blog-image").src = blog.image;

    document.querySelector(".blog-content").innerHTML = blog.content;

    document.querySelector(".blog-meta").innerHTML = `
        <span>${blog.author}</span>
        <span>${blog.date}</span>
        <span>${blog.readTime}</span>
    `;

}

const relatedContainer = document.querySelector(".related-blog-container");

blogs.forEach(function(item){
    if(item.id != blog.id){
        relatedContainer.innerHTML += `
<div class="related-card">

<img src="${item.image}" alt="">

<div class="related-content">

<span>${item.category}</span>

<h3>${item.title}</h3>

<a href="blog-details.html?id=${item.id}">
Read More →
</a>

</div>

</div>
`;

}

});