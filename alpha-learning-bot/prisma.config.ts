import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    db: {
      url: "file:./data/alpha.db"
    }
  }
});
