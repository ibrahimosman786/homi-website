class ConsultationService {
    constructor() {
      this.consultations = [];
    }
  
    async list(orderBy = '-created_date', limit = this.consultations.length) {
      const data = [...this.consultations];
      return data.slice(0, limit);
    }
  
    async create(info) {
      const newRecord = {
        id: Date.now(),
        status: 'New',
        ...info
      };
      this.consultations.push(newRecord);
      return newRecord;
    }
  }
  
  export const Consultation = new ConsultationService();
  export default Consultation;