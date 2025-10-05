import { Client, Account } from "appwrite";

/**
 * Cached Appwrite client and account instances for browser usage.
 * Using singleton pattern to avoid creating multiple client connections.
 */
let cachedClient: Client | null = null;
let cachedAccount: Account | null = null;

/**
 * Creates and configures an Appwrite client for browser use.
 * The client is cached to ensure we only create one instance per session.
 * 
 * @returns Configured Appwrite Client instance
 * @throws Error if required environment variables are missing
 */
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

/**
 * Returns an Appwrite Account instance for authentication operations.
 * This should be used for all OAuth and session management operations.
 * 
 * @returns Appwrite Account instance
 * 
 * @example
 * ```typescript
 * const account = getAccount();
 * const user = await account.get();
 * ```
 */
export function getAccount(): Account {
  if (cachedAccount) return cachedAccount;
  const client = createBrowserClient();
  cachedAccount = new Account(client);
  return cachedAccount;
}
