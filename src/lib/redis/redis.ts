/* import Redis from 'redis';

const redisUrl = 'redis://root:pwd@redis:6379';

let redisClient: Redis.RedisClient | null = null;

export default async function getRedisClient(): Promise<Redis.RedisClient> {
  if (!redisClient) {
    redisClient = await Redis.createClient({
      url: redisUrl
    });
  }
  return redisClient;
} */