//Fetch blog posts from mockable.io

const response = await fetch("http://demo3933962.mockable.io/posts", { method: "GET" });
const posts = await response.json()
console.log(posts)

//Show blog post content 
posts.forEach((post)=>{
  document.querySelector(".blog").innerHTML += `
  <article>
  <h2>${post.title}</h2>
  <p>${post.author}</p>
  <p>${post.date}</p>
  <p>${post.msg}</p>
  </article>`
})