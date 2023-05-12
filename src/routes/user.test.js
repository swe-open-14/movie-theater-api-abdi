const request = require("supertest");
const user = require("../../models/User");
const app = require("../app")


describe("/restaurants tests", () => {
    // CREATE TESTS HERE
test("GET /restaurant", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.status).toBe(200)
})

test("GET returns an array from /restaurants", async () => {
    const response = await request(app).get("/restaurants");
    expect(Array.isArray(response.body)).toBe(true)
})

test("GET returns correct number of restaurants from /restaurants", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.body.length).toBe(3)
})
})