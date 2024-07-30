

export const generatePosts = (numPosts) => {
    const posts = [];
    for (let i = 1; i <= numPosts; i++) {
      posts.push({
        image: 'img/Olive-Charcuterie-14.webp',
        date: '23.03.2024',
        title: `Fusce eget semper lacus. Sed ipsum purus ${i}`,
        content: 'Fusce eget semper lacus. Sed ipsum purus, mollis non magna at, pellentesque pharetra augue.',
        link: '/singleblog'
      });
    }
    return posts;
  };
  