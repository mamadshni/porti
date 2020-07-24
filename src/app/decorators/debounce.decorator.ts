export function debounce(delay: number = 300): MethodDecorator {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const timeoutKey = Symbol();

    const original = descriptor.value;

    descriptor.value = function(...args): void {
      clearTimeout(this[timeoutKey]);
      this[timeoutKey] = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}
