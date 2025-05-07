type BlogAuthor = 
  | string 
  | {
      nome: string;
      pic: string;
    };

export interface Blog {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: BlogAuthor;
};