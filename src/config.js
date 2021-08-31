import { config } from 'dotenv-safe'

config()

const getEnvVar = (name) => {
  if (!process.env[name]) {
    console.error(`Environment variable ${name} not found`)
    process.exit(1)
  }
  return process.env[name]
}

export const PORT = getEnvVar('PORT')
