import Categoria from "./Categoria";

export default interface Tarefa {
  tarefaId?: string;
  titulo: string;
  descricao?: string;
  criadoEm?: string;
  categoria?: Categoria;
  categoriaId?: string;
  status: string;
}
