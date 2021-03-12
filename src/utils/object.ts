interface Cache {
  copy: AnyMap
  original: AnyMap
}

function dc(obj: any, cache: Cache[] = []) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  const hit = cache.filter((i: Cache) => i.original === obj)[0]

  if (hit) {
    return hit.copy
  }

  const copy: AnyMap = Array.isArray(obj) ? [] : {}

  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach((key: string | number) => {
    copy[key] = dc(obj[key], cache)
  })

  return copy
}

export default {
  dc
}
