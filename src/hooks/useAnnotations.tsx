import AnnotationsService from "@/services/AnnotationsService.ts";
import AnnotationType from "@/types/AnnotationType.ts";
import { useEffect, useState } from "react";

export default function useAnnotations(): [
  AnnotationType[],
  (annotations: AnnotationType[]) => void
] {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);
  useEffect(() => {
    async function getAnnotations() {
      setAnnotations(AnnotationsService.getAll());
    }
    getAnnotations();
  }, []);

  function updateAnnotations(annotations: AnnotationType[]) {
    setAnnotations(annotations);
  }

  return [annotations, updateAnnotations];
}
