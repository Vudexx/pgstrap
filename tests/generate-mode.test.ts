import { expect, test } from "bun:test"
import { shouldUsePglite } from "../src/generate"

test("type generation uses PGlite unless external Postgres is explicitly requested", () => {
  expect(shouldUsePglite()).toBe(true)
  expect(shouldUsePglite(true)).toBe(true)
  expect(shouldUsePglite(false)).toBe(false)
})
