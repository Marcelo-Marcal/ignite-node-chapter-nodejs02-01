import { Category } from '../model/Category';


//DTO - Data transfer object
//Vai pegar os valores da rota e receber em nosso repositorio
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }
  //Criar uma função para cadastra a categoria
  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }
}

export { CategoriesRepository }