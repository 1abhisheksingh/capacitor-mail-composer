import { WebPlugin } from '@capacitor/core';
import type { MailComposerPlugin } from './definitions';
export declare class MailComposerWeb extends WebPlugin implements MailComposerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
