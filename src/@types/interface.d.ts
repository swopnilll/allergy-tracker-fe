interface AllergySlice {
    isLoading,
    isEditing,
    name,
    severity,
    isHighRisk,
    symtoms,
    editAllergyId
}

interface AllergyPayload {
    name,
    severity,
    isHighRisk,
    symtoms,
    userId
}
