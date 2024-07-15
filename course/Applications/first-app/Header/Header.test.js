import { Header } from "./Header";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
describe("Header component tests", () => {
    it("check header text", () => {
        render(<Header></Header>)
        const eleRef = screen.getByTestId("header")
        expect(eleRef.textContent).toBe("A Sample Web Page")
    })
    test("check header text length", () => {
        render(<Header></Header>)
        const eleRef = screen.getByTestId("header")
        expect(eleRef.textContent.toHaveLength(10))
    })
})