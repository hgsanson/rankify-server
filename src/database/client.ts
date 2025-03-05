import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { env } from '../env' // Pegando as variáveis de ambiente

const pool = new Pool({
  connectionString: env.DATABASE_URL, // Pega a URL do Neon das variáveis de ambiente
  ssl: { rejectUnauthorized: false }, // Necessário para conexões externas seguras
})

// Exporta a conexão para ser usada em outras partes do projeto
export const db = drizzle(pool)
