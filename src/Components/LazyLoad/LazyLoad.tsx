import React, { ComponentType, Suspense } from "react";

// Define an interface for Suspense configuration
interface WithSuspenseConfig<T> {
  component: ComponentType<T>; // The component to wrap
  fallback?: React.ReactNode; // The fallback UI for Suspense
}

/**
 * A higher-order component to wrap a component with Suspense.
 * @param config - Configuration object with component and fallback element.
 * @returns A component wrapped with Suspense.
 */
const withSuspense = <T extends object>(
  config: WithSuspenseConfig<T>
): React.FC<T> => {
  const { component: WrappedComponent, fallback = <div>Loading...</div> } = config;

  const SuspendedComponent: React.FC<T> = (props) => (
    <Suspense fallback={fallback}>
      <WrappedComponent {...props} />
    </Suspense>
  );

  return SuspendedComponent;
};

export default withSuspense;