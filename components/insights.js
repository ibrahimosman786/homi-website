import React, { useState, useEffect } from 'react';
import { BlogPost } from '@/entities/BlogPost';
import Button from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Insights() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await BlogPost.list('-created_date', 3);
      setPosts(data);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6 lg:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investment <span className="text-orange-500">Insights</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-700 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="insights" className="py-20 px-6 lg:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investment <span className="text-orange-500">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with our latest market analysis, investment strategies, and Dubai real estate trends
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={post.id} className="bg-black rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
              <div className="relative">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 rounded-full px-3 py-1 flex items-center gap-2 text-sm text-white">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.created_date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="ghost"
                    className="text-orange-500 hover:text-orange-400 p-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full"
          >
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
}
