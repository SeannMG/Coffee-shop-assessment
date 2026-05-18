import { render, screen } from "@testing-library/react"
import Admin from "../Pages/Admin"
import { describe, it, expect} from "vitest"

describe ("Admin page", () => {
    it("renders admin heading", () => {
        render(<Admin />)
        expect(screen.getByText(/admin portal/i)).toBeInTheDocument()
    
    })
})