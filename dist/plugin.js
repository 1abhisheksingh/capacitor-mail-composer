var capacitorMailComposer = (function (exports, core) {
    'use strict';

    const MailComposer = core.registerPlugin('MailComposer', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MailComposerWeb()),
    });

    class MailComposerWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MailComposerWeb: MailComposerWeb
    });

    exports.MailComposer = MailComposer;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
