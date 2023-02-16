import { ReactNode } from "react";

export interface TabsProps {
  tabs: {
    title: string;
    component: ReactNode;
  }[];
}
