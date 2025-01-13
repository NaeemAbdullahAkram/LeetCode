
const shortestSubstrings = arr => {
  const substringSets = arr.map(str => {
    const set = new Set()
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        set.add(str.slice(i,j))
      }
    }
    return set
  })

  const deleteOffAllSets = str => {
    substringSets.forEach(set => set.delete(str))
  }

  substringSets.forEach((set, idx, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === idx) continue
      const secondSet = arr[i]
      set.forEach(val => {
        if (secondSet.has(val)){
          deleteOffAllSets(val)
        }
      })
      secondSet.forEach(val => {
        if (set.has(val)){
          deleteOffAllSets(val)
        }
      })
    }
  })
  
  return substringSets.map(set => {
    const arr = Array.from(set)
    arr.sort((a,b) => a.length === b.length 
      ? a < b ? -1 : 1
      : a.length - b.length
    )
    return arr[0] || ''
  })
}