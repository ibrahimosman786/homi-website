class BlogPostService {
    constructor() {
      this.posts = [
        {
          id: 1,
          title: 'Dubai Market Overview',
          slug: 'dubai-market-overview',
          excerpt: 'A snapshot of current real estate trends in Dubai.',
          content: 'Full article content... ',
          image_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640',
          tags: ['market', 'dubai'],
          created_date: '2023-08-01'
        },
        {
          id: 2,
          title: 'Top Neighborhoods for Investment',
          slug: 'top-neighborhoods',
          excerpt: 'Where to invest in Dubai for the best ROI.',
          content: 'Full article content...',
          image_url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=640',
          tags: ['investment'],
          created_date: '2023-07-15'
        },
        {
          id: 3,
          title: 'Understanding Off-plan Projects',
          slug: 'understanding-off-plan',
          excerpt: 'Pros and cons of buying off-plan properties.',
          content: 'Full article content...',
          image_url: 'https://images.unsplash.com/photo-1521790797524-b2497295b8e1?w=640',
          tags: ['guide'],
          created_date: '2023-06-30'
        }
      ];
    }
  
    async list(orderBy = '-created_date', limit = this.posts.length) {
      let data = [...this.posts];
      if (orderBy === '-created_date') {
        data.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
      }
      return data.slice(0, limit);
    }
  
    async create(post) {
      const newPost = { id: Date.now(), ...post };
      this.posts.push(newPost);
      return newPost;
    }
  }
  
  export const BlogPost = new BlogPostService();
  export default BlogPost;