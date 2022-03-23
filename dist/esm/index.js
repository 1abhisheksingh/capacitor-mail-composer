import { registerPlugin } from '@capacitor/core';
const MailComposer = registerPlugin('MailComposer', {
    web: () => import('./web').then(m => new m.MailComposerWeb()),
});
export * from './definitions';
export { MailComposer };
//# sourceMappingURL=index.js.map