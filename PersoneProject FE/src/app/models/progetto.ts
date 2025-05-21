export interface Progetto{
    id_progetto: number;
    nome_progetto: string;
    descrizione_progetto: string;
    data_inizio: string;
    data_fine: string;
    budegt: number;
}

export interface ProgettoResponse{
    content: Progetto[];
    totalElements: number;
    totalPages: number;
}

export interface ProgettoQueryParams{
    page: number;
    size: number;
    id_progettoInput: number | null;
    nome_progettoInput: string;
    descrizione_progettoInput: string;
    data_inizioInput: string;
    data_fineInput: string;
    budgetInput: number | null;
}