interface AllergySlice {
    isLoading,
    isEditing,
    name,
    severity,
    isHighRisk,
    description,
}

interface AllergyPayload {
    name,
    severity,
    isHighRisk,
    description,
    userId
}
