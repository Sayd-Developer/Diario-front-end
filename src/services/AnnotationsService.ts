import AnnotationType from "@/types/AnnotationType";
import ICRUD from "@/interfaces/ICRUD";

const mockAnnotations: AnnotationType[] = [
  {
    id: 1,
    date: new Date(),
    title: "Minha anotação",
    description: "Descrição da anotação",
  },
  {
    id: 2,
    date: new Date(),
    title: "Anotação do Sayd",
    description: "Descrição da nova anotação",
  },
];

const AnnotationsService: ICRUD<AnnotationType> = {
  getAll: async (): Promise<AnnotationType[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockAnnotations);
      }, 500);
    });
  },
};

export default AnnotationsService;
