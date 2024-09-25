import { getUUID } from "./../../src/plugins/get-id.plugin";

describe("get-id.plugin.ts", () => {
  test("getUUUID() should return a UUUID", () => {
    const uuid = getUUID();

    //console.log(uuid);

    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
