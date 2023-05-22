import React, { PropsWithChildren } from "react";
import ErrorScreen from "./ErrorScreen";

type Props = PropsWithChildren;

class ErrorBoundary extends React.Component<
  Props,
  { hasError: boolean; errorText?: string }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: any) {
    this.setState({ errorText: error.message });
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen errorText={this.state.errorText} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
