export type ValidationResult = {
  error?: {
    details: {
      message: string;
    }[];
  };
}