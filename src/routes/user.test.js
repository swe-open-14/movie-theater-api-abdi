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
        const putResponse = await request(app).put("/user/1/shows/1").send();
        const response = await request(app).get("/user/1/shows");
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
    })
})

// THIS TEST CHECKS WHETHER THE PUT REQUEST ADDS SHOWS TO THE LIST ASSCOCIATED WITH THE USER

describe("put shows in users show list /user/:id/shows tests", () => {
    test("PUT /user/1/shows/1", async () => {
        // using these to compare whether a show was indeed added via comparison of length.
        const userShows = await request(app).get("/user/1/shows");
        const showsLength = userShows.body.length;
    
        // Make the PUT request to add a show 
        const putResponse = await request(app).put("/user/1/shows/1").send();

         // Retrieve the updated user's show list
    const updatedUserResponse = await request(app).get("/user/1/shows");
        expect(updatedUserResponse.body.length).toBe(1)
        expect(updatedUserResponse.body[0].title).toBe("King of Queens")
    })
})