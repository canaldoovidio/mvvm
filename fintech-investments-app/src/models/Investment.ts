export interface Investment {
  id: number;
  tipo: string;
  risco: string;
  retorno: string;
  descricao: string;
}

export const mockInvestments: Investment[] = [
  {
    id: 1,
    tipo: "Renda Fixa",
    risco: "Baixo",
    retorno: "9.5% a.a",
    descricao: "CDB com liquidez diária"
  },
  {
    id: 2,
    tipo: "FII",
    risco: "Médio",
    retorno: "10.2% a.a",
    descricao: "Fundo de logística"
  },
  {
    id: 3,
    tipo: "Ação",
    risco: "Alto",
    retorno: "15% a.a",
    descricao: "Empresa de tecnologia"
  }
];