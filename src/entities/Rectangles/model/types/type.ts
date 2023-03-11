export interface RectangleZone {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface RectangleResponse {
  id?: number;
  timestamp?: number;
  duration?: number;
  zone?: RectangleZone;
}

export interface RectangleSchema {
  data: RectangleResponse[];
  isLoading?: boolean;
  error?: string;
}
