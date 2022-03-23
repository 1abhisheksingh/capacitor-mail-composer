export interface MailComposerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
