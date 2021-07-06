function checkTestIdConsistency(actualId: string, ruleActual: any): boolean {
  if (!ruleActual || !actualId) {
    return false;
  }

  const idVariables = [ruleActual.id, ruleActual.globalId, ruleActual.parentGlobalId];

  return idVariables.some((id) => id === actualId);
}

export default checkTestIdConsistency;
