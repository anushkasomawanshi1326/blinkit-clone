function extractHooks(source) {
  const hooksUsed = source.match(/use[A-Z]\w+/g) || [];

  return {
    hooksUsed: [...new Set(hooksUsed)],
    usesState: hooksUsed.includes("useState"),
    usesEffect: hooksUsed.includes("useEffect"),
    usesContext: hooksUsed.includes("useContext")
  };
}

module.exports = { extractHooks };
