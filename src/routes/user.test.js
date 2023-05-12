const request = require("supertest");
// const User = require("../../models/User");
const app = require("../app")


describe("/user tests", () => {
    // CREATE TESTS HERE
    test("GET /user", async () => {
        const response = await request(app).get("/user");
        expect(response.status).toBe(200)
    })

    test("GET /user returns an array", async () => {
        const response = await request(app).get("/user");
        expect(Array.isArray(response.body)).toBe(true)
    })

    test("GET /user returns correct number of users", async () => {
        const response = await request(app).get("/user")
        expect(response.body.length).toBe(2)
    })

})