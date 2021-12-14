export interface Question{
    Id: number;
    questionText: string;
    options: Option[];   
}

export interface Option{
    text: string;    
}
