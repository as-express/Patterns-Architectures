export interface items {
  title: string;
  time: Date;
}
export class NOtification {
  notificationsCount: number = 0;
  notification: items[] = [];
}
