import { WebPlugin } from '@capacitor/core';

import type { MailComposerPlugin } from './definitions';

export class MailComposerWeb extends WebPlugin implements MailComposerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
