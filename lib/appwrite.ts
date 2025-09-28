import { Client, Account } from "appwrite";

let cachedClient: Client | null = null;
let cachedAccount: Account | null = null;

function createBrowserClient(): Client {
  if (cachedClient) return cachedClient;

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

  if (!endpoint) {
    throw new Error("Missing NEXT_PUBLIC_APPWRITE_ENDPOINT environment variable");
  }
  if (!projectId) {
    throw new Error("Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID environment variable");
  }

  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId);

  cachedClient = client;
  return client;
}

export function getAccount(): Account {
  if (cachedAccount) return cachedAccount;
  const client = createBrowserClient();
  cachedAccount = new Account(client);
  return cachedAccount;
}
