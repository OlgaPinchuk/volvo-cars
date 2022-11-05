export interface ICar {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: number;
  imageUrl: string;
}

export const enum StatusCodes {
  LOADING,
  LOADED,
  ERROR,
}
