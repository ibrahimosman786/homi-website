class ProjectService {
    constructor() {
      this.projects = [
        {
          id: 1,
          name: 'Harbour Views',
          location: 'Dubai Creek Harbour',
          price_range: 'AED 1.2M - 3.5M',
          roi: '8%',
          status: 'New Launch',
          image_url: 'https://images.unsplash.com/photo-1504252060326-1c53687c4991?w=640',
          completion_date: 'Q4 2025'
        },
        {
          id: 2,
          name: 'Palm Tower Residences',
          location: 'Palm Jumeirah',
          price_range: 'AED 2M - 4M',
          roi: '7%',
          status: 'Hot',
          image_url: 'https://images.unsplash.com/photo-1506377285156-0d35a45f7308?w=640',
          completion_date: 'Q2 2024'
        },
        {
          id: 3,
          name: 'Downtown Views',
          location: 'Downtown Dubai',
          price_range: 'AED 1.5M - 5M',
          roi: '9%',
          status: 'Available',
          image_url: 'https://images.unsplash.com/photo-1533106418989-88406c7a9f12?w=640',
          completion_date: 'Ready'
        }
      ];
    }
  
    async list(orderBy = '-created_date', limit = this.projects.length) {
      let data = [...this.projects];
      return data.slice(0, limit);
    }
  
    async create(project) {
      const newProject = { id: Date.now(), ...project };
      this.projects.push(newProject);
      return newProject;
    }
  }
  
  export const Project = new ProjectService();
  export default Project;