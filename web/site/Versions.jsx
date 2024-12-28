import versions from '@/config/versions.json'

export const projectVersion = name =>
  versions[name.replaceAll(/\//g, '')]

export default versions