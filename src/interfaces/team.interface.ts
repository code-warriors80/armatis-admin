export interface ITeam {
  id?: number,
  name: string;
  role: string;
  photoUrl?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface IAddTeam {
  id?: number,
  name: string;
  role: string;
  teamPhoto?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}
