export class Diary {
  public id: number;
  public dateCreated: Date;
  public mood: string;
  public title: string;
  public description: string;

  constructor(
    id: number,
    dateCreated: Date,
    mood: string,
    title: string,
    description: string
  ) {}
}
