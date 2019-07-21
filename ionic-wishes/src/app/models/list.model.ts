import { ListItem } from './list-item.model';

export class List {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
  items: Array<ListItem>;

  constructor(title: string) {
    this.title = title;
    this.createdAt = new Date();
    this.status = false;
    this.items = [];

    this.id = new Date().getTime();
  }
}
