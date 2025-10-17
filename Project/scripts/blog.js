function displayBlog(blogs) {
  let blogCont = document.getElementById("blog-container");

  blogs.forEach(blog => {
    let div = document.createElement("div");
    div.className = "blog-box";
    div.innerHTML = `
          <div class="blog-img">
              <img src="${blog.img}" alt="${blog.heading}" loading="lazy">
          </div>
          <div class="blog-details">
              <h4>${blog.heading}</h4>
              <p>${blog.details}</p>
              <a href="#">CONTINUE READING</a>
          </div>
      `;

    blogCont.appendChild(div);
});

}

async function fetchBlog() {
  try {
    let response = await fetch("./JSON/blogs.json");

    if (!response.ok) {
      throw new Error("Could not fetch data from this resource")
    }

    let values = await response.json();
    displayBlog(values)

  } catch(error) {
    console.error(error)
  }
}

fetchBlog();