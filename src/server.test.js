const supertest = require("supertest");
const app = require("./server");

describe("GET /api/public-image", () => {
  test("should respond with a status code 200", async () => {
    await supertest(app)
      .get("/api/public-image")
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
      });
  });
  test("should specify json in the content type header", async () => {
    await supertest(app)
      .get("/api/public-image")
      .then((res) => {
        expect(res.header["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });
  });
  test("should specify json in the content type header", async () => {
    await supertest(app)
      .get("/api/public-image")
      .then((res) => {
        expect(res.body).toBeDefined();
      });
  });
});
