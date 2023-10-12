export async function getSortedPostsData() {
  //const [Records, setRecords] = useState([]);
  // Instead of the file system,
  // fetch post data from an external API endpoint
  let rem;
  rem = fetch(
    "https://xglvqsvdi4.execute-api.us-east-1.amazonaws.com/dev/blogs"
  )
    .then((response) => response.json())
    .then((data) => data.body);
  //console.log("nnn ", rem);
  return rem;
  //   // Get file names under /posts
  //   const fileNames = fs.readdirSync(postsDirectory);
  //   const allPostsData = fileNames.map((fileName) => {
  //     // Remove ".md" from file name to get id
  //     const id = fileName.replace(/\.md$/, '');

  //     // Read markdown file as string
  //     const fullPath = path.join(postsDirectory, fileName);
  //     const fileContents = fs.readFileSync(fullPath, 'utf8');

  //     // Use gray-matter to parse the post metadata section
  //     const matterResult = matter(fileContents);

  //     // Combine the data with the id
  //     return {
  //       id,
  //       ...matterResult.data,
  //     };
  //   });
  //   // Sort posts by date
  //   return allPostsData.sort((a, b) => {
  //     if (a.date < b.date) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
}

//fetch('https://xglvqsvdi4.execute-api.us-east-1.amazonaws.com/dev/blogs').then(response => response.json()).then(data =>{data})

export async function getAllPostIds() {
  const s = await getSortedPostsData();
  //console.log("asd ",s)
  return s.map((id) => {
    return {
      params: { id: id.id },
    };
  });
}

export async function getPostData(id) {
  //const [Records, setRecords] = useState([]);
  // Instead of the file system,
  // fetch post data from an external API endpoint
  let rem;
  rem = fetch(
    `https://xglvqsvdi4.execute-api.us-east-1.amazonaws.com/dev/blogs/${id}`
  )
    .then((response) => response.json())
    .then((data) => data).catch(error=>{
      error
    });
  //console.log("nnn ", rem);
  return rem;
}
