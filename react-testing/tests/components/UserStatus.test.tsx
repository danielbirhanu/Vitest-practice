import { screen, render } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus component", () => {
    it("display a welcome message when email is provided", () => {
        render(<UserStatus email="danielbirhanu@gmail.com" />)

        const welcomeMessage = screen.getByText(/Welcome/i)
        expect(welcomeMessage).toBeInTheDocument()
    })
})