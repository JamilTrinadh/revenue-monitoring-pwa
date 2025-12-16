import { Component } from "react"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error("UI Error:", error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-semibold">
              Something went wrong
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Please refresh the page or try again later.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
