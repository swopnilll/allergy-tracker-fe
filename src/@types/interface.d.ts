interface AllergySlice {
  isLoading;
  isEditing;
  name;
  severity;
  isHighRisk;
  symtoms;
  editAllergyId;
}

interface AllergyPayload {
  name;
  severity;
  isHighRisk;
  symtoms;
  userId;
}

interface AllAllergySlice {
  isLoading;
  allergies;
  totalAllergies;
  numOfPages;
  page;
  search;
  sort;
  sortOptions;
}
