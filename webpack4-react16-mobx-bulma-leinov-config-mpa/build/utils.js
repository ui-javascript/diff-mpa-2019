function shouldReadAsEntry(baseName) {
  const entryFirstLetter = baseName.charAt(0)
  return entryFirstLetter < 'A' || entryFirstLetter > 'Z'
}

module.exports = shouldReadAsEntry
