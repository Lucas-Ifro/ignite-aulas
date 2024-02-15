import { query as q } from "faunadb"

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from "../../../services/fauna"

async function createIndex() {

  try {
    await fauna.query(
      q.CreateIndex({
        name: 'user_email',
        source: q.Collection('users'),
        terms: [{ field: ['data', 'email'] }],
      })
    );

    console.log('Índice "user_email" criado com sucesso!');

  } catch (error) {
    console.error('Erro ao criar o índice:', error);
  }
}

// Chama a função para criar o índice
createIndex();

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      
      const { email } = user
      console.log(user)

      await fauna.query(
        q.Create(
          q.Collection('users'),
          {data: { email } }
        )
      )

      return true
    },
  }
}
export default NextAuth(authOptions)
