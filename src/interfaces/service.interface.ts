export interface IService {
  category: string;
  services: [
    {
      title: string;
      description?: string;
    }
  ]
}
