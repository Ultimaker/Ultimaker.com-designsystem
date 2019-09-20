import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

export function sizeEmitter(store): {} {
    @Module({ store, dynamic: true, namespaced: true, name: 'sizeEmitter' })
    class SizeEmitter extends VuexModule {
        public _storedHeights: { drawer: null | number; header: null | number } = {
            drawer: null,
            header: null,
        };

        @Mutation
        private setStoredHeight(payload: { key: string; value: number }): void {
            const { key, value } = payload;

            const mutation = {
                drawer: (): void => {
                    if (this._storedHeights.drawer === value) {
                        return;
                    }

                    this._storedHeights.drawer = value;
                },
                header: (): void => {
                    if (this._storedHeights.drawer === value) {
                        return;
                    }

                    this._storedHeights.header = value;
                },
            }[key];

            if (typeof mutation === 'function') {
                mutation();
            }
        }

        @Action
        public async SET_STORED_HEIGHT(payload: { key: string; value: number }): Promise<void> {
            this.setStoredHeight(payload);
        }

        public get storedHeights(): object {
            return this._storedHeights;
        }
    }

    return SizeEmitter;
}
