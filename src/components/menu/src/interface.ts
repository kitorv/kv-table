import { IconType } from "@/components/icon";
import { ComputedRef } from "vue";

export type MenuMode = "horizontal" | "vertical";

export type MenuItemIcon = IconType;

export type SubmenuIcon = IconType;

export interface Submenu {
  isActive: ComputedRef<boolean>;
  open: (isCollapseTransition?: boolean) => void;
  close: () => void;
  active: () => void;
  inactive: () => void;
}

export interface MenuProvide {
  collapse: ComputedRef<boolean>;
  mode: ComputedRef<MenuMode>;
  accordion: ComputedRef<boolean>;
  activeIndex: ComputedRef<number | string | undefined>;
  updateActiveIndex: (index: number | string | undefined) => void;
  addSubmenu: (key: symbol, submenu: Submenu) => void;
  delSubmenu: (key: symbol) => void;
  closeAllSubmenu: () => void;
  closeAccordionSumenus: (excludeKeys: Array<symbol>) => void;
  inactiveAllSubmenu: () => void;
  computedIndent: (level: number) => number;
}

export const MenuProvideKey = Symbol();

export type SubMenuProvide = {
  level: ComputedRef<number>;
  active: (isInitActve?: boolean) => void;
  closeAccordionSumenus: (excludeKeys: Array<symbol>) => void;
} | null;

export const SubMenuProvideKey = Symbol();