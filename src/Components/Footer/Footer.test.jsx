import { render } from "@testing-library/react"
import FilterProvider from "../../context/FilterContext"
import MealsProvider from "../../context/MealsContext"
import { Footer } from "./Footer"

describe("Footer Component", () => {
  test('Should have a h3 element', () => {
    const FOOTER_COMPONENT = render(
      <MealsProvider>
        <FilterProvider>
          <Footer />
        </FilterProvider>
      </MealsProvider>
    )
    console.log(FOOTER_COMPONENT)
  })
})