import type { PiniaPluginContext } from 'pinia';

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    storage: boolean;
  }
}

export function localStoragePlugin(context: PiniaPluginContext): void {
  const storage = context.options.storage;

  if (storage) {
    const data = localStorage.getItem(context.store.$id);
    if (data) {
      context.store.$patch(JSON.parse(data));
    }

    context.store.$subscribe(() => {
      localStorage.setItem(context.store.$id, JSON.stringify(context.store.$state));
    });
  }
}
