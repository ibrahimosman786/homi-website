import React, { useState, useEffect } from 'react';
import { Project } from '@/entities/Project';
import Button from '@/components/ui/button';
import Badge from '@/components/ui/badge';
import { MapPin, Calendar, TrendingUp, Download } from 'lucide-react';

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await Project.list('-created_date', 6);
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Hot': return 'bg-red-500 text-white';
      case 'New Launch': return 'bg-orange-500 text-white';
      case 'Sold Out': return 'bg-gray-500 text-white';
      case 'Coming Soon': return 'bg-blue-500 text-white';
      default: return 'bg-green-500 text-white';
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
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
    <section id="projects" className="py-20 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exclusive Dubai pre-construction opportunities with guaranteed ROI and prime locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={project.image_url} 
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Price Range</span>
                    <span className="text-white font-semibold">{project.price_range}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Expected ROI</span>
                    <span className="text-orange-500 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {project.roi}
                    </span>
                  </div>
                  {project.completion_date && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Completion</span>
                      <span className="text-white font-semibold flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.completion_date}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Request Info
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
