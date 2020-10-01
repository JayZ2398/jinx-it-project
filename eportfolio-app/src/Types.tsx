/* Prefix all custom types with T to avoid possible name conflicts 
   with variables and components. Should be OK to not do this for prop 
   types defined within your file */

export type TPortfolio = {
  id: number,
  owner: number
  name: string,
  pages: number[]
} | null;

export type TPage = {
  id: number,
  name: string,
  number: number,
  sections: number[]
};

export type TSection = {
  id: number,
  name: string,
  type: string,
  number: number,
  content: string,
  media: string,
  image: number,
};
