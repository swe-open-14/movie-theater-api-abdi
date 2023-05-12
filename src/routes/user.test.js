const request = require("supertest");
// const User = require("../../models/User");
const app = require("../app")

// THIS TEST CHECKS WHETHER THE GET REQUEST RETURNS ALL THE USERS AS WELL AS WHAT TYPE OF DATA IT RETURNS 
describe("get all /user tests", () => {
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

// THIS TEST CHECKS WHETHER THE GET REQUEST RETURNS A SPECIFIC USER USING THEIR ID

describe("get a specific /user tests", () => {
    test("GET /user/1", async () => {
        const response = await request(app).get("/user/1");
        expect(response.body.id).toBe(1)
        expect(response.body.username).toBe("testUser@gmail.com")
    })

    test("GET /user/2", async () => {
        const response = await request(app).get("/user/2");
        expect(response.body.id).toBe(2)
        expect(response.body.username).toBe("someone@gmail.com")
    })
})

// THIS TEST CHECKS WHETHER THE GET REQUEST RETURNS ALL THE SHOWS ASSCOCIATED WITH A USER THROUGH ID

describe("get shows list belonging to /user/:id/shows tests", () => {
    test("GET /user/1/shows", async () => {
        const response = await request(app).get("/user/1/shows");
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
    })
})