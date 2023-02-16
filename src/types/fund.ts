export interface Fund {
  id: number;
  type: "wind" | "solar" | "nature";
  title: string;
  balance: number;
  difference: number;
  data: number[];
}
