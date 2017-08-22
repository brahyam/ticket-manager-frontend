export class Ticket {
  _id?: string;
  key?: string;
  summary: string;
  status: string;
  priority: string;
  type: string;
  description: string;
  resolution: string;
  product: string;
  createdAt?: Date;
  updatedAt?: Date;
}
