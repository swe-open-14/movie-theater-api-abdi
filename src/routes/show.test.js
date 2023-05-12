const request = require("supertest");
// const User = require("../../models/User");
const app = require("../app")

// THIS TEST CHECKS WHETHER THE GET REQUEST RETURNS ALL THE USERS AS WELL AS WHAT TYPE OF DATA IT RETURNS 
describe("get all /show tests", () => {

    test("GET /show", async () => {
        const response = await request(app).get("/show");
        expect(response.status).toBe(200)
    })

    test("GET /show returns an array", async () => {
        const response = await request(app).get("/show");
        expect(Array.isArray(response.body)).toBe(true)
    })

    test("GET /show returns correct number of shows", async () => {
        const response = await request(app).get("/show");
        expect(response.body.length).toBe(11)
    })
})

describe("get a specific /show tests", () => {
    test("GET /show/1", async () => {
        const response = await request(app).get("/show/1");
        expect(response.body.id).toBe(1)
        expect(response.body.genre).toBe("Drama")
    })

    test("GET /user/2", async () => {
        const response = await request(app).get("/show/2");
        expect(response.body.id).toBe(2)
        expect(response.body.genre).toBe("Sitcom")
    })
})