interface AllergySlice {
    isLoading,
    isEditing,
    name,
    severity,
    isHighRisk,
    symtoms,
}

interface AllergyPayload {
    name,
    severity,
    isHighRisk,
    symtoms,
    userId
}
