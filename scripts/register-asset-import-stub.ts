// Registers the asset stub loader for the current thread. Import this module
// first, then import the catalogue-touching code dynamically so every asset
// import resolves through the stub.
import { register } from 'node:module'

register(new URL('./asset-import-stub-loader.mjs', import.meta.url))
