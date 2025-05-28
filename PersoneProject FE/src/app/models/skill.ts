export interface Skill{
    id_skill: number;
    nome_skill: string;
    descrizione_skill: string;
}

export interface SkillResponse{
  numberOfElements: number;
  content: Skill[];
  totalElements: number;
  totalPages: number;
}

export interface SkillQueryParams{
  page: number;
  size: number;
  id_skillInput: number | null;
  nome_skillInput: string;
  descrizione_skillInput: string;
}
