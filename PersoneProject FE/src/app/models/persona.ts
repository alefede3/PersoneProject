export interface Persona{
    id: number | null;
    nome: string | null;
    cognome: string | null;
    eta: number | null;
    luogo_di_nascita: string | null;
    citta: string | null;
    indirizzo: string | null;
}

export interface PersonaResponse{
    content: Persona[];
    totalElements: number;
    totalPages: number;
}

export interface PersonaQueryParams {
  page: number;
  size: number;
  nomeInput: string;
  cognomeInput: string;
  idInput: number | null;
  etaInput: number | null;
  luogo_di_nascitaInput: string;
  cittaInput: string;
  indirizzoInput: string;
}

export interface Pippo{
  nome: PersonaQueryParams;
}
