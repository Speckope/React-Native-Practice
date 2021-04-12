class Category {
  id: string;
  title: string;
  color: string;

  // This initializes object based on this class
  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
