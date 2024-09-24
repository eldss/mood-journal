# Mood Journal

_Work in Progress_

To run the Mood Journal web app, first install the dependencies:

```bash
pnpm install
```

To enable user logins you will need to create a [Clerk](https://clerk.com/) account and set up a project. After following the instructions on the website, add the following environment variables in `.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<key>
CLERK_SECRET_KEY=<key>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/journal
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/new-user
```

I also used a [Supabase](https://supabase.com/) Postgres database to store backend data. You will need an account and a project there as well. Once you have them, add the following environment variables to `.env`:

```
DATABASE_URL="<url>"
DIRECT_URL="<direct_url>"
```

You can see how to construct these from this post describing setting up Prisma with Supabase: https://supabase.com/partners/integrations/prisma.

Create the client packages by running

```bash
npx prisma generate
```

Sync the database model by running

```bash
npx prisma db push
```

You will also need an OpenAI account to enable AI evaluation of journal entries. Once you create an account, copy your secret key and add it to `.env.local`:

```
OPENAI_API_KEY=<secret-key>
```

Run the development server:

```bash
pnpm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

The app is not finished at this time so there are odd or unused visual elements, as well as unfinished styling, but it _will_ allow you to create an account, add journal entries, and get AI generated summaries of the entries via OpenAI APIs.
