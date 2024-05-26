export async function findFiles(src) {
  const entries = await src.entries()
  let files     = [ ]

  for (let entry of entries) {
    if (await entry.isFile()) {
      files.push(entry)
    }
    else if (await entry.isDirectory()) {
      const subs = await findFiles(entry)
      files.push(...subs)
    }
  }
  return files
}
