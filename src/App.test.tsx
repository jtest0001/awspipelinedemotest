import { expect, test } from "vitest"
import { fireEvent, render } from "@testing-library/react"
import App from "./App"

test("test app", () => {
  const { getByText, getByTestId } = render(<App />)
  const btn = getByTestId("count-btn")
  fireEvent.click(btn)

  expect(getByText("Hello Worldss")).toBeInTheDocument()
})
